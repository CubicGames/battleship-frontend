<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";

import { ethosForVue, TransactionBlock } from "ethos-connect-vue";
import { BATTLESHIP_CONTRACT, STATE_OBJECT_ID } from "../constants";
import { GenerateBoardConfig } from "../board";
import { GenBoardProof, GenShotProof } from "../index";
import Dialog from "./misc-overflowed.vue";
import defeatImg from "../assets/game/defeat_img.png";
import defeatLight from "../assets/game/light1.png";
import winImg from "../assets/game/win_img.png";
import winLight from "../assets/game/light2.png";

let showPopup = ref(false);
const shipLengths = [5, 4, 3, 3, 2];
const totalParts = [5, 9, 12, 15, 17];

const { context } = ethosForVue() || {};
const { wallet } = context?.wallet || {};

const store = useStore();
const GAS_BUDGET = 100000000;

enum GameStage {
  NotInGame = 0,
  WaitJoin,
  MyTurn,
  WaitMove,
  GameOver,
}

const gameDescription = [
  "Not in a game",
  "Waiting for opponent to join",
  "My turn to move",
  "Waiting for opponent to move",
  "Game over",
];

let gameStage = GameStage.NotInGame;

const player = ref("O");

const PlaceShipPart = (x: number, y: number) => {
  if (store.state.gameStarted) return;

  //console.log(`store.state.myBoard=${store.state.myBoard}`)
  if (store.state.myBoard[x][y] !== "") return;

  store.commit("setMyBoard", { value: player.value, x, y });
  store.commit("addToCurrentShip", { x, y });
  store.commit("setNumShipParts", store.state.numShipParts + 1);
  if (totalParts.find((element) => element === store.state.numShipParts)) {
    AddShip();
  }
  if (store.state.numShipParts > totalParts[totalParts.length - 1]) {
    console.log(`Invalid number of ship parts: ${store.state.numShipParts}`);
    NewGame();
    return;
  }
};

const AddShip = () => {
  let currentShip = store.state.currentShip;
  if (currentShip.length <= 1) {
    console.log(`Incomplete ship, ship length: ${currentShip.length}`);
    NewGame();
    return;
  }
  let aligned = -1;
  if (currentShip.every((element) => element.x === currentShip[0].x)) {
    aligned = 1;
    currentShip.sort((a, b) => {
      return a.y < b.y ? -1 : a.y > b.y ? 1 : 0;
    });
  } else if (currentShip.every((element) => element.y === currentShip[0].y)) {
    aligned = 0;
    currentShip.sort((a, b) => {
      return a.x < b.x ? -1 : a.x > b.x ? 1 : 0;
    });
  }
  if (aligned === -1) {
    console.log(
      `Unaligned ship, ship: ${JSON.stringify(currentShip, null, 2)}`
    );
    NewGame();
    return;
  }

  if (store.state.myBoardInShips.length >= 5) {
    console.log(`Attempt to put too many ships`);
    NewGame();
    return;
  }
  let expectedLen = shipLengths[store.state.myBoardInShips.length];
  if (currentShip.length !== expectedLen) {
    console.log(
      `Incorrect ship length: ${currentShip.length}, expected: ${expectedLen}`
    );
    NewGame();
    return;
  }
  store.commit("addToMyBoardInShips", [
    currentShip[0].x.toString(),
    currentShip[0].y.toString(),
    aligned.toString(),
  ]);
  store.commit("clearCurrentShip");
};

const ResetShip = () => {
  for (let i = 0; i < store.state.currentShip.length; i++) {
    let { x, y } = store.state.currentShip[i];
    store.commit("setMyBoard", { value: "", x, y });
  }
  store.commit("clearCurrentShip");
};

