<template>
    <div class="text" v-html="markdownText"></div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import MarkdownIt from 'markdown-it';

const props = defineProps({
    text: {
        type: String,
        default: ''
    }
});

const md = new MarkdownIt();
const markdownText = ref('');

watchEffect(() => {
    if (props.text) {
        markdownText.value = md.render(props.text);
    }
});
</script>

<style>
.text {
    width: 100%;
}
</style>