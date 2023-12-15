<script setup>
import Dialog from "./misc-overflowed.vue";

const goToHome = () => {
  window.open('https://www.cubicgames.xyz/home');
}
</script>

<template>
  <div className="header">
    <Dialog class="regulation_box"></Dialog>
   <div class="header-right">
    <div class="header-home" :onClick="goToHome">Home</div>
   </div>
  </div>
</template>
