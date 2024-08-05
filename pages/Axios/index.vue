<template>
  <section class="sec">
    <h1 class="sec__title">Axios</h1>
    <Gnb />

    <div class="sec__cont active">
      <div class="lorem-ipsum">
        <div v-if="isLoading">Loading...</div>
        <ul v-else class="lorem-ipsum__list">
          <li v-for="post in posts" :key="post.id" class="lorem-ipsum__item">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios';

const posts = ref([]);
const isLoading = ref(true);

const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchPosts();
});
</script>
