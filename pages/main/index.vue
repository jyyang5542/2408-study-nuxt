<template>
  <div>
    <h1 :style="{ color: color }">Main</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  color: {
    type: String,
    // default: 'blue',
  },
});
</script>
