<script setup lang="ts">
import TheHeaderVue from "./TheHeader.vue";
import TheWalletStatus from "./TheWalletStatus.vue";
import TheWallet from "./TheWallet.vue";
</script>

<template>
  <TheHeaderVue />
  <div className="row align-top">
    <div><TheWalletStatus /></div>
    <div><TheWallet /></div>
    <div></div>
  </div>
</template>
