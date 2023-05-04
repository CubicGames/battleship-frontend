<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { ethosForVue, TransactionBlock } from "ethos-connect-vue";
import { BATTLESHIP_CONTRACT, STATE_OBJECT_ID } from "../constants";
import { GenerateBoardConfig } from "../board";
import { GenBoardProof, GenShotProof } from "../index";
import Dialog from './misc-overflowed.vue'

let showPopup = ref(false)
const shipLengths = [5, 4, 3, 3, 2]
const totalParts = [5, 9, 12, 15, 17]

const { context } = ethosForVue() || {};
const { wallet } = context?.wallet || {};

const store = useStore()
const GAS_BUDGET = 100000000

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
]

let gameStage = GameStage.NotInGame

const player = ref('O')

const PlaceShipPart = (x:number, y:number) => {
  if (store.state.gameStarted) return

  //console.log(`store.state.myBoard=${store.state.myBoard}`)
  if (store.state.myBoard[x][y] !== '') return

  store.commit('setMyBoard', {value:player.value, x, y})
  store.commit('addToCurrentShip', {x, y})
  store.commit('setNumShipParts', store.state.numShipParts+1)
  if (totalParts.find(element => element === store.state.numShipParts)) {
    AddShip()
  }
  if (store.state.numShipParts > totalParts[totalParts.length-1]) {
    console.log(`Invalid number of ship parts: ${store.state.numShipParts}`)
    NewGame()
    return
  }
}

const AddShip = () => {
  let currentShip = store.state.currentShip
  if (currentShip.length <= 1) {
    console.log(`Incomplete ship, ship length: ${currentShip.length}`)
    NewGame()
    return
  }
  let aligned = -1
  if (currentShip.every((element) => element.x === currentShip[0].x)) {
    aligned = 1
    currentShip.sort((a, b) => {return a.y < b.y ? -1 : a.y > b.y ? 1: 0})
  } else if (currentShip.every((element) => element.y === currentShip[0].y)) {
    aligned = 0
    currentShip.sort((a, b) => {return a.x < b.x ? -1 : a.x > b.x ? 1: 0})
  }
  if (aligned === -1) {
    console.log(`Unaligned ship, ship: ${JSON.stringify(currentShip, null, 2)}`)
    NewGame()
    return
  }

  if (store.state.myBoardInShips.length >= 5) {
    console.log(`Attempt to put too many ships`)
    NewGame()
    return
  }
  let expectedLen = shipLengths[store.state.myBoardInShips.length]
  if (currentShip.length !== expectedLen) {
    console.log(`Incorrect ship length: ${currentShip.length}, expected: ${expectedLen}`)
    NewGame()
    return
  }
  store.commit('addToMyBoardInShips', [currentShip[0].x.toString(),
currentShip[0].y.toString(), aligned.toString()])
  store.commit('clearCurrentShip')
}

const ResetShip = () => {
  for (let i = 0; i < store.state.currentShip.length; i++) {
    let {x, y} = store.state.currentShip[i]
    store.commit('setMyBoard', {value:'', x, y})
  }
  store.commit('clearCurrentShip')
}

const MakeShot = async (x:number, y:number) => {
  if (!store.state.gameStarted) return
  if (store.state.gameStage != GameStage.MyTurn) return
  if (store.state.opponentBoard[x][y] !== '') return

  console.log(`store.state.opponentLastShot =${JSON.stringify(store.state.opponentLastShot, null, 2)}`)
  if (store.state.gameIndex !== -1) { // game creator
    if (store.state.opponentLastShot.x == -1) {
      await firstTurn(store.state.gameIndex, x, y)
    } else {
      await turn(store.state.myBoardInShips, store.state.gameIndex, store.state.hit, x, y)
    }
  } else {
    await turn(store.state.myBoardInShips, store.state.toJoinGameIndex, store.state.hit, x, y)
  }

  store.commit('setOpponentBoard', {value:'m', x, y})
  store.commit('setMyLastShot', {x, y})
  store.commit('setGameStage', GameStage.WaitMove)
}

