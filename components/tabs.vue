<template>
  <nav>
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <a :href="item.href" :title="item.title">{{ item.name }}</a>
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
    }
  }
}
</style>