const MakeShot = async (x: number, y: number) => {
  if (!store.state.gameStarted) return;
  if (store.state.gameStage != GameStage.MyTurn) return;
  if (store.state.opponentBoard[x][y] !== "") return;

  console.log(
    `store.state.opponentLastShot =${JSON.stringify(
      store.state.opponentLastShot,
      null,
      2
    )}`
  );
  if (store.state.gameIndex !== -1) {
    // game creator
    if (store.state.opponentLastShot.x == -1) {
      await firstTurn(store.state.gameIndex, x, y);
    } else {
      await turn(
        store.state.myBoardInShips,
        store.state.gameIndex,
        store.state.hit,
        x,
        y
      );
    }
  } else {
    await turn(
      store.state.myBoardInShips,
      store.state.toJoinGameIndex,
      store.state.hit,
      x,
      y
    );
  }

  store.commit("setOpponentBoard", { value: "m", x, y });
  store.commit("setMyLastShot", { x, y });
  store.commit("setGameStage", GameStage.WaitMove);
};

const ListGames = async () => {
  console.log("List games");

  const result = await context.wallet.provider.getObject({
    id: STATE_OBJECT_ID,
    options: { showContent: true },
  });
  console.log(`getObject result=${JSON.stringify(result, null, 2)}`);
  const gameIndex = result.data.content.fields.game_index;
  console.log(`Got gameIndex=${gameIndex}`);

  let resultGame = await getGame(gameIndex);
  if (resultGame.data.content.fields.value.fields.participants.length != 1) {
    console.log(
      `Incorrect number of participants=${resultGame.data.content.fields.value.fields.participants.length}`
    );
    return;
  }
  let opponentAddress =
    resultGame.data.content.fields.value.fields.participants[0];
  console.log(`opponentAddress=${opponentAddress}`);
  console.log(`context.wallet.wallet.address=${context.wallet.wallet.address}`);
  if (opponentAddress === context.wallet.wallet.address) {
    console.log(`Cannot join a game created by oneself`);
    return;
  }
  store.commit("setOpponentAddress", opponentAddress);
  store.commit("setToJoinGameIndex", gameIndex);

  store.commit("setIsRandomBoardDisabled", true);
  store.commit("setIsStartGameDisabled", true);
  store.commit("setIsListGamesDisabled", true);
  store.commit("setIsJoinGameDisabled", false);
  /*
  const subscriptionId = await context.wallet.provider.subscribeEvent({
    filter: { Sender: opponentAddress },
    onMessage(event: SuiEvent) {
    // handle subscription notification message here. This function is called
    // once per subscription message.
      console.log(`opponent Event=${JSON.stringify(event, null, 2)}`)
    },
});
*/
};

const StartGame = async () => {
  if (store.state.gameStarted) return;
  console.log("Start game");
  console.log(
    `store.state.myBoardInShips=${JSON.stringify(
      store.state.myBoardInShips,
      null,
      2
    )}`
  );
  if (store.state.myBoardInShips.length !== 5) {
    console.log(`Not enough ships: ${store.state.myBoardInShips.length}`);
    return;
  }

  await createGame(store.state.myBoardInShips);

  store.commit("setGameStarted");
  store.commit("setGameStage", GameStage.WaitJoin);
  store.commit("setIsRandomBoardDisabled", true);
  store.commit("setIsStartGameDisabled", true);
  store.commit("setIsListGamesDisabled", true);
  store.commit("setIsJoinGameDisabled", true);

  getJoinedEventLoop();
};

const JoinGame = async () => {
  if (store.state.gameStarted) return;
  console.log("Join game");
  console.log(
    `store.state.myBoardInShips=${JSON.stringify(
      store.state.myBoardInShips,
      null,
      2
    )}`
  );
  if (store.state.myBoardInShips.length !== 5) {
    console.log(`Not enough ships: ${store.state.myBoardInShips.length}`);
    return;
  }

  await joinGame(store.state.toJoinGameIndex, store.state.myBoardInShips);

  store.commit("setGameStage", GameStage.WaitMove);
  store.commit("setGameStarted");
  store.commit("setIsRandomBoardDisabled", true);
  store.commit("setIsStartGameDisabled", true);
  store.commit("setIsListGamesDisabled", true);
  store.commit("setIsJoinGameDisabled", true);
};

