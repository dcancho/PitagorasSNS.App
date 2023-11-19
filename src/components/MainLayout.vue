<template>
    <Header class="header"></Header>
    <br />
  <main>
    <div class="content-section">
      <NewPost class="new-post"/>
      <Post 
      class="post-element" 
      v-for="post in posts" 
      :key="post.id" 
      :post="post" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Post from './Post.vue';
import { ref } from 'vue';
import { IPost } from './../domain/model/IPost';
import Header from './Header.vue';
import NewPost from './NewPost.vue';
import axios from 'axios';
import { onMounted } from 'vue';

const posts = ref<Array<IPost>>([]);

const getPosts = async () => {
  try {
    const response = await axios.get('http://localhost:5264/api/v1/Post');
    posts.value = response.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

onMounted(() => {
  getPosts();
});

</script>

<style scoped>
.content-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 40%;
}

@media (max-width: 992px) {
  .content-section {
    width: 100%;
  }
}

main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.post-element {
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
  transition: box-shadow 0.3s ease;
}

.post-element:hover {
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
}

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
}

.new-post {
  width: 100%;
}
</style>