const ListGames = async () => {
  console.log("List games")

  const result = await context.wallet.provider.getObject({
    id: STATE_OBJECT_ID,
    options: { showContent: true },
  });
  console.log(`getObject result=${JSON.stringify(result, null, 2)}`)
  const gameIndex = result.data.content.fields.game_index
  console.log(`Got gameIndex=${gameIndex}`)
 
  let resultGame = await getGame(gameIndex)
  if (resultGame.data.content.fields.value.fields.participants.length != 1) {
    console.log(`Incorrect number of participants=${resultGame.data.content.fields.value.fields.participants.length }`)
    return
  }
  store.commit('setToJoinGameIndex', gameIndex)
  let opponentAddress =
resultGame.data.content.fields.value.fields.participants[0]
  console.log(`opponentAddress=${opponentAddress}`)
  store.commit('setOpponentAddress', opponentAddress)
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
}

const StartGame = async () => {
  if (store.state.gameStarted) return
  console.log("Start game")
  console.log(`store.state.myBoardInShips=${JSON.stringify(store.state.myBoardInShips, null, 2)}`)
  if (store.state.myBoardInShips.length !== 5) {
    console.log(`Not enough ships: ${store.state.myBoardInShips.length}`)
    return
  }

  await createGame(store.state.myBoardInShips)

  store.commit('setGameStarted')
  store.commit('setGameStage', GameStage.WaitJoin)

  getJoinedEventLoop()
}

const JoinGame = async () => {
  if (store.state.gameStarted) return
  console.log("Join game")
  console.log(`store.state.myBoardInShips=${JSON.stringify(store.state.myBoardInShips, null, 2)}`)
  if (store.state.myBoardInShips.length !== 5) {
    console.log(`Not enough ships: ${store.state.myBoardInShips.length}`)
    return
  }

  await joinGame(store.state.toJoinGameIndex, store.state.myBoardInShips)

  store.commit('setGameStage', GameStage.WaitMove)
  store.commit('setGameStarted')
}

const NewGame = () => {
  console.log("New game")

  // Reset all data
  store.commit('setGameStage', GameStage.NotInGame)
  store.commit('unsetGameStarted')
  store.commit('setGameIndex', -1)
  store.commit('setGameId', '')
  store.commit('setGameWinner', '')
  store.commit('setToJoinGameIndex', -1)
  store.commit('setOpponentLastShot', {x:-1, y:-1})
  store.commit('setLastHitTimestamp', 0)
  store.commit('setMyLastShot', {x:-1, y:-1})
  store.commit('setHit', false)
  store.commit('setOpponentAddress', '')
  store.commit('clearCurrentShip')
  store.commit('setNumShipParts', 0)
  store.commit('setMyBoardInShips', [])
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      store.commit('setMyBoard', {value:'', x:i, y:j})
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      store.commit('setOpponentBoard', {value:'', x:i, y:j})
    }
  }
}

const GenRandomBoard = () => {
    let {board, boardInShips} = GenerateBoardConfig()
    console.log(`board=${JSON.stringify(board, null, 2)}`)
    console.log(`boardInShips=${JSON.stringify(boardInShips, null, 2)}`)

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      store.commit('setMyBoard', {value:board[i][j], x:i, y:j})
    }
  }
  store.commit('setMyBoardInShips', boardInShips)
}

