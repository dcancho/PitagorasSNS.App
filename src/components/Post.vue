<template>
    <div class="post">
        <div class="post-header">
            <img class="avatar" :src="avatarUrl" />
            <h2>{{ post.title }}</h2>
            <p class="author-code">{{ post.authorCode }}</p>
        </div>
        <div class="post-body">
            <PostText :text="post.content" />
        </div>
        <div class="post-footer">
            <div class="post-action-bar">
                <Button :label="post.likes.toString()" icon="pi pi-thumbs-up" @click="likePost" />
                <Button :label="post.comments?.length.toString()" icon="pi pi-comment" @click="toggleComments" />
            </div>
            <div class="comment-section" v-if="showComments">
                <CommentSection :comments="post.comments" :post-id="post.id" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
import PostText from './PostText.vue';
import CommentSection from './CommentSection.vue';
import Button from 'primevue/button';
import { IPost } from './../domain/model/IPost';
import axios from 'axios';

const props = defineProps({
    post: {
        type: Object as () => IPost,
        required: true
    }
});

const avatarUrl = computed(() => {
    return `https://robohash.org/${post.value.authorCode}`;
});

const { post } = toRefs(props);

const showComments = ref(false);

const emits = defineEmits(['like-post']);

function likePost(): void {
    console.log(post.value.id);
    emits('like-post', post.value.id);

    axios.put(`http://localhost:5264/api/v1/Post/${post.value.id}/like`)
        .then(() => {
            console.log('Post liked successfully');
        })
        .catch(error => {
            console.error('Error:', error);
        });
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

.author-code {
    font: 0.75rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #888;
    opacity: 0.6;
}
</style>