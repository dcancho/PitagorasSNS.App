<template>
    <Menubar>
        <template #start>
            <div class="start-slot">
                <img src="/logo.jpeg" alt="Logo" class="header-logo" />
            <span>Pitágoras</span>
            </div>
        </template>
        <template #end>
            <Button label="Log out" icon="pi pi-power-off" @click="logout" />
        </template>
    </Menubar>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import router from '../router';

function logout() {
    localStorage.removeItem('userCode');
    router.push('/login');
}

</script>

<style scoped>
.header-logo {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
}
.start-slot {
    display: flex;
    align-items: center;
    gap: 1rem;
}
</style>