<template>
  <nav class="gnb">
    <ul class="gnb__list">
      <li v-for="(item, i) in list" :key="i" class="gnb__item">
        <a :href="item.href" :title="item.name + '으로 이동'" class="gnb__link" :class="{ on: item.name === currentTab }">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const list = ref([
  { href: '/', name: 'Main' },
  { href: '/About', name: 'About' },
  { href: '/Axios', name: 'Axios' },
  { href: '/Swiper', name: 'Swiper' },
]);

const route = useRoute();

const currentTab = computed(() => {
  const path = route.path;
  return list.value.find(item => item.href === path)?.name;
});
</script>
