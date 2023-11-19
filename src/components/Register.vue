<template>
    <main>
        <img src="/logo.jpeg" alt="Logo" class="login-logo" />
        <form @submit.prevent="submitForm" class="form">
            <p> Name: </p>
            <InputText id="name" v-model="form.name" />
            <p> User Code: </p>
            <InputText id="userCode" v-model="form.userCode" />
            <p> Email: </p>
            <InputText id="email" v-model="form.email" />
            <p> Password: </p>
            <Password id="password" v-model="form.password" />
            <p> User Type: </p>
            <Dropdown id="userType" v-model="form.userType" :options="userTypes" optionLabel="name" optionValue="code" />
            <br/>
            <Button label="Submit" @click="submitForm"/>
        </form>
        <router-link to="/login">Login instead</router-link>
    </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import axios from 'axios';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

const form = reactive({
    name: '',
    userCode: '',
    email: '',
    password: '',
    userType: ''
});

const userTypes = [
    { name: 'Student', code: 'student' },
    { name: 'Teacher', code: 'teacher' }
];
const getRequestBody = () => {
    if (form.userType === 'student') {
        return JSON.stringify({
            "name": form.name,
            "studentCode": form.userCode,
            "email": form.email,
            "password": form.password
        });
    } else if (form.userType === 'teacher') {
        return JSON.stringify({
            "name": form.name,
            "teacherCode": form.userCode,
            "email": form.email,
            "password": form.password
        });
    }
};

const submitForm = async () => {
    alert('Form submit called!');
    console.log(form);
    console.log(getRequestBody());

    try {
        const serverUrl = "http://localhost:5264";
        const endpoint = `${serverUrl}/api/v1/${form.userType}`;
        const response = await axios.post(endpoint, getRequestBody(), {
            headers: {
                'Content-Type': 'application/json'
            }
        
        });
        console.log('Success:', response.data);
        // Set the Id in the local storage
        localStorage.setItem('userCode', form.userCode);
    } catch (error) {
        console.error('Error:', error);
    }
};
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.login-logo {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>