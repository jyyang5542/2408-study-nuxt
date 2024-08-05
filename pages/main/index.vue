<template>
  <div>
    <h1 :style="{ color: color }">Main</h1>
    <Gnb />
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    // default: 'blue',
  },
});
</script>
