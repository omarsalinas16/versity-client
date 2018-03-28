<template>
	<div class="flex--column-no-wrap">
		<h2>Unete a la comunidad de Versity</h2>

		<form @submit.prevent="onSubmitSignUp">
			<div class="grid-x grid-margin-x">
				<div class="cell auto">
					<input type="text" name="firstName" v-model="firstName" placeholder="Nombre" required>
				</div>
				<div class="cell auto">
					<input type="text" name="lastName" v-model="lastName" placeholder="Apellido" required>
				</div>
			</div>
			<transition name="fade">
				<p v-if="errors['name']" class="text_color--error">{{ errors['name'] }}</p>
			</transition>

			<input type="email" name="email" v-model="email" placeholder="Email" required>
			<transition name="fade">
				<p v-if="errors['email']" class="text_color--error">{{ errors['email'] }}</p>
			</transition>

			<input type="text" name="username" v-model="username" placeholder="Usuario" required>
			<transition name="fade">
				<p v-if="errors['username']" class="text_color--error">{{ errors['username'] }}</p>
			</transition>

			<input type="password" name="password" v-model="password" placeholder="Contraseña" required>
			<input type="password" name="password-comp" v-model="passwordCopy" placeholder="Repita su contraseña" required>
			<transition name="fade">
				<p v-if="errors['password']" class="text_color--error">{{ errors['password'] }}</p>
			</transition>

			<div class="flex--row-no-wrap margin_top--one">
				<button type="submit" class="display--block width--parent">Registrarse</button>
				<button type="button" class="api-btn fb"><facebook-icon/></button>
				<button type="button" class="api-btn gp"><google-plus-icon/></button>
			</div>
		</form>

		<p class="margin--all-none margin_top--auto text_align--center text_color--medium">Al registrarme, yo (el usuario) acepto los <a>Terminos de Uso</a> y las <a>Politicas de Privacidad</a> de Versity</p>
	</div>
</template>

<script>
import { get } from '@/api'
import validation from '@/api/validation'

const FacebookIcon = () => import('vue-material-design-icons/facebook.vue')
const GooglePlusIcon = () => import('vue-material-design-icons/google-plus.vue')

export default {
	name: 'SignUp',
	data() {
		return {
			errors: {
				'name'    : '',
				'email'   : '',
				'username': '',
				'password': '',
				'response': '',
			},

			firstName   : '',
			lastName    : '',
			email       : '',
			username    : '',
			password    : '',
			passwordCopy: '',
		}
	},
	methods: {
		onSubmitSignUp() {
			this.clearErrors()

			if (!validation.validateName(this.firstName) || !validation.validateName(this.lastName)) {
				this.errors['name'] = 'El nombre no es valido.'
			}

			if (!validation.validateEmail(this.email)) {
				this.errors['email'] = 'El email no es valido.'
			}

			if (!validation.validateUsername(this.username)) {
				this.errors['username'] = 'El nombre de usuario no es valido.'
			}

			if (!this.password) {
				this.errors['password'] = 'La contraseña es requerida.'
			} else if (this.password != this.passwordCopy) {
				this.errors['password'] = 'Las contraseñas deben coincidir.'
			}

			if (!this.hasErrors) {
				this.doSignUpAPI()
			}
		},
		doSignUpAPI() {
			get('', {
				email: this.upEmail,
				username: this.upUsername,
				password: '',
			})
			.then(res => {
				if (res.status === 200) {
					console.log('success')
				} else {
					console.log('error')
				}
			})
			.catch(error => console.log('fatal'))
		},
		clearErrors() {
			Object.keys(this.errors).forEach(key => this.errors[key] = '')
		},
	},
	computed: {
		hasErrors() {
			return Object.values(this.errors).reduce((acc = false, value) => acc = value ? true : acc)
		},
	},
	components: {
		FacebookIcon,
		GooglePlusIcon,
	}
}
</script>
