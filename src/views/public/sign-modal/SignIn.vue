<template>
	<div class="flex--column-no-wrap">
		<h2>Bienvenido otra vez!<br/>Introduce tus datos</h2>

		<form @submit.prevent="onSubmit">
			<input type="text" name="username" v-model="username" placeholder="Usuario" required>
			<transition name="fade">
				<p v-if="errors['username']" class="text_color--error">{{ errors['username'] }}</p>
			</transition>

			<input type="password" name="password" v-model="password" placeholder="Contraseña" required>
			<transition name="fade">
				<p v-if="errors['password']" class="text_color--error">{{ errors['password'] }}</p>
			</transition>

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
import { get } from '@/utils/api'
import validation from '@/utils/validation'

const FacebookIcon = () => import('vue-material-design-icons/facebook.vue')
const GooglePlusIcon = () => import('vue-material-design-icons/google-plus.vue')

export default {
	name: 'SignIn',
	data() {
		return {
			errors: {
				'username': '',
				'password': '',
				'response': '',
			},

			username: '',
			password: '',
		}
	},
	methods: {
		onSubmit() {
			this.clearErrors()

			if (!validation.validateUsername(this.username)) {
				this.errors['username'] = 'El nombre de usuario no es valido.'
			}

			if (!this.password) {
				this.errors['password'] = 'La contraseña es requerida.'
			}

			this.$router.push({ path: 'app' })

			if (!this.hasErrors) {
				return true;
			}
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
	},
}
</script>
