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
				<spinner-button type="submit" class="display--block width--parent" :loading="isLoading">Iniciar sesión</spinner-button>
				<button type="button" class="api-btn fb"><facebook-icon/></button>
				<button type="button" class="api-btn gp"><google-plus-icon/></button>
			</div>
		</form>

		<transition name="fade">
			<p v-show="error" class="small-hint error">{{ error }}</p>
		</transition>

		<p class="text_align--center">No eres miembro aún? <a @click.prevent="onSignup = true">Haz click aqui</a> para registrarte</p>
	</div>
</template>

<script>
import { post } from '@/utils/api'

const SpinnerButton = () => import('@/components/SpinnerButton')

const FacebookIcon = () => import('vue-material-design-icons/facebook.vue')
const GooglePlusIcon = () => import('vue-material-design-icons/google-plus.vue')

export default {
	name: 'SignIn',
	data() {
		return {
			username: '',
			password: '',

			isLoading: false,
			error: '',
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
			this.error = ''
			this.isLoading = true
			// Post the username and password to "user/login"
			post('user/login', {
				username: this.username,
				password: this.password,
			})
			.then(res => {
				if (res.status === 200) {
					// If the response was successful then redirect to the dashboard at app
					this.$router.push({ path: 'app' })
					this.isLoading = false
				}
			})
			.catch(error => {
				if (error.response) {
					this.error = 'Estos datos parecen ser incorrectos.'
				} else if (error.request) {
					this.error = 'No hay comunicación con el servicio, vuelva a intentarlo más tarde.'
				} else {
					this.error = 'Ha ocurrido un error inesperado, PANICO!'
				}

				this.isLoading = false
			})
		},
	},
	components: {
		FacebookIcon,
		GooglePlusIcon,
		SpinnerButton,
	},
}
</script>
