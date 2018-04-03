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
import { get } from '@/utils/api'

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
		onSubmit() {
			this.$validator.validateAll().then((result) => {
				if (result) {
					this.doSignInAPI()
				}
			})
		},
		doSignInAPI() {
			this.$router.push({ path: 'app' })
		}
	},
	components: {
		FacebookIcon,
		GooglePlusIcon,
	},
}
</script>
