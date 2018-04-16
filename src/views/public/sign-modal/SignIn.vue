<template>
	<div class="flex--column-no-wrap">
		<h2>Bienvenido otra vez!<br/>Introduce tus datos</h2>

		<form @submit.prevent="onSubmit">
			<p class="input-field" :class="{ 'error': errors.has('username') }">
				<input type="text" name="username" v-model="username" v-validate="'required|alpha_num'" placeholder="Usuario">
				<transition name="fade">
					<span v-show="errors.has('username')" class="hint">{{ errors.first('username') }}</span>
				</transition>
			</p>

			<p class="input-field" :class="{ 'error': errors.has('password') }">
				<input type="password" name="password" v-model="password" v-validate="'required|alpha_num'" placeholder="Contraseña">
				<transition name="fade">
					<p v-show="errors.has('password')" class="hint">{{ errors.first('password') }}</p>
				</transition>
			</p>

			<div class="flex--row-no-wrap margin_top--one">
				<button type="submit" class="display--block width--parent">Iniciar sesión</button>
				<button type="button" class="api-btn fb"><facebook-icon/></button>
				<button type="button" class="api-btn gp"><google-plus-icon/></button>
			</div>
		</form>

		<p class="text_align--center">No eres miembro aún? <a @click.prevent="onSignup = true">Haz click aqui</a> para registrarte</p>
	</div>
</template>

<script>
import { post } from '@/utils/api'

const FacebookIcon = () => import('vue-material-design-icons/facebook.vue')
const GooglePlusIcon = () => import('vue-material-design-icons/google-plus.vue')

export default {
	name: 'SignIn',
	data() {
		return {
			username: '',
			password: '',
		}
	},
	methods: {
		/**
		 * This is called when the submit button in the form is clicked, validates the entire form and if all the inputs are
		 * correct then allow the request to the API to be made.
		 */
		onSubmit() {
			this.$validator.validateAll().then((result) => {
				// Only allow the login to be requested if the entire form is valid.
				if (result) {
					this.login()
				}
			})
		},
		/**
		 * This function realizes the quest to the API and awaits a response.
		 */
		login() {
			// Post the username and password to "user/login"
			post('user/login', {
				username: this.username,
				password: this.password,
			})
			.then(res => {
				if (res.status === 200) {
					// If the response was successful then redirect to the dashboard at app
					this.$router.push({ path: 'app' })
					console.log('success');
				} else {
					// Either id the login was rejected or failed then do nothing.
					// TODO: Display an error message.
					console.log('error')
				}
			})
			.catch(error => console.log('fatal'))
		},
	},
	components: {
		FacebookIcon,
		GooglePlusIcon,
	},
}
</script>
