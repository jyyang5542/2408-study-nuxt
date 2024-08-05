<template>
  <Main :style="{ color: state.color }" />
</template>

<script setup>
import Main from '~/pages/main/index.vue';

const state = reactive({
  color: 'red',
  fontSize: '4em',
});

function changeTextColor(color) {
  document.querySelector('h1').style.color = color;
}

function changeFontSize(fontSize) {
  document.querySelector('h1').style.fontSize = fontSize;
}

onMounted(() => {
  //   changeTextColor(state.color);
  changeFontSize(state.fontSize);
});

onUnmounted(() => {});
</script>
