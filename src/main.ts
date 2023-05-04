import { createApp } from "vue";
import App from "./App.vue";
import { EthosConnectPlugin, type EthosConfiguration } from "ethos-connect-vue";
import "./assets/main.css";

const config: EthosConfiguration = {
  apiKey: "vue-example-app",
};

createApp(App).use(EthosConnectPlugin, config).mount("#app");
