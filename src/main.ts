import { createApp } from "vue";
import { createStore } from 'vuex';

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
  chain : "sui:testnet",
  network : "https://fullnode.testnet.sui.io/",
  walletAppUrl : "https://ethoswallet.xyz",
};

// Create a new store instance.
const store = createStore({
  state () {
    return {
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
    setMyBoardInShips (state, value) {
      state.myBoardInShips = value
    },
    addToMyBoardInShips (state, value) {
      state.myBoardInShips.push(value)
    },
    setOpponentBoard (state, {value, x, y}) {
      //console.log(`opponentBoard=${state.opponentBoard}`)
      state.opponentBoard[x][y] = value
    },
  }
})

createApp(App).use(EthosConnectPlugin, config).use(store).use(vuetify).mount("#app");
