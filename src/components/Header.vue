<template>
    <Menubar :model="items">
        <template #start>
            <img src="/logo.jpeg" alt="Logo" class="header-logo" />
        </template>
        <div class="header-title">
            <h1>Vue 3 Blog</h1>
        </div>
    </Menubar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Menubar from 'primevue/menubar';

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: () => { /* navigate to home */ }
    },
]);
</script>

<style scoped>
.header-logo {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
}
</style>