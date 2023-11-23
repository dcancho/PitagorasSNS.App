<template>
    <Menubar>
        <template #start>
            <div class="start-slot">
                <img src="/logo.jpeg" alt="Logo" class="header-logo" />
                <span>Pitágoras</span>
            </div>
        </template>
        <template #end>
            <div class="end-container">
                <label>Logged in as {{ userCode }}</label>
                <Button label="Log out" icon="pi pi-power-off" @click="logout" />
            </div>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import router from '../router';

var userCode = localStorage.getItem('userCode');

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

.end-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
}
</style>