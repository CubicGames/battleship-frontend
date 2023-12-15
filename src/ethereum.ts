import { ethers, Contract } from "ethers";
import type { MetaMaskInpageProvider } from "@metamask/providers";
import { abi } from "./BattleshipGame.json";

declare global {
    interface Window{
          ethereum?:MetaMaskInpageProvider
        }
}

export const ABI = abi;

// A Web3Provider wraps a standard Web3 provider, which is
// // what MetaMask injects as window.ethereum into each page
export const provider = new ethers.BrowserProvider(window.ethereum)

const usePolling = true;
const pollingIntervalMs = 5000;
let intervalId

//const contractAddr = "0x01169455301710A1011Bb5f0f3bf500D2B3DDab4";
//const contractAddr = "0xa23028fd740400Ecbfe076C5308bFEb14739918C";
//const contractAddr = "0x6b54020944ad8ffb2033319F45B54bF09DbC8D25";
//const contractAddr = "0x25dC9B862D86305E636B473a6dF880aCdC05Bf27";
//const contractAddr = "0x50Cac95d0BE5b7fAB70d82DA134f0951fC306699";
//const contractAddr = "0x8C00267690aC784d5970D2055152f16b699c0269";

// b2 zkevm test dev
//const contractAddr = "0x5970E9936727F47C4F404F31d4dC0D326d2186C7"
//const contractAddr = "0x67596416cbe04a7aBB31e718dEbc7ce62F169224"
//const contractAddr = "0xA4cc2705db7d59128Ac88B07221265C252D63F7c" // 2 hits
const contractAddr = "0x850DA367F7460c32ed15452779E42F41Aa1D1989" // 17 hits

const contractListening = new Contract(contractAddr, ABI, provider)

contractListening.on("*", (event) => {
  // The `event.log` has the entire EventLog
  console.log('hello')
  console.log(`event.log=${JSON.stringify(event.log)}`);
});


