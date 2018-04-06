<template>
	<button id="user-menu" @click="menuActive = !menuActive" class="btn transparent position--relative  margin--all-none margin_left--one padding--all-none">
		<img src="@/assets/img/male_user_icon.png" alt="" class="avatar size--fill-parent object_fit--cover">

		<transition name="fade">
			<div v-show="menuActive" class="floating-menu position--absolute padding--all-one background_color--midlight text_color--dark">
				<div class="top-section position--relative margin_bottom--one">
					<img src="@/assets/img/male_user_icon.png" alt="" class="avatar large object_fit--cover">
					<p class="name">{{ name }}</p>
				</div>
				<nav class="menu position--relative font_weight--normal text_align--left">
					<router-link to="" class="display--block text_color--dark">Perfil</router-link>
					<router-link to="" class="display--block text_color--dark">Cursos</router-link>
					<router-link to="" class="display--block text_color--dark">Preferencias</router-link>

					<router-link to="" class="display--block margin_top--one font_weight--bold text_color--dark">Salir</router-link>
				</nav>
			</div>
		</transition>
	</button>
</template>

<script>
export default {
	name: 'UserMenu',
	data() {
		return {
			menuActive: false,
		}
	},
	props: {
		firstName: {
			type: String,
			required: true,
			default: 'User'
		},
		lastName: {
			type: String,
			required: true,
			default: 'Name'
		}
	},
	computed: {
		name() { return `${this.firstName} ${this.lastName}` }
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
