<template>
    <div>
        <div class="new-comment-input">
            <InputText class="comment-input" v-model="newComment" placeholder="Write a comment..." />
            <Button label="Post" @click="postComment" />
        </div>
        <div class="comment" v-for="(comment) in comments" :key="comment.id">
            <p>{{ comment.text }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';
import { Comment } from './../domain/model/Comment';

const props = defineProps({
    comments: {
        type: Array as () => Comment[],
        default: () => [],
    },
});

const newComment = ref('');

const postComment = () => {
    if (newComment.value) {
        props.comments.push({
            text: newComment.value,
            id: (props.comments.length + 1).toString(),
        });
        newComment.value = '';
    }
};
</script>

<style scoped>
.new-comment-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.comment {
    background-color: var(--surface-d);
    border-radius: 0.5rem;
    padding-right: 1rem;
    padding-left: 1rem;
}
.comment-input {
    flex: 1;
    margin-right: 1rem;
}
</style>