function startListeningForEvents(store, stageMyTurn, stageOver, blockNumber, boardPacked, gameIndexOrig) {
  const startedEventHandler = async (gameIndex, gameStarter) => {
    console.log(`received Started event, gameIndex=${gameIndex}, gameStarter=${gameStarter}`)
  }
  const joinedEventHandler = async (gameIndex, by) => {
    // The `event.log` has the entire EventLog
    console.log(`received Joined event, gameIndex=${gameIndex}, by=${by}`)

    if (gameIndex != store.state.gameIndex) {
      console.log(`store.state.gameIndex=${store.state.gameIndex}`)
      return;
    }
    let opponentAddress = by;
    store.commit("setOpponentAddress", opponentAddress);
    console.log(`opponentAddress=${opponentAddress} joined`);
    store.commit("setGameStage", stageMyTurn);
  }

  const resultNotVerifiedEventHandler = async (winner, gameIndex, by) => {
    // The `event.log` has the entire EventLog
    console.log(`received ResultNotVerifiedYet event, gameIndex=${gameIndex}, winner=${winner}`)
    const signer = await provider.getSigner()
    console.log(`signer.address=${signer.address}, gameIndexOrig=${gameIndexOrig}`)
    if (winner == signer.address && gameIndex == gameIndexOrig) {
      console.log(`calling submitBoard`);
      const contractWrite = new Contract(contractAddr, ABI, signer)
      const tx = await contractWrite.submitBoard(gameIndex, boardPacked)
      //console.log(`submitBoard tx=${JSON.stringify(tx)}`);
     const receipt = await tx.wait()
  let event = contractListening.interface.parseLog(receipt.logs[0]);
  if (event == null) {
    return
  }
  BigInt.prototype.toJSON = function() { return this.toString() };
        console.log(`submitBoard tx event=${JSON.stringify(event)}`);
    }
  }

  const wonEventHandler = async (winner, gameIndex, by) => {
    console.log(`received Won event, gameIndex=${gameIndex}, winner=${winner}`)
    if (
        gameIndex != store.state.gameIndex &&
        gameIndex != store.state.toJoinGameIndex
      ) {
        console.log(`Not my game index, ${gameIndex}`);
        return;
    }

    store.commit("setGameWinner", winner);
    store.commit("setGameStage", stageOver);
    store.commit("setDialog", true);

  }

  const reportEventHandler = async (hit, gameIndex, by) => {
    console.log(`received Report event, hit=${hit}, gameIndex=${gameIndex}, by=${by}`)
    if (
      gameIndex != store.state.gameIndex &&
      gameIndex != store.state.toJoinGameIndex
    ) {
      console.log(`Not my game index, ${gameIndex}`);
      return;
    }
    if (by != store.state.opponentAddress) {
          console.log(`Not opponent event, ${by}`);
      return;
    }


    //let hitTimestamp = result.data[0].timestampMs;
    let hitTimestamp = Date.now();
    console.log(`hitTimestamp=${hitTimestamp}`);
    console.log(
      `store.state.lastHitTimestamp=${store.state.lastHitTimestamp}`
    );
    if (hitTimestamp <= store.state.lastHitTimestamp) {
      return;
    }

    store.commit("setLastHitTimestamp", hitTimestamp);
    if (hit === true) {
      let { x, y } = store.state.myLastShot;
      if (x != -1 && y != -1) {
        store.commit("setOpponentBoard", { value: "X", x, y });
        console.log(`my last shot at(${x}, ${y}) is a hit`);
      }
    }

  }

  const shotEventHandler = async (x, y, gameIndex, by) => {
    console.log(`received Shot event, x=${x}, y=${y}, gameIndex=${gameIndex}, by=${by}`)
    if (
      gameIndex != store.state.gameIndex &&
      gameIndex != store.state.toJoinGameIndex
    ) {
      console.log(`Not my game index, ${gameIndex}`);
      return;
    }
    if (by != store.state.opponentAddress) {
          console.log(`Not opponent event, ${by}`);
      return;
    }

    //let shotTimestamp = result.data[0].timestampMs;
    let shotTimestamp = Date.now();

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
    store.commit("setGameStage", stageMyTurn);
  }

  if (usePolling) {
    clearInterval(intervalId);
    intervalId = setInterval(function () {
      console.log(`currBlockNumber=${currBlockNumber}`);

    provider.getBlockNumber().then(
    (resultBlockNumber) => {
        console.log(`currBlockNumber =${JSON.stringify(currBlockNumber)}`);
        console.log(`resultBlockNumber =${JSON.stringify(resultBlockNumber)}`);
      if (resultBlockNumber <= currBlockNumber) {
        console.log(`blocknumber not increasing`);
        return
      }
      contractListening.queryFilter("*", currBlockNumber+1, resultBlockNumber).then((eventsResult) => {
        console.log(`eventsResult=${JSON.stringify(eventsResult)}`);
        currBlockNumber = resultBlockNumber

        for (let i = 0; i < eventsResult.length; i++) {
          let {topics, data} = eventsResult[i]
          let event = contractListening.interface.parseLog({topics, data});
          if (event == null) {
            return
          }
  BigInt.prototype.toJSON = function() { return this.toString() };
        console.log(`event=${JSON.stringify(event)}`);
          if (event.name === "Started") {
            startedEventHandler(...(event.args))
          } else if (event.name === "Joined") {
            joinedEventHandler(...(event.args))
          } else if (event.name === "Shot") {
            //return shotEventHandler(...(event.args))
            shotEventHandler(...(event.args))
          } else if (event.name === "Report") {
            reportEventHandler(...(event.args))
          } else if (event.name === "ResultNotVerifiedYet") {
            resultNotVerifiedEventHandler(...(event.args))
          } else if (event.name === "Won") {
            wonEventHandler(...(event.args))
          }
  //const {_nonce, _by} = log.args;
        }
      })
    })
  }, pollingIntervalMs);
  } else {
    contractListening.on("Started", startedEventHandler);
    contractListening.on("Shot", shotEventHandler);
    contractListening.on("Report", reportEventHandler);
    contractListening.on("ResultNotVerifiedYet", resultNotVerifiedEventHandler);
    contractListening.on("Won", wonEventHandler);
  }
}

