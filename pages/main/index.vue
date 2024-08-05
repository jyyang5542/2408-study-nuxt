<template>
  <section class="sec">
    <h1 class="sec__title" :style="{ color: color }">Main</h1>
    <Gnb />
  </section>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    // default: 'blue',
  },
});

function changeTextColor(color) {
  document.querySelector('h1').style.color = color;
}

function changeFontSize(fontSize) {
  document.querySelector('h1').style.fontSize = fontSize;
}

onMounted(() => {
  //   changeTextColor(state.color);
  // changeFontSize(state.fontSize);
});

onUnmounted(() => {});
</script>
