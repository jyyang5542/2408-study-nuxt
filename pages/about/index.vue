<template>
  <div>
    <h1>About</h1>
    <Gnb />
    <Tabs :list="tabItems" />
  </div>
</template>

<script setup>
const tabItems = ref([
  { href: './about', name: 'tab-1', title: 'tab-1로 이동' },
  { href: './about', name: 'tab-2', title: 'tab-2로 이동' },
  { href: './about', name: 'tab-3', title: 'tab-3로 이동' },
]);

function aboutConsole() {
  console.log('console');
}

onMounted(() => {
  aboutConsole();
});
</script>