const sleepMs = (ms: number) => new Promise((r) => setTimeout(r, ms));

let currBlockNumber = 0;

export async function NewGameEth(boardInShips, store, stageMyTurn, stageOver) {

    const contract = new Contract(contractAddr, ABI, provider)
    console.log(`contractAddr=${JSON.stringify(contractAddr)}`);

  const signer = await provider.getSigner()
  const contractWrite = new Contract(contractAddr, ABI, signer)
  const boardK256Hash = getBoardK256Hash(boardInShips)
  console.log(`boardK256Hash=${JSON.stringify(boardK256Hash)}`);
  const tx = await contractWrite.newGame(boardK256Hash)
  //const tx = await contractWrite.newGame(0xdeadbeef)
    console.log(`tx=${JSON.stringify(tx)}`);
  // Wait until the tx has been confirmed (default is 1 confirmation)
   const receipt = await tx.wait()
  // // Receipt should now contain the logs
   console.log(receipt.logs)

  let log = contract.interface.parseLog(receipt.logs[0]);
  if (log == null) {
    return
  }
  const {_nonce, _by} = log.args;
  const gameIndex = _nonce
    console.log(`gameIndex=${gameIndex}`);

  const boardPacked = getBoardPacked(boardInShips)
    console.log(`boardPacked=${JSON.stringify(boardPacked)}`);
  //startListeningForResultNotVerifiedYet(boardPacked, gameIndex )
  const blockNumber = await provider.getBlockNumber();
  console.log(`blockNumber=${blockNumber}`);
  currBlockNumber = blockNumber;
  startListeningForEvents(store, stageMyTurn, stageOver, blockNumber, boardPacked, gameIndex)
  //startListeningForReportEvent(store)
  //startListeningForWonEvent(store, stageOver)
  /*
  await sleepMs(5000)
    const gameIndex = await contractListening.playing(signer.address);
    console.log(`gameIndex=${gameIndex}`);
    currentGameIndex = gameIndex;
    */
  store.commit("setGameIndex", gameIndex);
}

export async function ListGamesEth(store) {
    const gameIndex = await contractListening.gameIndex();
    console.log(`gameIndex=${gameIndex}`);

    const game = await contractListening.gameState(gameIndex);
  BigInt.prototype.toJSON = function() { return this.toString() };
    console.log(`game=${JSON.stringify(game)}`);
  const emptyAddr = "0x0000000000000000000000000000000000000000"
  if (game[0][0] == emptyAddr || game[0][1] != emptyAddr) {
    console.log(
      `Incorrect number of participants=${game[0]}`
    );
    return;
  }
  let opponentAddress = game[0][0];
  console.log(`opponentAddress=${opponentAddress}`);
    const signer = await provider.getSigner()
    console.log(`signer.address=${signer.address}`)
  if (opponentAddress === signer.address) {
    console.log(`Cannot join a game created by oneself`);
    return;
  }
  store.commit("setOpponentAddress", opponentAddress);
  store.commit("setToJoinGameIndex", gameIndex);
  console.log(`store.state.toJoinGameIndex=${store.state.toJoinGameIndex}`);
  store.commit("setIsNewGameDisabled", true);
  store.commit("setIsStartGameDisabled", true);
  store.commit("setIsListGamesDisabled", true);
  store.commit("setIsJoinGameDisabled", false);

}

