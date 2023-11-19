<template>
    <div class="comment-section">
        <div class="new-comment-input">
            <InputText class="comment-input" v-model="newComment" placeholder="Write a comment..." />
            <Button label="Post" @click="postComment" />
        </div>
        <div class="comment-container">
            <div class="comment" v-for="(comment) in comments" :key="comment.id">
            <p>{{ comment.text }}</p>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';
import { Comment } from './../domain/model/Comment';
import axios from 'axios';

const props = defineProps({
    comments: {
        type: Array as () => Comment[],
        default: () => [],
    },
    postId: {
        type: String,
        required: true,
    },
});

const newComment = ref('');

const postComment = async () => {
    if (newComment.value) {
        try {
            await axios.put(`http://localhost:5264/api/v1/Post/${props.postId}/comment`, JSON.stringify(newComment.value), {
                headers: { 'Content-Type': 'application/json' }
            });
            newComment.value = '';
        } catch (error) {
            console.error('Error:', error);
        }
    }
};

</script>

<style scoped>
.comment-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.comment-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.new-comment-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.comment {
    box-sizing: border-box;
    border: 1px solid var(--surface-d);
    border-radius: 0.5rem;
    padding-right: 1rem;
    padding-left: 1rem;
}

.comment:hover {
    background-color: var(--surface-b);
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
}
.comment-input {
    flex: 1;
    margin-right: 1rem;
}
</style>