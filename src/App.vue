<script setup lang="ts">
import TheContents from "./components/TheContents.vue";
import image2 from './assets/image2.jpg'

</script>

<template>
  <div class="front">
  <EthosConnectProvider>
    <div className="app">
      <TheContents />
    </div>
  </EthosConnectProvider>
  </div>
  <img class="background" :src="image2" alt=""/>
</template>

<style scoped>
.background{
    width: 100%;
    height: 100%;
    z-index:-1;
    position: absolute;
}

.front{
    width: 100%;
    height: 100%;
    z-index:1;
    position: absolute;
}
</style>