export async function JoinGameEth(gameIndex, boardInShips, store, stageMyTurn, stageOver) {
  const signer = await provider.getSigner()
  const contractWrite = new Contract(contractAddr, ABI, signer)
  const boardK256Hash = getBoardK256Hash(boardInShips)
  console.log(`boardK256Hash=${JSON.stringify(boardK256Hash)}`);
  //const tx = await contractWrite.joinGame(currentGameIndex, 0x12345678)
  const tx = await contractWrite.joinGame(gameIndex, boardK256Hash)
    console.log(`tx=${JSON.stringify(tx)}`);
  const boardPacked = getBoardPacked(boardInShips)
    console.log(`boardPacked=${JSON.stringify(boardPacked)}`);
  //startListeningForResultNotVerifiedYet(boardPacked, gameIndex )
  const blockNumber = await provider.getBlockNumber();
  console.log(`blockNumber=${blockNumber}`);
  currBlockNumber = blockNumber;
  startListeningForEvents(store, stageMyTurn, stageOver, blockNumber, boardPacked, gameIndex)
  //startListeningForReportEvent(store)
  //startListeningForWonEvent(store, stageOver)
}

export async function FirstTurnEth(gameIndex, x, y) {
  const signer = await provider.getSigner()
  const contractWrite = new Contract(contractAddr, ABI, signer)
  const tx = await contractWrite.firstTurn(gameIndex, [x, y])
    console.log(`tx=${JSON.stringify(tx)}`);
}

export async function TurnEth(gameIndex, hit, x ,y) {
    console.log(`gameIndex=${gameIndex}, hit=${hit}, x=${x}, y=${y}`);
  const signer = await provider.getSigner()
  const contractWrite = new Contract(contractAddr, ABI, signer)
  const tx = await contractWrite.turn(gameIndex, hit, [x, y])
    console.log(`tx=${JSON.stringify(tx)}`);
   const receipt = await tx.wait()
  // // Receipt should now contain the logs
   console.log(receipt.logs)

  let event = contractListening.interface.parseLog(receipt.logs[0]);
  if (event == null) {
    return
  }
  BigInt.prototype.toJSON = function() { return this.toString() };
        console.log(`Turn tx event=${JSON.stringify(event)}`);
}

function getBoardPacked(boardInShips): number {
        let packed = 0;
        for (let i = 0; i < boardInShips.length; i++) {
          for (let j = 0; j < boardInShips[0].length; j++) {
            packed += boardInShips[i][j] * Math.pow(10, (i * boardInShips[0].length + j))
          }
        }
        return packed
}

function getBoardK256Hash(boardInShips) {
  const result = ("0x" + getBoardPacked(boardInShips).toString(16).padStart(64, "0"));
    console.log(`result=${JSON.stringify(result)}`);
  return ethers.keccak256(result)
}

export const checkConnectedWalletExist = async function(store){
    window.ethereum.on("accountsChanged", (accounts) => {
          console.log("MetaMask account changed:", accounts[0]);
             store.commit("setCurrentEthAccount", accounts[0]);
        });

     try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Make sure you have metamask!");
        return false;
      } else {
        console.log("We have the ethereum object", ethereum);
     }


     const accounts = await ethereum.request({ method: "eth_accounts" });
     if (accounts.length !== 0) {
         const account = accounts[0];
         console.log("Found an authorized account:", account);
         //currentEthAccount = account;
	 store.commit("setCurrentEthAccount", account);
         return true;
     } else {
         console.log("No authorized account found");
         return false;
      }

   } catch (error) {
      console.log(error);
      return false;
   }
}

export const ConnectWalletEth = async function (store) {
 try {
   const { ethereum } = window;
   if (!ethereum) {
       alert("Get MetaMask!");
      return;
   }
   const accounts = await ethereum.request({
        method: "eth_requestAccounts",
   });
   console.log("Connected", accounts[0]);
   //currentEthAccount = accounts[0];
   store.commit("setCurrentEthAccount", account[0]);
 } catch (error) {
   console.log(error);
 }
}
