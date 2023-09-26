import { createApp } from "vue";
import { createStore } from 'vuex';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue";
import { EthosConnectPlugin, type EthosConfiguration } from "ethos-connect-vue";
import "./assets/main.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const config: EthosConfiguration = {
  apiKey: "vue-example-app",
  // chain : "sui:mainnet",
  // network : "https://fullnode.mainnet.sui.io/",
  chain : "sui:testnet",
 network : "https://fullnode.testnet.sui.io/",
  walletAppUrl : "https://ethoswallet.xyz",
};


interface ChessPiece {
  id: string;
  imageUrl: string;
  direction: number;
  size: number;
  // coordinate: Array<Array<string>>;
  coordinate: any;
  defaultImg?: any;
  rotateImg?: any;
  isDisabled?: number;
}

interface ChessPieceInstance {
  pieceId: string | null;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  piece?: ChessPiece;
}

// Create a new store instance.
const store = createStore({
  state () {
    return {
      chessboard: <ChessPieceInstance[][]>([]),
      chessPieces: <ChessPiece[]>([]),
      isLockShip: '0', // 棋盘有没有被锁定不允许移动   0未锁定   1锁定 字符串格式
      isDockEmpty: false, // 判断船坞有没有船 false 有船   true: 没船    没船就可以开始游戏了
      dialog: false,
      isNewGameDisabled: false,
      isRandomBoardDisabled: false,
      isStartGameDisabled: true,
      isListGamesDisabled: true,
      isJoinGameDisabled: true,
      gameStage: 0,
      gameStarted: false,
      gameIndex: -1,
      gameId: "",
      gameWinner: "",
      toJoinGameIndex: -1,
      currentShip: [],
      numShipParts: 0,
      opponentLastShot: {x:-1, y:-1},
      opponentLastShotTs: 0,
      lastHitTimestamp: 0,
      myLastShot: {x:-1, y:-1},
      hit: false,
      opponentAddress: '',
      myAddress: '',
      myBoard: [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
],
    myBoardInShips: [],
      opponentBoard: [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
],
    }
  },
  mutations: {
    setChessPieces(state, value) {
      console.log(value)
      state.chessPieces = value
    },
    addChessPieces(state, { x, val }) {
      state.chessPieces[x] = val;
    },
    resetChessPieces(state, value) {
      state.chessPieces = value;
    },
    resetChessboard(state, value) {
      state.chessboard = value;
    },
    addChessboard(state, { x, val }) {
      // console.log("走了")
      // state.myBoard[x][y] = value
      state.chessboard[x] = val;
    },
    setChessboard(state, {x, y, val}) {
      // console.log("走了2222222")
      // state.myBoard[x][y] = value
      state.chessboard[x][y] = val;
    },
    changeChessboard(state, {x, y, val}) {
      // console.log("走了2222222")
      // state.myBoard[x][y] = value
      state.chessboard[x][y] = { ...state.chessboard[x][y], ...val};
    },
    setIsDockEmpty (state, value) {
      state.isDockEmpty = value
    },
    setIsLockShip (state, value) {
      state.isLockShip = value
    },
    setIsNewGameDisabled (state, value) {
      state.isNewGameDisabled = value
    },
    setDialog (state, value) {
      state.dialog = value
    },
    setIsRandomBoardDisabled (state, value) {
      state.isRandomBoardDisabled = value
    },
    setIsStartGameDisabled (state, value) {
      state.isStartGameDisabled = value
    },
    setIsListGamesDisabled (state, value) {
      state.isListGamesDisabled = value
    },
    setIsJoinGameDisabled (state, value) {
      state.isJoinGameDisabled = value
    },
    setGameStage (state, stage) {
      state.gameStage = stage
    },
    setGameStarted (state) {
      state.gameStarted = true
    },
    unsetGameStarted (state) {
      state.gameStarted = false
    },
    setGameIndex (state, index) {
      state.gameIndex = index
    },
    setGameId (state, gameId) {
      state.gameId = gameId
    },
    setGameWinner (state, gameWinner) {
      state.gameWinner = gameWinner
    },
    setToJoinGameIndex (state, index) {
      state.toJoinGameIndex = index
    },
    addToCurrentShip (state, {x, y}) {
      state.currentShip.push({x, y})
    },
    clearCurrentShip (state) {
      state.currentShip = []
    },
    setNumShipParts (state, num) {
      state.numShipParts = num
    },
    setOpponentLastShot (state, {x, y}) {
      state.opponentLastShot = {x, y}
    },
    setOpponentLastShotTs (state, timestamp) {
      state.opponentLastShotTs = timestamp
    },
    setLastHitTimestamp (state, timestamp) {
      state.lastHitTimestamp = timestamp
    },
    setMyLastShot (state, {x, y}) {
      state.myLastShot = {x, y}
    },
    setHit (state, hit) {
      state.hit = hit
    },
    setOpponentAddress (state, address) {
      state.opponentAddress = address
    },
    setMyAddress (state, address) {
      state.myAddress = address
    },
    setMyBoard (state, {value, x, y}) {
      state.myBoard[x][y] = value
    },
    resetMyBoardInShips (state, value) {
      state.myBoardInShips = value
    },
    // addToMyBoardInShips (state, value) {
    //   state.myBoardInShips.push(value)
    // },
    setOpponentBoard (state, {value, x, y}: any) {
      //console.log(`opponentBoard=${state.opponentBoard}`)
      state.opponentBoard[x][y] = value
    },
    setMyBoardInShips(state, { x, y, z, sort, oldCoordinates }: { x: number; y: number; z: number, sort: number, oldCoordinates?: [] }) {
      if (oldCoordinates && oldCoordinates?.length) {
        console.log("进来了1")
        console.log(z)
        // const obj = state.chessPiecesCoordinates?.find((item) => item?.[0] === oldCoordinates?.[0] && item?.[1] === oldCoordinates?.[1]) || [];
        const index = state.myBoardInShips?.findIndex((item) => item?.[0] == oldCoordinates?.[0] && item?.[1] == oldCoordinates?.[1]);
        console.log(oldCoordinates)
        console.log(index);
        if (index > -1) {
          console.log("进来了2")
          const newObj = [ x.toString(), y.toString(), z.toString()]
          state.myBoardInShips.splice(index, 1, newObj)
        }
      } else {
        console.log("进来了3")
        state.myBoardInShips[sort] = [ x.toString(), y.toString(), z.toString()]
        // state.myBoardInShips.push([ x.toString(), y.toString(), z.toString()]);
      }
    },
  }
})

createApp(App).use(EthosConnectPlugin, config).use(store).use(vuetify).use(ElementPlus).mount("#app");

