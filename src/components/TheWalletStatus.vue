<script setup lang="ts">
import { ethosForVue, EthosConnectStatus } from "ethos-connect-vue";

const { context } = ethosForVue() || {};
const { status } = context?.wallet || {};
</script>

<template>
  <div v-if="status === EthosConnectStatus.Connected">
    <div>Connected Wallet</div>
  </div>
  <div>{{ status }}</div>
</template>
