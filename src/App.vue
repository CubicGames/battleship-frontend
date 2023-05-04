<script setup lang="ts">
import TheContents from "./components/TheContents.vue";
</script>

<template>
  <EthosConnectProvider>
    <div className="app">
      <TheContents />
    </div>
  </EthosConnectProvider>
</template>
