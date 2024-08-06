<template>
  <section class="sec">
    <h1 class="sec__title">Axios</h1>
    <Gnb />
    <div class="sec__cont active">
      <div v-if="loading">Loading...</div>
      <ul v-else>
        <li v-for="item in list" :key="item.id">id: {{ item.id }} | {{ item.title }} | message: {{ item.message }}</li>
      </ul>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </section>
</template>

<script setup>
const list = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('/api/hello');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    list.value = data.list;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss">
.sec__cont {
  flex-direction: column;

  ul {
    width: 100%;
    margin-top: 10px;

    li {
      text-align: center;
      font-size: 18px;

      @media screen and (max-width: 750px) {
        font-size: 16px;
      }
    }
  }
}
</style>