const NewGame = () => {
  console.log("New game");

  // Reset all data
  store.commit("setDialog", false);
  store.commit("setIsRandomBoardDisabled", false);
  store.commit("setIsStartGameDisabled", true);
  store.commit("setIsListGamesDisabled", true);
  store.commit("setIsJoinGameDisabled", true);
  store.commit("setGameStage", GameStage.NotInGame);
  store.commit("unsetGameStarted");
  store.commit("setGameIndex", -1);
  store.commit("setGameId", "");
  store.commit("setGameWinner", "");
  store.commit("setToJoinGameIndex", -1);
  store.commit("setOpponentLastShot", { x: -1, y: -1 });
  store.commit("setLastHitTimestamp", 0);
  store.commit("setMyLastShot", { x: -1, y: -1 });
  store.commit("setHit", false);
  store.commit("setOpponentAddress", "");
  store.commit("clearCurrentShip");
  store.commit("setNumShipParts", 0);
  store.commit("setMyBoardInShips", []);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      store.commit("setMyBoard", { value: "", x: i, y: j });
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      store.commit("setOpponentBoard", { value: "", x: i, y: j });
    }
  }
};

const GenRandomBoard = () => {
  let { board, boardInShips } = GenerateBoardConfig();
  console.log(`board=${JSON.stringify(board, null, 2)}`);
  console.log(`boardInShips=${JSON.stringify(boardInShips, null, 2)}`);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      store.commit("setMyBoard", { value: board[i][j], x: i, y: j });
    }
  }
  store.commit("setMyBoardInShips", boardInShips);
  store.commit("setIsStartGameDisabled", false);
  store.commit("setIsListGamesDisabled", false);
  store.commit("setIsJoinGameDisabled", true);
};

const createGame = async (boardInShips: string[][]) => {
  console.log("createGame start");
  if (!wallet) return;
  let { hashArr, proofArr } = await GenBoardProof(boardInShips);
  console.log(`createGame hashArr=${JSON.stringify(hashArr, null, 2)}`);
  console.log(`createGame proofArr=${JSON.stringify(proofArr, null, 2)}`);

  const transactionBlock = new TransactionBlock();
  transactionBlock.moveCall({
    target: `${BATTLESHIP_CONTRACT}::battleship::new_game`,
    arguments: [
      transactionBlock.pure(STATE_OBJECT_ID),
      transactionBlock.pure(hashArr),
      transactionBlock.pure(proofArr),
    ],
  });
  transactionBlock.setGasBudget(GAS_BUDGET);

  let result = await wallet.signAndExecuteTransactionBlock({
    transactionBlock,
    options: {
      showEffects: true,
      showEvents: true,
    },
  });
  console.log(`createGame result=${JSON.stringify(result, null, 2)}`);
  let gameIndex = result.events[0].parsedJson.nonce;
  console.log(`gameIndex=${gameIndex}`);
  store.commit("setGameIndex", gameIndex);
};