const createGame = async (boardInShips:string[][]) => {
  console.log("createGame start")
  if (!wallet) return;
  let {hashArr, proofArr} = await GenBoardProof(boardInShips)
  console.log(`createGame hashArr=${JSON.stringify(hashArr, null, 2)}`)
  console.log(`createGame proofArr=${JSON.stringify(proofArr, null, 2)}`)

  const transactionBlock = new TransactionBlock();
  transactionBlock.moveCall({
    target: `${BATTLESHIP_CONTRACT}::battleship::new_game`,
    arguments: [
      transactionBlock.pure(STATE_OBJECT_ID),
    transactionBlock.pure(hashArr),
    transactionBlock.pure(proofArr)
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
  console.log(`createGame result=${JSON.stringify(result, null, 2)}`)
  let gameIndex = result.events[0].parsedJson.nonce
  console.log(`gameIndex=${gameIndex}`)
  store.commit('setGameIndex', gameIndex)
};

const getShotEventLoop = () => {
  setInterval(function(){
    console.log("queryEvents: ShotEvent");
    context.wallet.provider.queryEvents({
/*
    query: { And: [{ Sender: store.state.opponentAddress },
       { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::ShotEvent`}]},
*/
    query: { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::ShotEvent`},
    limit: 1,
    // fetch the object content field
  }).then((result:any) => {
    console.log(`result queryEvents=${JSON.stringify(result, null, 2)}`)
    if (result.data.length == 0) {
      return
    }
      let {x, y, game_index} = result.data[0].parsedJson
      console.log(`ShotEvent at(${x}, ${y})`)
      if (game_index != store.state.gameIndex && game_index != store.state.toJoinGameIndex) {
        console.log(`Not my game index, ${game_index}`)
        return
      }
      let sender = result.data[0].sender
      if (sender != store.state.opponentAddress) {
        console.log(`Not opponent event, ${sender}`)
        return
      }

    let shotTimestamp = result.data[0].timestampMs
    console.log(`shotTimestamp=${shotTimestamp}`)
    console.log(`store.state.opponentLastShotTs=${store.state.opponentLastShotTs}`)
    if (shotTimestamp <= store.state.opponentLastShotTs) {
      return
    }

    store.commit('setOpponentLastShotTs', shotTimestamp)

      console.log(`store.state.opponentLastShot=${JSON.stringify(store.state.opponentLastShot, null, 2)}`)
        store.commit('setOpponentLastShot', {x, y})
        if ('O' == store.state.myBoard[x][y]) {
          store.commit('setMyBoard', {value:'X', x, y})
          store.commit('setHit', true)
        }
	if ('' == store.state.myBoard[x][y]) {
          store.commit('setMyBoard', {value:'m', x, y})
          store.commit('setHit', false)
       }
       store.commit('setGameStage', GameStage.MyTurn)
  });
  }, 5000);
}

const getJoinedEventLoop = () => {
  let intervalId = setInterval(function(){
    console.log("queryEvents: JoindEvent");
    context.wallet.provider.queryEvents({
/*
    query: { And: [{ Sender: store.state.opponentAddress },
       { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::ReportEvent`}]},
*/
    query: { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::JoindEvent`},
    limit: 1,
    // fetch the object content field
  }).then((result:any) => {
    console.log(`result queryEvents JoindEvent=${JSON.stringify(result, null, 2)}`)
    if (result.data.length == 0) {
      return
    }
    let {nonce: gameIndex, by: opponentAddress} = result.data[0].parsedJson
    if (gameIndex != store.state.gameIndex) {
      return
    }
    let sender = result.data[0].sender
    store.commit('setOpponentAddress', opponentAddress)
    console.log(`opponentAddress=${opponentAddress} joined`)
    store.commit('setGameStage', GameStage.MyTurn)
    clearInterval(intervalId)
  });
  }, 5000);
}

const getReportEventLoop = () => {
  setInterval(function(){
    console.log("queryEvents: ReportEvent");
    context.wallet.provider.queryEvents({
/*
    query: { And: [{ Sender: store.state.opponentAddress },
       { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::ReportEvent`}]},
*/
    query: { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::ReportEvent`},
    limit: 1,
    // fetch the object content field
  }).then((result:any) => {
    console.log(`result queryEvents=${JSON.stringify(result, null, 2)}`)
    if (result.data.length == 0) {
      return
    }
    let {hit, game_index} = result.data[0].parsedJson
    if (game_index != store.state.gameIndex && game_index != store.state.toJoinGameIndex) {
      return
    }
    let sender = result.data[0].sender
    if (sender != store.state.opponentAddress) {
        return
    }
    let hitTimestamp = result.data[0].timestampMs
    console.log(`hitTimestamp=${hitTimestamp}`)
    console.log(`store.state.lastHitTimestamp=${store.state.lastHitTimestamp}`)
    if (hitTimestamp <= store.state.lastHitTimestamp) {
      return
    }

    store.commit('setLastHitTimestamp', hitTimestamp)
    if (hit === "1") {
      let {x, y} = store.state.myLastShot
      if (x != -1 && y != -1) {
        store.commit('setOpponentBoard', {value:'X', x, y})
        console.log(`my last shot at(${x}, ${y}) is a hit`)
      }
    }
  });
  }, 5000);
}

const getWonEventLoop = () => {
  let intervalId = setInterval(function(){
    console.log("queryEvents: WonEvent");
    context.wallet.provider.queryEvents({
/*
    query: { And: [{ Sender: store.state.opponentAddress },
       { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::WonEvent`}]},
*/
    query: { MoveEventType: `${BATTLESHIP_CONTRACT}::battleship::WonEvent`},
    limit: 1,
    // fetch the object content field
  }).then((result:any) => {
    console.log(`result queryEvents=${JSON.stringify(result, null, 2)}`)
    if (result.data.length == 0) {
      return
    }
      let {winner, nonce: game_index, by} = result.data[0].parsedJson
      console.log(`WonEvent winner=${winner}, game_index=${game_index}`)
      if (game_index != store.state.gameIndex && game_index != store.state.toJoinGameIndex) {
        console.log(`Not my game index, ${game_index}`)
        return
      }

       store.commit('setGameWinner', winner)
       store.commit('setGameStage', GameStage.GameOver)
       clearInterval(intervalId)
  });
  }, 5000);
}

