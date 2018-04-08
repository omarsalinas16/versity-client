<template>
	<div id="user-menu" class="position--relative margin_left--one">
		<button  @click="menuActive = !menuActive" class="btn transparent margin--all-none padding--all-none">
			<img src="@/assets/img/male_user_icon.png" alt="" class="avatar size--fill-parent object_fit--cover">
		</button>

		<transition name="fade">
			<div v-show="menuActive" class="floating-menu position--absolute padding--all-one background_color--midlight text_color--dark">
				<div class="top-section position--relative margin_bottom--one text_align--center">
					<img src="@/assets/img/male_user_icon.png" alt="" class="avatar large object_fit--cover">
					<p class="name font_weight--bold margin--all-none margin_top--one">{{ fullName }}</p>
					<p class="margin--all-none margin_bottom--one">{{ username }}</p>
				</div>
				<nav class="menu position--relative font_weight--normal text_align--left">
					<router-link to="" class="display--block text_color--dark">Perfil</router-link>
					<router-link to="" class="display--block text_color--dark">Cursos</router-link>
					<router-link to="" class="display--block text_color--dark">Preferencias</router-link>

					<a @click.prevent="signOut" class="display--block margin_top--one font_weight--bold text_color--dark">Salir</a>
				</nav>
			</div>
		</transition>
	</div>
</template>

<script>
import { get } from '@/utils/api'
import { mapState, mapGetters } from 'vuex'

export default {
	name: 'UserMenu',
	data() {
		return {
			menuActive: false,
		}
	},
	methods: {
		signOut() {
			get('user/logout')
			.finally(res => this.$router.push({ path: '/' }))
		}
	},
	computed: {
		...mapState([
			'firstName',
			'lastName',
			'username'
		]),
		...mapGetters([
			'fullName'
		]),
	}
}
</script>

<style scoped>
#user-menu {
	width: 2rem;
	height: 2rem;

	border-radius: 50%;
}

#user-menu .avatar {
	border-radius: 50%;
}

#user-menu .avatar.large {
	width: 50%;
	height: auto;
}

#user-menu .floating-menu {
	top: calc(100% + 2rem);
	right: 0;

	min-width: 160px;

	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
}

#user-menu .floating-menu::before {
	position: absolute;
	right: 0.5rem;
	bottom: 100%;

	display: block;

	width: 0;
	height: 0;

	content: '';

	border-width: 0 10px 12px 10px;
	border-style: solid;
	border-color: transparent transparent var(--midlight) transparent;
}

#user-menu .floating-menu .top-section {
	border-bottom: 1px solid var(--medium);
}

#user-menu .floating-menu .top-section .name {
	font-size: 18px;
}

#user-menu .floating-menu .menu a:hover {
	color: var(--hint);
}

</style>
