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
					<div v-if="onSignup" key="sign-up" class="form-area flex--column-no-wrap flex_grow--grow padding--v-two padding_top--one padding--h-one">
						<h2>Unete a la comunidad de Versity</h2>

						<form @submit.prevent="onSubmitSignUp">
							<div class="grid-x grid-margin-x">
								<div class="cell auto">
									<input type="text" name="firstName" v-model="upfirstName" placeholder="Nombre" required>
								</div>
								<div class="cell auto">
									<input type="text" name="lastName" v-model="uplastName" placeholder="Apellido" required>
								</div>
							</div>
							<transition name="fade">
								<p v-if="errors['name']" class="text_color--error">{{ errors['name'] }}</p>
							</transition>

							<input type="email" name="email" v-model="upEmail" placeholder="Email" required>
							<transition name="fade">
								<p v-if="errors['email']" class="text_color--error">{{ errors['email'] }}</p>
							</transition>

							<input type="text" name="username" v-model="upUsername" placeholder="Usuario" required>
							<transition name="fade">
								<p v-if="errors['username']" class="text_color--error">{{ errors['username'] }}</p>
							</transition>

							<input type="password" name="password" v-model="upPassword" placeholder="Contraseña" required>
							<input type="password" name="password-comp" v-model="upPasswordCopy" placeholder="Repita su contraseña" required>
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

					<div v-else key="sign-in" class="form-area flex--column-no-wrap flex_grow--grow padding--v-two padding_top--one padding--h-one">
						<h2>Bienvenido otra vez!<br/>Introduce tus datos</h2>

						<form @submit.prevent="onSubmitSignIn">
							<input type="text" name="username" v-model="inUsername" placeholder="Usuario" required>
							<transition name="fade">
								<p v-if="errors['username']" class="text_color--error">{{ errors['username'] }}</p>
							</transition>

							<input type="password" name="password" v-model="inPassword" placeholder="Contraseña" required>
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
				</transition>
			</div>

			<div class="decor-img cell show-for-large large-6 background_size--cover background_repeat--no-repeat"></div>
		</div>
	</modal>
</template>

<script>
import { get } from '@/api'
import validation from '@/api/validation'

const FacebookIcon = () => import('vue-material-design-icons/facebook.vue')
const GooglePlusIcon = () => import('vue-material-design-icons/google-plus.vue')

export default {
	name: 'SignModal',
	data() {
		return {
			onSignup: true,

			errors: {
				'name'    : '',
				'email'   : '',
				'username': '',
				'password': '',
				'response': '',
			},

			upFirstName:    '',
			upLastName:     '',
			upEmail:        '',
			upUsername:     '',
			upPassword:     '',
			upPasswordCopy: '',

			inUsername: '',
			inPassword: '',
		}
	},
	methods: {
		beforeOpen(event) {
			this.onSignup = event.params.onSignup
			this.clearErrors()
		},
		onSubmitSignUp() {
			this.clearErrors()

			if (!validation.validateName(this.upFirstName) || !validation.validateName(this.upLastName)) {
				this.errors['name'] = 'El nombre no es valido.'
			}

			if (!validation.validateEmail(this.upEmail)) {
				this.errors['email'] = 'El email no es valido.'
			}

			if (!validation.validateUsername(this.upUsername)) {
				this.errors['username'] = 'El nombre de usuario no es valido.'
			}

			if (!this.upPassword) {
				this.errors['password'] = 'La contraseña es requerida.'
			} else if (this.upPassword != this.upPasswordCopy) {
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
		onSubmitSignIn() {
			this.clearErrors()

			if (!validation.validateUsername(this.inUsername)) {
				this.errors['username'] = 'El nombre de usuario no es valido.'
			}

			if (!this.inPassword) {
				this.errors['password'] = 'La contraseña es requerida.'
			}

			if (!this.hasErrors) return true;
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

#sign-modal .form-area {
	overflow-y: auto;
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

#sign-modal .api-btn {
	padding: 0.75rem;
	margin-left: 0.5rem;
}

#sign-modal .api-btn.fb {
	--color: #3b5998;
}

#sign-modal .api-btn.gp {
	--color: #dd4b39;
}

</style>
