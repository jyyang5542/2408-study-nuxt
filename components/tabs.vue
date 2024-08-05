<template>
  <nav>
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <a :href="item.href" :title="item.title">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  gap: 30px;

  li {
    padding: 0 10px;

    a {
      font-size: 24px;
    }
  }
}
</style>
