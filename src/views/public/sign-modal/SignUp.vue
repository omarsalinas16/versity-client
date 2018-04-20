<template>
	<div class="flex--column-no-wrap">
		<h2>Unete a la comunidad de Versity</h2>

		<form @submit.prevent="onSubmitSignUp">
			<div class="input-field grid-x grid-margin-x" :class="{ 'error': errors.has('firstName') || errors.has('lastName') }">
				<div class="cell auto">
					<input type="text" name="firstName" v-model="firstName" v-validate="'required|alpha_spaces'" placeholder="Nombre">
				</div>
				<div class="cell auto">
					<input type="text" name="lastName" v-model="lastName" v-validate="'required|alpha_spaces'" placeholder="Apellido">
				</div>
				<div class="cell small-12">
					<transition-group name="fade">
						<span v-show="errors.has('firstName')" key="firstName" class="hint display--block">{{ errors.first('firstName') }}</span>
						<span v-show="errors.has('lastName')" key="lastName" class="hint display--block">{{ errors.first('lastName') }}</span>
					</transition-group>
				</div>
			</div>

			<p class="input-field" :class="{ 'error': errors.has('email') }">
				<input type="email" name="email" v-model="email" v-validate="'required|email'" placeholder="Email">
				<transition name="fade">
					<p v-show="errors.has('email')" class="hint">{{ errors.first('email') }}</p>
				</transition>
			</p>

			<p class="input-field" :class="{ 'error': errors.has('username') }">
				<input type="text" name="username" v-model="username" v-validate="'required|alpha_num'" placeholder="Usuario">
				<transition name="fade">
					<span v-show="errors.has('username')" class="hint">{{ errors.first('username') }}</span>
				</transition>
			</p>

			<p class="input-field" :class="{ 'error': errors.has('password') }">
				<input type="password" name="password" v-model="password" v-validate="'required|alpha_num|confirmed:password_conf'" class="margin" placeholder="Contraseña">
				<input type="password" name="password_conf" v-model="passwordCopy" placeholder="Repita su contraseña">

				<transition name="fade">
					<p v-show="errors.has('password')" class="hint">{{ errors.first('password') }}</p>
				</transition>
			</p>

			<div class="flex--row-no-wrap margin_top--one">
				<spinner-button type="submit" class="display--block width--parent" :loading="isLoading">Registrarse</spinner-button>
				<button type="button" class="api-btn fb"><facebook-icon/></button>
				<button type="button" class="api-btn gp"><google-plus-icon/></button>
			</div>
		</form>

		<transition name="fade">
			<p v-show="error" class="small-hint error">{{ error }}</p>
		</transition>

		<p class="margin--all-none margin_top--auto text_align--center text_color--medium">Al registrarme, yo (el usuario) acepto los <a>Terminos de Uso</a> y las <a>Politicas de Privacidad</a> de Versity</p>
	</div>
</template>

<script>
import { post } from '@/utils/api'

const SpinnerButton = () => import('@/components/SpinnerButton')
const FacebookIcon = () => import('vue-material-design-icons/facebook.vue')
const GooglePlusIcon = () => import('vue-material-design-icons/google-plus.vue')

export default {
	name: 'SignUp',
	data() {
		return {
			firstName   : '',
			lastName    : '',
			email       : '',
			username    : '',
			password    : '',
			passwordCopy: '',

			isLoading: false,
			error: '',
		}
	},
	methods: {
		onSubmitSignUp() {
			this.$validator.validateAll().then((result) => {
				if (result) {
					this.register()
				}
			})
		},
		register() {
			this.error = ''
			this.isLoading = true

			post('user/register', {
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				userName: this.username,
				password: this.password,
			})
			.then(res => {
				if (res.status === 200) {
					this.autoLogin()
				}
			})
			.catch(error => {
				if (error.response) {
					this.error = 'Ya existe un usuario con estos datos.'
				} else if (error.request) {
					this.error = 'No hay comunicación con el servicio, vuelva a intentarlo más tarde.'
				} else {
					this.error = 'Ha ocurrido un error inesperado, PANICO!'
				}

				this.isLoading = false
			})
		},
		autoLogin() {
			this.error = ''
			this.isLoading = true

			post('user/login', {
				username: this.username,
				password: this.password,
			})
			.then(res => {
				if (res.status === 200) {
					this.$router.push({ path: 'app' })
					this.isLoading = false
				}
			})
			.catch(error => {
				if (error.response) {
					this.error = 'Ha fallado el autodireccionamiento a su cuenta.'
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
	}
}
</script>