const joinGame = async (gameIndex:number, boardInShips:string[][]) => {
  console.log("joinGame start")
  if (!wallet) return;

  let {hashArr, proofArr} = await GenBoardProof(boardInShips)
  const transactionBlock = new TransactionBlock();
  transactionBlock.moveCall({
    target: `${BATTLESHIP_CONTRACT}::battleship::join_game`,
    arguments: [
      transactionBlock.pure(STATE_OBJECT_ID),
      transactionBlock.pure(gameIndex),
    transactionBlock.pure(hashArr),
    transactionBlock.pure(proofArr)
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
  console.log(`joinGame result=${JSON.stringify(result, null, 2)}`)
  let gameIndexConfirmed = result.events[0].parsedJson.nonce
  console.log(`gameIndexConfirmed=${gameIndexConfirmed}`)

  getShotEventLoop()
  getReportEventLoop()
  getWonEventLoop()
};

const getGameById = async (gameId:string) => {
  const resultGame = await context.wallet.provider.getObject({
    id: gameId,
    options: { showContent: true },
  });
  console.log(`getObject resultGame=${JSON.stringify(resultGame, null, 2)}`)

  return resultGame
}

const getGame = async (gameIndex:number) => {
  const resultState = await context.wallet.provider.getObject({
    id: STATE_OBJECT_ID,
    options: { showContent: true },
  });
  const gamesId = resultState.data.content.fields.games.fields.id.id
  const resultFields = await context.wallet.provider.getDynamicFields({
    parentId: gamesId,
  });
  const gameId = resultFields.data.filter((game: any) => game.name.value ==
gameIndex.toString())[0].objectId

  console.log(`Got gameId=${gameId}`)
  store.commit('setGameId', gameId)

  let game = await getGameById(gameId)
  return game
}

const firstTurn = async (gameIndex:number, x:number, y:number) => {
  console.log("firstTurn start")
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
  console.log(`firstTurn result=${JSON.stringify(result, null, 2)}`)
  let xConfirmed = result.events[0].parsedJson.x
  let yConfirmed = result.events[0].parsedJson.y
  console.log(`xConfirmed=${xConfirmed}`)
  console.log(`yConfirmed=${yConfirmed}`)

  getShotEventLoop()
  getReportEventLoop()
  getWonEventLoop()
};

const turn = async (boardInShips:string[][], gameIndex:number, hit:boolean, x:number, y:number) => {
  console.log(`turn start,  gameIndex=${gameIndex}, hit=${hit}, x=${x}, y=${y}`)
  if (!wallet) return;

  let {_, proofArr} = await GenShotProof(boardInShips, store.state.opponentLastShot.x, store.state.opponentLastShot.y, hit)
  console.log(`turn proofArr=${JSON.stringify(proofArr, null, 2)}`)

  const transactionBlock = new TransactionBlock();
  transactionBlock.moveCall({
    target: `${BATTLESHIP_CONTRACT}::battleship::turn`,
    arguments: [
      transactionBlock.pure(STATE_OBJECT_ID),
      transactionBlock.pure(gameIndex),
      transactionBlock.pure(hit),
      transactionBlock.pure(x),
      transactionBlock.pure(y),
    transactionBlock.pure(proofArr)
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
  console.log(`turn result=${JSON.stringify(result, null, 2)}`)
/*
  let xConfirmed = result.events[0].parsedJson.x
  let yConfirmed = result.events[0].parsedJson.y
  console.log(`xConfirmed=${xConfirmed}`)
  console.log(`yConfirmed=${yConfirmed}`)
*/
};
</script>

<template>
  <Dialog class="regulation_box"></Dialog>
  <main class="pt-8 text-center">

    <h1 class="mb-8 text-3xl font-mono font-bold italic text-blue-400">Battleship</h1>
    <div class="row">
    <h3 class="text-xl mb-4 text-cyan-500">{{ store.state.gameWinner === '' ?
'' :  store.state.gameWinner === store.state.opponentAddress ? 'You lose':
'You win'}}</h3>
    <h3 class="text-xl mb-4 text-cyan-500">game number: {{ store.state.gameIndex != -1 ? store.state.gameIndex : store.state.toJoinGameIndex != -1 ? store.state.toJoinGameIndex : '' }}</h3>
    <h3 class="text-xl mb-4 text-cyan-500">Status: {{ gameDescription[store.state.gameStage] }}</h3>
    </div>

    <div class="row">

    <div>
    <h3 class="text-xl mb-4 text-rose-500">Me</h3>
    <div class="flex flex-col items-center mb-8">
        <div
          v-for="(row, x) in store.state.myBoard"
          :key="x"
          class="flex">
          <div
            v-for="(cell, y) in row"
            :key="y"
            @click="PlaceShipPart(x, y)"
            :class="`border-x border-y border-blue-400 border-solid w-8 h-8 hover:bg-gray-700 flex
            items-center justify-center material-icons-outlined text-4xl
            cursor-pointer text-cyan-500`"
          >
            {{ cell === 'X' ? 'cancel' : cell == 'O' ? 'circle' : cell == 'm' ? 'close' : '' }}
          </div>
        </div>
    </div>
    </div>

    <div>
    <h3 class="text-xl mb-4 text-rose-500">Opponent</h3>
    <div class="flex flex-col items-center mb-8">
        <div
          v-for="(row, x) in store.state.opponentBoard"
          :key="x"
          class="flex">
          <div
            v-for="(cell, y) in row"
            :key="y"
            @click="MakeShot(x, y)"
            :class="`border-x border-y border-blue-400 border-solid w-8 h-8 hover:bg-gray-700 flex
            items-center justify-center material-icons-outlined text-4xl
            cursor-pointer text-cyan-500`"
          >
            {{ cell === 'X' ? 'cancel' : cell == 'O' ? 'circle' : cell == 'm' ? 'close' : '' }}
          </div>
        </div>
    </div>
    </div>

    </div>

    <button @click="NewGame" class="m-4 px-4 py-2 text-white bg-[#54A3FF] rounded uppercase font-bold hover:bg-[#67ADFF] duration-300">New Game</button>

    <button @click="GenRandomBoard" class="m-4 px-4 py-2 text-white bg-[#54A3FF] rounded uppercase font-bold hover:bg-[#67ADFF] duration-300">Random board</button>

    <button @click="StartGame" class="m-4 px-4 py-2 text-white bg-[#54A3FF] rounded uppercase font-bold hover:bg-[#67ADFF] duration-300">Start Game</button>

    <button @click="ListGames" class="m-4 px-4 py-2 text-white bg-[#54A3FF] rounded uppercase font-bold hover:bg-[#67ADFF] duration-300">List games</button>

    <button @click="JoinGame" class="m-4 px-4 py-2 text-white bg-[#54A3FF] rounded uppercase font-bold hover:bg-[#67ADFF] duration-300">Join Game</button>
</main>
</template>

<style scoped>
.regulation_box {
position: absolute;
width: 128px;
height: 40px;
left: 360px;
top: 16px;

background: linear-gradient(90deg, #2DD6FF 0.62%, #FF00D2 99.37%);
border-radius: 20px;
}
</style>

