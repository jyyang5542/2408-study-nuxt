<template>
  <Main :style="{ color: state.color }" />
</template>

<script setup>
import Main from '~/pages/Main/index.vue';

const state = reactive({
  color: 'red',
  fontSize: '4em',
});
</script>
