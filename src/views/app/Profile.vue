<template>
	<main id="profile">
		<header class="grid-container">
			<h1>Perfíl</h1>
			<p>Bienvenido a la configuracion de tu perfil, {{ fullName }}</p>
		</header>

		<section class="grid-container margin_top--two">
			<form @submit.prevent="onSubmit">
				<p class="input-field">
					<label for="firstName">Nombre(s)</label>
					<input type="text" name="firstName" v-model="mFirstName" placeholder="Nombre">
				</p>

				<p class="input-field">
					<label for="lastName">Apellido(s)</label>
					<input type="text" name="lastName" v-model="mLastName" placeholder="Apellido">
				</p>

				<p class="input-field">
					<label for="email">Email</label>
					<input type="email" name="email" v-model="email" placeholder="Email">
				</p>

				<button type="submit" class="margin_top--two">Guardar cambios</button>
			</form>
		</section>
	</main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
	name: 'Profile',
	beforeMount() {
		this.mFirstName = this.firstName
		this.mLastName = this.lastName
	},
	data() {
		return {
			mFirstName: '',
			mLastName: '',
			email: '',
		}
	},
	methods: {
		/**
		 * Submit all changes to the User profile to the API.
		 */
		onSubmit() {

		}
	},
	computed: {
		...mapState([
			'firstName',
			'lastName'
		]),
		...mapGetters([
			'fullName'
		]),
	}
}
</script>

<style>

</style>
