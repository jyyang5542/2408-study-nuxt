<template>
  <div>
    <h1>About</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    aboutConsole() {
      console.log('console');
    },
  },

  mounted() {
    this.aboutConsole();
  },
};
</script>
