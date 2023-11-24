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
                <label class="logged-in-as">Logged in as {{ userCode }}</label>
                <Button :label="buttonLabel" icon="pi pi-power-off" @click="logout" />
            </div>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import router from '../router';
import {computed} from 'vue';

var userCode = localStorage.getItem('userCode');

function logout() {
    localStorage.removeItem('userCode');
    router.push('/login');
}

const buttonLabel = computed(() => {
    return window.innerWidth < 300 ? '' : 'Log out';
});

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


@media (max-width: 470px) {
    .logged-in-as {
        display: none;
    }
}

@media (max-width: 300px) {
    button span {
        display: none;
    }
}
</style>