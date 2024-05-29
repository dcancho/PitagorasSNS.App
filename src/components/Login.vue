<template>
	<main>
		<img src="/logo.jpeg" alt="Logo" class="login-logo" />
		<form @submit.prevent="submitForm" class="form">
			<p>Student or teacher code:</p>
			<InputText id="code" v-model="form.code" />
			<br />
			<Button label="Login" @click="submitForm" />
		</form>
		<router-link to="/register">Register instead</router-link>
	</main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import axios from 'axios';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import router from '../router';
import {serverUrl} from '../config';

const form = reactive({
	code: ''
});

const submitForm = async () => {
	try {
		const studentEndpoint = `${serverUrl}Student/${form.code}`;
		const teacherEndpoint = `${serverUrl}Teacher/${form.code}`;

		const studentResponse = await axios.get(studentEndpoint);
		const teacherResponse = await axios.get(teacherEndpoint);

		if (studentResponse.status === 200) {
			console.log('Login successful as student');
			localStorage.setItem('userCode', form.code);
			router.push('/');
		} else if (teacherResponse.status === 200) {
			console.log('Login successful as teacher');
			localStorage.setItem('userCode', form.code);
			router.push('/');
		} else {
			console.log(`Login failed: No user with code ${form.code} found`);
		}
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