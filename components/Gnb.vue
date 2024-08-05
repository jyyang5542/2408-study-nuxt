<template>
  <nav>
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <a :href="item.href" :title="item.name + '으로 이동'" :class="{ on: item.name === currentTab }">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const list = ref([
  { href: '/', name: 'Main' },
  { href: '/about', name: 'About' },
]);

const route = useRoute();

const currentTab = computed(() => {
  const path = route.path;
  return list.value.find(item => item.href === path)?.name;
});
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  gap: 30px;

  li {
    padding: 0 10px;

    a {
      font-size: 24px;

      &.on {
        text-decoration: underline;
      }
    }
  }
}
</style>
