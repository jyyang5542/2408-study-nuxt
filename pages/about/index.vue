<template>
  <div>
    <h1>About</h1>
    <tabs :list="tabItems" />
  </div>
</template>

<script>
import Tabs from '~/components/tabs.vue';
export default {
  data() {
    return {
      tabItems: [
        { href: './about', name: 'tab-1', title: 'tab-1로 이동' },
        { href: './about', name: 'tab-2', title: 'tab-2로 이동' },
        { href: './about', name: 'tab-3', title: 'tab-3로 이동' },
      ],
    };
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
