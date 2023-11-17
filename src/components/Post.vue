<template>
    <div class="post">
        <div class="post-header">
            <img class="avatar" src="https://avatars.githubusercontent.com/u/54212428?v=4" />
            <h2>{{ post.title }}</h2>
        </div>
        <div class="post-body">
            <PostText :text="post.content" />
        </div>
        <div class="post-footer">
            <div class="post-action-bar">
                <Button :label="post.likes.toString()" icon="pi pi-thumbs-up" @click="likePost"/>
                <Button :label="post.comments?.length.toString()" icon="pi pi-comment" @click="toggleComments" />
            </div>
            <div class="comment-section" v-if="showComments">
                <CommentSection :comments="post.comments" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';
import PostText from './PostText.vue';
import CommentSection from './CommentSection.vue';
import Button from 'primevue/button';
import { IPost } from './../domain/model/IPost';

const props = defineProps({
  post: {
    type: Object as () => IPost,
    required: true
  }
});

const { post } = toRefs(props);

const showComments = ref(false);

const emits = defineEmits(['like-post']);

function likePost(): void {
    emits('like-post', post.value.id);
}

function toggleComments(): void {
  showComments.value = !showComments.value;
}

</script>

<style scoped>
.post-header {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
}

.post-footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.post-action-bar {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
}

.like-count,
.comment-count {
    margin-left: 5px;
}
</style>../domain/model/IPost