<script setup lang="ts">
import TheContents from "./components/TheContents.vue";
import image2 from './assets/image2.jpg'

</script>

<template>
  <div class="front">
  <EthosConnectProvider>
    <div class="app">
      <TheContents />
    </div>
  </EthosConnectProvider>
  </div>
  <!-- <img class="background" :src="image2" alt=""/> -->
</template>

<style scoped>

.front{
    width: 100%;
    min-height: 100%;
    z-index:1;
    /* position: absolute;
    background: url("./assets/image2.jpg") no-repeat;
    background-size: cover;
    background-position: center; */
}
:deep(.front>div){
  all:revert !important;
}
</style>
