<template>
  <nav class="tab">
    <ul class="tab__list">
      <li v-for="(item, index) in list" :key="item.name" class="tab__item">
        <a class="tab__link" :class="{ on: index === activeIndex }" :title="item.name + '으로 이동'" @click.prevent="setActiveTab(index)">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['update:activeIndex']);
const activeIndex = ref(0);

function setActiveTab(index) {
  activeIndex.value = index;
  emit('update:activeIndex', index);
}
</script>
