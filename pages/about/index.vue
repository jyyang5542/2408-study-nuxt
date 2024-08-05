<template>
  <section class="sec">
    <h1 class="sec__title">About</h1>
    <Gnb />
    <Tabs :list="tabItems" @update:activeIndex="handleActiveIndexUpdate" />

    <div v-for="(content, index) in contents" :key="index" :class="{ sec__cont: true, active: index === activeIndex }">
      {{ content }}
    </div>
  </section>
</template>

<script setup>
const tabItems = ref([{ name: 'tab-1' }, { name: 'tab-2' }, { name: 'tab-3' }]);
const contents = ref(['Content 1', 'Content 2', 'Content 3']);
const activeIndex = ref(0);

function handleActiveIndexUpdate(index) {
  activeIndex.value = index;
}

onMounted(() => {});
</script>
