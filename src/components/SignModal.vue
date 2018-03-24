<template>
	<modal name="sign-modal" transition="fade" @before-open="beforeOpen">
		<div id="sign-modal" class="grid-x">
			<div class="cell small-12 large-6 flex--column-no-wrap">
				<nav class="grid-x background_color--medium text_align--center">
					<a @click.prevent="onSignup = true" class="cell auto flex--row-no-wrap justify_content--center align_items--center padding--all-one text_color--dark" :class="{ 'active' : onSignup }">
						<h4>Registro</h4>
					</a>
					<a @click.prevent="onSignup = false" class="cell auto flex--row-no-wrap justify_content--center align_items--center padding--all-one text_color--dark" :class="{ 'active' : !onSignup }">
						<h4>Entrar</h4>
					</a>
				</nav>

				<transition name="fade" mode="out-in">
					<div v-if="onSignup" key="sign-up" class="flex--column-no-wrap flex_grow--grow padding--v-two padding_top--one padding--h-one">
						<h2>Unete a la comunidad de Versity</h2>

						<form @submit.prevent="onSubmitSignUp">
							<input type="email" name="email" v-model="upEmail" placeholder="Email">
							<transition name="fade">
								<p v-if="errors['email']" class="text_color--error">{{ errors['email'] }}</p>
							</transition>

							<input type="text" name="username" v-model="upUsername" placeholder="Usuario">
							<transition name="fade">
								<p v-if="errors['username']" class="text_color--error">{{ errors['username'] }}</p>
							</transition>

							<input type="password" name="password" v-model="upPassword" placeholder="Contraseña">
							<input type="password" name="password-comp" v-model="upPasswordCopy" placeholder="Repita su contraseña">
							<transition name="fade">
								<p v-if="errors['password']" class="text_color--error">{{ errors['password'] }}</p>
							</transition>

							<div class="flex--row-no-wrap margin_top--one">
								<button type="submit" class="display--block width--parent">Registrarse</button>
								<button type="button" class="api-btn fb"><facebook-icon/></button>
								<button type="button" class="api-btn gp"><google-plus-icon/></button>
							</div>
						</form>

						<p class="margin--all-none margin_top--auto text_align--center text_color--medium">Al registrarme yo, el usuario, acepto los <a>Terminos de Uso</a> y las <a>Politicas de Privacidad</a> de Versity</p>
					</div>

					<div v-else key="sign-in" class="flex--column-no-wrap flex_grow--grow padding--v-two padding_top--one padding--h-one">
						<h2>Bienvenido otra vez!<br/>Introduce tus datos</h2>

						<form @submit.prevent="onSubmitSignIn">
							<input type="text" name="username" v-model="inUsername" placeholder="Usuario">
							<transition name="fade">
								<p v-if="errors['username']" class="text_color--error">{{ errors['username'] }}</p>
							</transition>

							<input type="password" name="password" v-model="inPassword" placeholder="Contraseña">
							<transition name="fade">
								<p v-if="errors['password']" class="text_color--error">{{ errors['password'] }}</p>
							</transition>

							<div class="flex--row-no-wrap margin_top--one">
								<button type="submit" class="display--block width--parent">Iniciar sesión</button>
								<button type="button" class="api-btn fb"><facebook-icon/></button>
								<button type="button" class="api-btn gp"><google-plus-icon/></button>
							</div>
						</form>
					</div>
				</transition>
			</div>

			<div class="decor-img cell show-for-large large-6 background_size--cover background_repeat--no-repeat"></div>
		</div>
	</modal>
</template>

<script>
const FacebookIcon = () => import('vue-material-design-icons/facebook.vue')
const GooglePlusIcon = () => import('vue-material-design-icons/google-plus.vue')

export default {
	name: 'SignModal',
	data() {
		return {
			onSignup: true,

			errors: {
				'email'   : '',
				'username': '',
				'password': '',
				'response': '',
			},

			upEmail: "",
			upUsername: "",
			upPassword: "",
			upPasswordCopy: "",

			inUsername: "",
			inPassword: "",
		}
	},
	methods: {
		beforeOpen(event) {
			this.onSignup = event.params.onSignup
			this.clearErrors()
		},
		onSubmitSignUp() {
			this.clearErrors()

			if (!this.upEmail) {
				this.errors['email'] = "El email es requerido."
			} else if (!this.validEmail(this.upEmail)) {
				this.errors['email'] = "El email no es valido."
			}

			if (!this.upUsername) {
				this.errors['username'] = "El nombre de usuario es requerido."
			}

			if (!this.upPassword) {
				this.errors['password'] = "La contraseña es requerida."
			} else if (this.upPassword != this.upPasswordCopy) {
				this.errors['password'] = "Las contraseñas deben coincidir."
			}

			if (!this.hasErrors) return true;
		},
		onSubmitSignIn() {
			this.clearErrors()

			if (!this.inUsername) {
				this.errors['username'] = "El nombre de usuario es requerido."
			}

			if (!this.inPassword) {
				this.errors['password'] = "La contraseña es requerida."
			}

			if (!this.hasErrors) return true;
		},
		validEmail:function(email) {
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

			return re.test(email)
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
	watch: {
		onSignup(value) {
			this.clearErrors()
		}
	},
	components: {
		FacebookIcon,
		GooglePlusIcon,
	}
}
</script>

<style scoped>
#sign-modal {
	min-height: 60vh;
}

#sign-modal nav a {
	height: 3rem;

	transition: background 250ms var(--ease-in-out-sine);

	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	background: var(--medium);
}

#sign-modal nav a.active {
	position: relative;

	background: var(--light);
}

#sign-modal .error-messages ul {
	list-style: disc;
}

#sign-modal .error-messages ul li {
	margin-bottom: 0rem;
}

#sign-modal .decor-img {
	background-image: url('../assets/img/premium_banner.jpg');
}

.api-btn {
	padding: 0.75rem;
	margin-left: 0.5rem;
}

.api-btn.fb {
	--color: #3b5998;
}

.api-btn.gp {
	--color: #dd4b39;
}

</style>
