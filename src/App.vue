<template>
    <Header class="header"></Header>
    <br />
  <main>
    <div class="content-section">
      <Post 
      class="post-element" 
      v-for="post in samplePosts" 
      :key="post.id" 
      :post="post" 
      @like-post="handleLikePost" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Post from './components/Post.vue';
import { IPost } from './domain/model/IPost';
import Header from './components/Header.vue';


const samplePosts: Array<IPost> = [
  {
    id: '1',
    title: 'Sample Post',
    attachedMedia: [],
    content: 'This is a sample post for testing purposes. How are you today? Good? I\'m glad.',
    authorCode: 'author1',
    likes: 10,
    comments: [
      { id: "1", text: "This is a comment" },
      { id: "2", text: "This is another comment" },
      { id: "3", text: "This is a third comment" },
    ],
  },
  {
    id: '2',
    title: 'Sample Post 2',
    attachedMedia: [],
    content: 'This is another sample post for testing purposes. How are you today? Not good? I\'m sorry',
    authorCode: 'author2',
    likes: 5,
    comments: [
      { id: "1", text: "Hey! Why is this one not getting as many likes?" }
    ],
  },
  {
    id: '1',
    title: 'Sample Post',
    attachedMedia: [],
    content: 'This is a sample post for testing purposes. How are you today? Good? I\'m glad.',
    authorCode: 'author1',
    likes: 10,
    comments: [
      { id: "1", text: "This is a comment" },
      { id: "2", text: "This is another comment" },
      { id: "3", text: "This is a third comment" },
    ],
  },
  {
    id: '2',
    title: 'Sample Post 2',
    attachedMedia: [],
    content: 'This is another sample post for testing purposes. How are you today? Not good? I\'m sorry',
    authorCode: 'author2',
    likes: 5,
    comments: [
      { id: "1", text: "Hey! Why is this one not getting as many likes?" }
    ],
  },
  {
    id: '1',
    title: 'Sample Post',
    attachedMedia: [],
    content: 'This is a sample post for testing purposes. How are you today? Good? I\'m glad.',
    authorCode: 'author1',
    likes: 10,
    comments: [
      { id: "1", text: "This is a comment" },
      { id: "2", text: "This is another comment" },
      { id: "3", text: "This is a third comment" },
    ],
  },
  {
    id: '2',
    title: 'Sample Post 2',
    attachedMedia: [],
    content: 'This is another sample post for testing purposes. How are you today? Not good? I\'m sorry',
    authorCode: 'author2',
    likes: 5,
    comments: [
      { id: "1", text: "Hey! Why is this one not getting as many likes?" }
    ],
  },
  {
    id: '1',
    title: 'Sample Post',
    attachedMedia: [],
    content: 'This is a sample post for testing purposes. How are you today? Good? I\'m glad.',
    authorCode: 'author1',
    likes: 10,
    comments: [
      { id: "1", text: "This is a comment" },
      { id: "2", text: "This is another comment" },
      { id: "3", text: "This is a third comment" },
    ],
  },
  {
    id: '2',
    title: 'Sample Post 2',
    attachedMedia: [],
    content: 'This is another sample post for testing purposes. How are you today? Not good? I\'m sorry',
    authorCode: 'author2',
    likes: 5,
    comments: [
      { id: "1", text: "Hey! Why is this one not getting as many likes?" }
    ],
  },
  {
    id: '1',
    title: 'Sample Post',
    attachedMedia: [],
    content: 'This is a sample post for testing purposes. How are you today? Good? I\'m glad.',
    authorCode: 'author1',
    likes: 10,
    comments: [
      { id: "1", text: "This is a comment" },
      { id: "2", text: "This is another comment" },
      { id: "3", text: "This is a third comment" },
    ],
  },
  {
    id: '2',
    title: 'Sample Post 2',
    attachedMedia: [],
    content: 'This is another sample post for testing purposes. How are you today? Not good? I\'m sorry',
    authorCode: 'author2',
    likes: 5,
    comments: [
      { id: "1", text: "Hey! Why is this one not getting as many likes?" }
    ],
  },
];

const handleLikePost = (postId: string) => {
  const post = samplePosts.find(post => post.id === postId);
  if (post) {
    post.likes += 1;
  }
};

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
}

.post-element {
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
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
</style>