const getShotEventLoop = () => {
  setInterval(function () {
    console.log("queryEvents: ShotEvent");
    context.wallet.provider
      .queryEvents({
        /*
    query: { And: [{ Sender: store.state.opponentAddress },
       { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::ShotEvent`}]},
*/
        query: {
          MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::ShotEvent`,
        },
        limit: 1,
        // fetch the object content field
      })
      .then((result: any) => {
        console.log(`result queryEvents=${JSON.stringify(result, null, 2)}`);
        if (result.data.length == 0) {
          return;
        }
        let { x, y, game_index } = result.data[0].parsedJson;
        console.log(`ShotEvent at(${x}, ${y})`);
        if (
          game_index != store.state.gameIndex &&
          game_index != store.state.toJoinGameIndex
        ) {
          console.log(`Not my game index, ${game_index}`);
          return;
        }
        let sender = result.data[0].sender;
        if (sender != store.state.opponentAddress) {
          console.log(`Not opponent event, ${sender}`);
          return;
        }

        let shotTimestamp = result.data[0].timestampMs;
        console.log(`shotTimestamp=${shotTimestamp}`);
        console.log(
          `store.state.opponentLastShotTs=${store.state.opponentLastShotTs}`
        );
        if (shotTimestamp <= store.state.opponentLastShotTs) {
          return;
        }

        store.commit("setOpponentLastShotTs", shotTimestamp);

        console.log(
          `store.state.opponentLastShot=${JSON.stringify(
            store.state.opponentLastShot,
            null,
            2
          )}`
        );
        store.commit("setOpponentLastShot", { x, y });
        if ("O" == store.state.myBoard[x][y]) {
          store.commit("setMyBoard", { value: "X", x, y });
          store.commit("setHit", true);
        }
        if ("" == store.state.myBoard[x][y]) {
          store.commit("setMyBoard", { value: "m", x, y });
          store.commit("setHit", false);
        }
        store.commit("setGameStage", GameStage.MyTurn);
      });
  }, 5000);
};

const getJoinedEventLoop = () => {
  let intervalId = setInterval(function () {
    console.log("queryEvents: JoindEvent");
    context.wallet.provider
      .queryEvents({
        /*
    query: { And: [{ Sender: store.state.opponentAddress },
       { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::ReportEvent`}]},
*/
        query: {
          MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::JoindEvent`,
        },
        limit: 1,
        // fetch the object content field
      })
      .then((result: any) => {
        console.log(
          `result queryEvents JoindEvent=${JSON.stringify(result, null, 2)}`
        );
        if (result.data.length == 0) {
          return;
        }
        let { nonce: gameIndex, by: opponentAddress } =
          result.data[0].parsedJson;
        if (gameIndex != store.state.gameIndex) {
          return;
        }
        let sender = result.data[0].sender;
        store.commit("setOpponentAddress", opponentAddress);
        console.log(`opponentAddress=${opponentAddress} joined`);
        store.commit("setGameStage", GameStage.MyTurn);
        clearInterval(intervalId);
      });
  }, 5000);
};

const getReportEventLoop = () => {
  setInterval(function () {
    console.log("queryEvents: ReportEvent");
    context.wallet.provider
      .queryEvents({
        /*
    query: { And: [{ Sender: store.state.opponentAddress },
       { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::ReportEvent`}]},
*/
        query: {
          MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::ReportEvent`,
        },
        limit: 1,
        // fetch the object content field
      })
      .then((result: any) => {
        console.log(`result queryEvents=${JSON.stringify(result, null, 2)}`);
        if (result.data.length == 0) {
          return;
        }
        let { hit, game_index } = result.data[0].parsedJson;
        if (
          game_index != store.state.gameIndex &&
          game_index != store.state.toJoinGameIndex
        ) {
          return;
        }
        let sender = result.data[0].sender;
        if (sender != store.state.opponentAddress) {
          return;
        }
        let hitTimestamp = result.data[0].timestampMs;
        console.log(`hitTimestamp=${hitTimestamp}`);
        console.log(
          `store.state.lastHitTimestamp=${store.state.lastHitTimestamp}`
        );
        if (hitTimestamp <= store.state.lastHitTimestamp) {
          return;
        }

        store.commit("setLastHitTimestamp", hitTimestamp);
        if (hit === "1") {
          let { x, y } = store.state.myLastShot;
          if (x != -1 && y != -1) {
            store.commit("setOpponentBoard", { value: "X", x, y });
            console.log(`my last shot at(${x}, ${y}) is a hit`);
          }
        }
      });
  }, 5000);
};

const getWonEventLoop = () => {
  let intervalId = setInterval(function () {
    console.log("queryEvents: WonEvent");
    context.wallet.provider
      .queryEvents({
        /*
    query: { And: [{ Sender: store.state.opponentAddress },
       { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::WonEvent`}]},
