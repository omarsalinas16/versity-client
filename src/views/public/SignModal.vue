<!--
	SignModal.vue is the responsible of displaying both the signing up and signin in modal view, based on the onSignup
	property.
-->
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
					<sign-up v-if="onSignup" key="sign-up" :class="'form-area flex_grow--grow padding--all-one'"/>
					<sign-in v-else key="sign-in" :class="'form-area flex_grow--grow padding--all-one'"/>
				</transition>
			</div>

			<div class="decor-img cell show-for-large large-6 background_size--cover background_repeat--no-repeat"></div>
		</div>
	</modal>
</template>

<script>
const SignIn = () => import('@/views/public/sign-modal/SignIn')
const SignUp = () => import('@/views/public/sign-modal/SignUp')

/**
 * Definition of SignModal. Defines the model for sign in and sign up page
 * @name SignModal
 * @class
 * @property {String} search The string of what are you looking for
 * @property {boolean} notifDockActive Defines a boolean
 */
export default {
	/**
	 * @memberof SignModal
	 * @name name
	 * @const {String}
	 */
	name: 'SignModal',
	data() {
		return {
			onSignup: true,
		}
	},
	methods: {
		/**
		 * Receive the onSignup parameter from the modal call and assign in to the data state.
		 * @param {object} event - The VueModal event object containing the params and other data.
		 */
		beforeOpen (event) {
			this.onSignup = event.params.onSignup
		},
	},
	components: {
		SignIn,
		SignUp,
	}
}
</script>

<style>
#sign-modal {
	min-height: 60vh;
}

#sign-modal nav a {
	height: 3rem;

	transition: background 350ms var(--ease-in-out-sine);

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
	background-image: url('../../assets/img/premium_banner.jpg');
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
