<template>
  <div class="popup">
    <div>
      <slot />
        <button class="popup-close" @click="ClosePopup()">Close Popup</button>
    </div>
  </div>
</template>

<script>
export default {
    props: ['ClosePopup']
}
</script>

<style>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    color: white;
    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    .popup-inner {
        background: #FFF;
        padding: 32px;
    }
}
</style>