*/
        query: {
          MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::WonEvent`,
        },
        limit: 1,
        // fetch the object content field
      })
      .then((result: any) => {
        console.log(`result queryEvents=${JSON.stringify(result, null, 2)}`);
        if (result.data.length == 0) {
          return;
        }
        let { winner, nonce: game_index, by } = result.data[0].parsedJson;
        console.log(`WonEvent winner=${winner}, game_index=${game_index}`);
        if (
          game_index != store.state.gameIndex &&
          game_index != store.state.toJoinGameIndex
        ) {
          console.log(`Not my game index, ${game_index}`);
          return;
        }

        store.commit("setGameWinner", winner);
        store.commit("setGameStage", GameStage.GameOver);
        store.commit("setDialog", true);
        clearInterval(intervalId);
      });
  }, 5000);
};

const joinGame = async (gameIndex: number, boardInShips: string[][]) => {
  console.log("joinGame start");
  if (!wallet) return;

  let { hashArr, proofArr } = await GenBoardProof(boardInShips);
  const transactionBlock = new TransactionBlock();
  transactionBlock.moveCall({
    target: `${BATTLESHIP_CONTRACT}::battleship::join_game`,
    arguments: [
      transactionBlock.pure(STATE_OBJECT_ID),
      transactionBlock.pure(gameIndex),
      transactionBlock.pure(hashArr),
      transactionBlock.pure(proofArr),
    ],
  });
  transactionBlock.setGasBudget(GAS_BUDGET);

  let result = await wallet.signAndExecuteTransactionBlock({
    transactionBlock,
    options: {
      showEffects: true,
      showEvents: true,
    },
  });
  console.log(`joinGame result=${JSON.stringify(result, null, 2)}`);
  let gameIndexConfirmed = result.events[0].parsedJson.nonce;
  console.log(`gameIndexConfirmed=${gameIndexConfirmed}`);

  getShotEventLoop();
  getReportEventLoop();
  getWonEventLoop();
};

const getGameById = async (gameId: string) => {
  const resultGame = await context.wallet.provider.getObject({
    id: gameId,
    options: { showContent: true },
  });
  console.log(`getObject resultGame=${JSON.stringify(resultGame, null, 2)}`);

  return resultGame;
};

const getGame = async (gameIndex: number) => {
  const resultState = await context.wallet.provider.getObject({
    id: STATE_OBJECT_ID,
    options: { showContent: true },
  });
  const gamesId = resultState.data.content.fields.games.fields.id.id;
  const resultFields = await context.wallet.provider.getDynamicFields({
    parentId: gamesId,
  });
  const gameId = resultFields.data.filter(
    (game: any) => game.name.value == gameIndex.toString()
  )[0].objectId;

  console.log(`Got gameId=${gameId}`);
  store.commit("setGameId", gameId);

  let game = await getGameById(gameId);
  return game;
};

const firstTurn = async (gameIndex: number, x: number, y: number) => {
  console.log("firstTurn start");
  if (!wallet) return;

  const transactionBlock = new TransactionBlock();
  transactionBlock.moveCall({
    target: `${BATTLESHIP_CONTRACT}::battleship::first_turn`,
    arguments: [
      transactionBlock.pure(STATE_OBJECT_ID),
      transactionBlock.pure(gameIndex),
      transactionBlock.pure(x),
      transactionBlock.pure(y),
    ],
  });
  transactionBlock.setGasBudget(GAS_BUDGET);

  let result = await wallet.signAndExecuteTransactionBlock({
    transactionBlock,
    options: {
      showEffects: true,
      showEvents: true,
    },
  });
  console.log(`firstTurn result=${JSON.stringify(result, null, 2)}`);
  let xConfirmed = result.events[0].parsedJson.x;
  let yConfirmed = result.events[0].parsedJson.y;
  console.log(`xConfirmed=${xConfirmed}`);
  console.log(`yConfirmed=${yConfirmed}`);

  getShotEventLoop();
  getReportEventLoop();
  getWonEventLoop();
};

const turn = async (
  boardInShips: string[][],
  gameIndex: number,
  hit: boolean,
  x: number,
  y: number
) => {
  console.log(
    `turn start,  gameIndex=${gameIndex}, hit=${hit}, x=${x}, y=${y}`
  );
  if (!wallet) return;

  let { _, proofArr } = await GenShotProof(
    boardInShips,
    store.state.opponentLastShot.x,
    store.state.opponentLastShot.y,
    hit
  );
  console.log(`turn proofArr=${JSON.stringify(proofArr, null, 2)}`);

  const transactionBlock = new TransactionBlock();
  transactionBlock.moveCall({
    target: `${BATTLESHIP_CONTRACT}::battleship::turn`,
    arguments: [
      transactionBlock.pure(STATE_OBJECT_ID),
      transactionBlock.pure(gameIndex),
      transactionBlock.pure(hit),
      transactionBlock.pure(x),
      transactionBlock.pure(y),
      transactionBlock.pure(proofArr),
    ],
  });
  transactionBlock.setGasBudget(GAS_BUDGET);

  let result = await wallet.signAndExecuteTransactionBlock({
    transactionBlock,
    options: {
      showEffects: true,
      showEvents: true,
    },
  });
  console.log(`turn result=${JSON.stringify(result, null, 2)}`);
  /*
  let xConfirmed = result.events[0].parsedJson.x
  let yConfirmed = result.events[0].parsedJson.y
  console.log(`xConfirmed=${xConfirmed}`)
  console.log(`yConfirmed=${yConfirmed}`)
*/
};
</script>

<template>
  <div v-if="store.state.dialog" class="game_result_modal">
    <div
      :class="[
        'result_modal_bg',
        store.state.gameWinner !== '' &&
        store.state.gameWinner === store.state.opponentAddress
          ? 'result_modal_bg_defeat'
          : 'result_modal_bg_win',
      ]"
    ></div>
    <div class="result_modal_container">
      <div class="result_modal_img">
        <img
          v-if="
            store.state.gameWinner !== '' &&
            store.state.gameWinner === store.state.opponentAddress
          "
          :src="defeatImg"
          alt=""
        />
        <img
          v-if="
            store.state.gameWinner !== '' &&
            store.state.gameWinner !== store.state.opponentAddress
          "
          :src="winImg"
          alt=""
        />
      </div>
      <div class="result_close" @click="store.state.dialog = false">Close</div>
    </div>
  </div>
  <!-- <Dialog class="regulation_box"></Dialog> -->
  <!-- <v-dialog
      v-model="store.state.dialog"
      width="100%"
      height="100%"
    > -->
  <!-- <div class="game_result_modal">dddd</div> -->
  <!-- <v-card>
        <v-card-text>
          {{ store.state.gameWinner === '' ?
'' :  store.state.gameWinner === store.state.opponentAddress ? 'You lose':
'You win'}}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="store.state.dialog = false">Ok</v-btn>
        </v-card-actions>
      </v-card> -->
  <!-- </v-dialog> -->
  <main class="pt-2 text-center page_container">
    <div class="text-3xl font-mono font-bold italic text-blue-400 game_info">
      <div class="game_number">
        <span class="name">Duo Code</span>
        <span class="val">
          {{
            store.state.gameIndex != -1
              ? store.state.gameIndex
              : store.state.toJoinGameIndex != -1
              ? store.state.toJoinGameIndex
              : "--"
          }}</span
        >
      </div>
      <div class="game_logo"></div>
      <div class="game_status">
        <span class="name">Status</span>
        <span class="val">{{ gameDescription[store.state.gameStage] }}</span>
      </div>
    </div>
    <!-- <div class="row">
      <h3 class="text-xl mb-4 text-cyan-500">
        {{
          store.state.gameWinner === ""
            ? ""
            : store.state.gameWinner === store.state.opponentAddress
            ? "You lose"
            : "You win"
        }}
      </h3>
      <h3 class="text-xl mb-4 text-cyan-500">
        game number:
        {{
          store.state.gameIndex != -1
            ? store.state.gameIndex
            : store.state.toJoinGameIndex != -1
            ? store.state.toJoinGameIndex
            : ""
        }}
      </h3>
      <h3 class="text-xl mb-4 text-cyan-500">
        Status: {{ gameDescription[store.state.gameStage] }}
      </h3>
    </div> -->

    <div class="game_content">
      <div class="game_item game_item_me">
        <h3 class="text-xl text-rose-500 title title_me">Me</h3>
        <div class="flex flex-col items-center game_chessboard">
          <div v-for="(row, x) in store.state.myBoard" :key="x" class="flex">
            <div
              v-for="(cell, y) in row"
              :key="y"
              :class="`border-x border-y border-blue-400 border-solid hover:bg-gray-700 flex
            items-center justify-center material-icons-outlined text-4xl
            cursor-pointer text-cyan-500 chessboard_item chessboard_me`"
            >
              {{
                cell === "X"
                  ? "cancel"
                  : cell == "O"
                  ? "circle"
                  : cell == "m"
                  ? "close"
                  : ""
              }}
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="game_pk"></div> -->
      <div class="game_item game_item_opponent">
        <h3 class="text-xl text-rose-500 title title_opponent">Opponent</h3>
        <div class="flex flex-col items-center game_chessboard">
          <div
            v-for="(row, x) in store.state.opponentBoard"
            :key="x"
            class="flex"
          >
            <div
              v-for="(cell, y) in row"
              :key="y"
              @click="MakeShot(x, y)"
              :class="`border-x border-y border-blue-400 border-solid hover:bg-gray-700 flex
            items-center justify-center material-icons-outlined text-4xl
            cursor-pointer text-cyan-500 chessboard_item chessboard_opponent`"
            >
              {{
                cell === "X"
                  ? "cancel"
                  : cell == "O"
                  ? "circle"
                  : cell == "m"
                  ? "close"
                  : ""
              }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="btn_list">
      <button
        @click="NewGame"
        class="px-5 py-2 uppercase font-bold hover:bg-[#67ADFF] duration-300 btn-item btn-item-default"
      >
        NEW GAME
      </button>

      <button
        @click="GenRandomBoard"
        :disabled="store.state.isRandomBoardDisabled"
        :class="{
          'px-5': true,
          'py-2': true,
          uppercase: true,
          'font-bold': true,
          'duration-300': true,
          'hover:bg-[#67ADFF]': store.state.isRandomBoardDisabled
            ? false
            : true,
          'btn-item': true,
          'btn-item-default': store.state.isRandomBoardDisabled ? false : true,
          'btn-item-disabled': store.state.isRandomBoardDisabled ? true : false,
        }"
      >
        <span
          :class="{
            'opacity-30': store.state.isRandomBoardDisabled ? true : false,
          }"
          >RANDOM BOARD</span
        >
      </button>

      <button
        @click="StartGame"
        :disabled="store.state.isStartGameDisabled"
        :class="{
          'px-5': true,
          'py-2': true,
          uppercase: true,
          'font-bold': true,
          'duration-300': true,
          'btn-item-default': store.state.isStartGameDisabled ? false : true,
          'btn-item-disabled': store.state.isStartGameDisabled ? true : false,
          'hover:bg-[#67ADFF]': store.state.isStartGameDisabled ? false : true,
          'btn-item': true,
        }"
      >
        <span
          :class="{
            'opacity-30': store.state.isStartGameDisabled ? true : false,
          }"
          >START GAME</span
        >
      </button>

      <button
        @click="ListGames"
        :disabled="store.state.isListGamesDisabled"
        :class="{
          'px-5': true,
          'py-2': true,
          uppercase: true,
          'font-bold': true,
          'duration-300': true,
          'btn-item-default': store.state.isListGamesDisabled ? false : true,
          'btn-item-disabled': store.state.isListGamesDisabled ? true : false,
          'hover:bg-[#67ADFF]': store.state.isListGamesDisabled ? false : true,
          'btn-item': true,
        }"
      >
        <span
          :class="{
            'opacity-30': store.state.isListGamesDisabled ? true : false,
          }"
          >LIST GAMES</span
        >
      </button>

      <button
        @click="JoinGame"
        :disabled="store.state.isJoinGameDisabled"
        :class="{
          'px-5': true,
          'py-2': true,
          uppercase: true,
          'font-bold': true,
          'duration-300': true,
          'btn-item-default': store.state.isJoinGameDisabled ? false : true,
          'btn-item-disabled': store.state.isJoinGameDisabled ? true : false,
          'hover:bg-[#67ADFF]': store.state.isJoinGameDisabled ? false : true,
          'btn-item': true,
        }"
      >
        <span
          :class="{
            'opacity-30': store.state.isJoinGameDisabled ? true : false,
          }"
          >JOIN GAME</span
        >
      </button>
    </div>
  </main>
</template>

<style scoped>
.game_result_modal {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: url("../assets/image2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.result_modal_bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(16, 11, 46, 0.8);
  backdrop-filter: blur(4px);
}
.result_modal_bg_win {
  background-image: url("../assets/game/light2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.result_modal_bg_defeat {
  background-image: url("../assets/game/light1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.result_modal_container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.result_modal_img {
  width: 640px;
  height: 545px;
}
.result_modal_img img {
  width: 100%;
  height: 100%;
}
.result_close {
  width: 82px;
  height: 34px;
  background: linear-gradient(180deg, #ffffff 0%, #01ffff 100%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  text-align: center;
  line-height: 34px;
  color: #0d041f;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-top: 30px;
  cursor: pointer;
}

.page_container {
  height: calc(100% - 107px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.regulation_box {
  position: absolute;
  width: 128px;
  height: 40px;
  left: 360px;
  top: 16px;

  background: linear-gradient(90deg, #2dd6ff 0.62%, #ff00d2 99.37%);
  border-radius: 20px;
}

.game_info {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  min-width: 770px;
  margin: 0 auto;
  align-items: center;
  width: 100%;
}

.game_number,
.game_status {
  background: url("../assets/game/bg.png") no-repeat;
  width: 272px;
  height: 96px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.game_logo {
  width: 200px;
  height: 184px;
  background: url("../assets/game/logo.png") no-repeat;
  background-position: center;
  background-size: 100% 100%;
}
.name {
  color: #01ffff;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}

.val {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  text-shadow: 2px 2px 12px rgba(1, 255, 255, 0.5);
}
.game_content {
  width: 100%;
  max-width: 1200px;
  min-width: 770px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.game_item {
  width: 378px;
  height: 405px;
  background: url("../assets/game/game_bg.png") no-repeat;
  background-position: center;
  background-size: cover;
}
.title {
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  text-align: center;
}
.title_me {
  color: #8cfea5;
  text-shadow: 2px 2px 18px #01ffff;
}
.title_opponent {
  color: #ffcce6;
  text-shadow: 0px 0.978254px 11.7391px #fc52ff;
}
.game_chessboard {
  width: 302px;
  height: 302px;
  margin: 24px 38px 38px;
}
.chessboard_item {
  width: 30.2px;
  height: 30.2px;
  box-sizing: border-box;
}
.chessboard_me {
  text-shadow: 0px 0px 6px rgba(1, 255, 266, 0.5);
  color: #8cfea5;
}

.chessboard_opponent {
  text-shadow: 0px 0.978254px 8px rgba(252, 82, 255, 0.5);
  color: #ffcce5;
}
.game_pk {
  width: 294px;
  height: 91px;
  background: url("../assets/game/pk.png") no-repeat;
  background-position: center;
  background-size: cover;
}
.btn_list {
  width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-item {
  font-size: 14px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #0d041f;
  box-sizing: border-box;
  border-radius: 100px;
  color: #0d041f;
}
.btn-item-default {
  background: linear-gradient(180deg, #ffffff 0%, #01ffff 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
}
.btn-item-disabled {
  background: linear-gradient(180deg, #63d2eb 0%, #2ca8c4 100%) !important;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
}
@media screen and (max-height: 770px) {
  .game_logo {
    scale: 0.9;
    transform-origin: top;
  }
  .game_item_me {
    scale: 0.9;
    transform-origin: top left;
  }
  .game_item_opponent {
    scale: 0.9;
    transform-origin: top right;
  }
}
</style>

