<template>
  <section class="sec">
    <h1 class="sec__title" style="text-transform: capitalize">MyAPI</h1>
    <Gnb />
    <div class="sec__cont active">
      <div v-if="loading">Loading...</div>
      <div v-else class="box">
        <ul class="box__list">
          <li class="box__title">String 호출 CASE</li>
          <li v-for="item in list" :key="item.id" class="box__item">{{ item.el }}</li>
        </ul>
        <ul class="box__list">
          <li class="box__title">HTML 호출 CASE</li>
          <li v-for="item in html" :key="item.id" class="box__item" v-html="item.el"></li>
        </ul>
      </div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </section>
</template>

<script setup>
const list = ref([]);
const html = ref([]);
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
    html.value = data.html;
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
}
.box {
  display: flex;
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
  &__list {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    padding: 30px;
    background: #fff;
  }
  &__title {
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px dotted #ddd;
  }
  &__item {
    width: 100%;
    line-height: 30px;
    padding: 5px;
    font-size: 18px;
    text-align: center;
    background-color: #eee;
    border-radius: 10px;

    @media screen and (max-width: 750px) {
      font-size: 16px;
    }
    & + & {
      margin-top: 10px;
    }
    * {
      margin: 0;
      padding: 0;
      line-height: inherit;
    }
  }
}
</style>
