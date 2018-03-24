<template>
	<aside id="navbar" class="position--fixed position--top-left width--viewport">
		<div class="mobile-nav show-for-small-only height--parent flex--row-no-wrap align_items--center padding--v-one padding--h-two padding_left--one" :class="{ 'active': mobileActive }">
			<button @click="mobileActive = !mobileActive" class="mobile-toggle btn transparent position--relative margin--all-none margin_right--one">
				<close-icon v-if="mobileActive"/>
				<menu-icon v-else/>
			</button>

			<transition name="fade">
				<input v-if="mobileActive" type="text" name="navbar-search" v-model="search" @keyup.enter="onSearch" class="search input-icon flex_grow--grow margin--all-none background_color--dark text_color--light" placeholder="Busca cursos!">
			</transition>
			
			<transition name="fade">
				<div v-if="mobileActive" class="mobile-nav-container flex_grow--grow width--viewport position--fixed position--top-left">
					<nav class="text_color--light">
						<router-link to="/" class="display--block">Inicio</router-link>
						<router-link to="/about" class="display--block">Acerca de</router-link>
						<router-link to="" class="display--block">Instructores</router-link>
					</nav>

					<div class="grid-x grid-margin-x margin_top--one">
						<div class="cell small-6">
							<button @click="openSignModal(true)" class="btn small display--block width--parent margin--all-none">Registro</button>
						</div>
						<div class="cell small-6">
							<button @click="openSignModal(false)" class="btn hollow small display--block width--parent margin--all-none">Entrar</button>
						</div>
					</div>
				</div>
			</transition>
		</div>

		<div class="large-nav size--fill-parent show-for-medium flex--row-no-wrap align_items--center padding--v-one padding--h-two">
			<router-link to="/" class="logo margin_right--two"><img src="@/assets/img/logo.png" alt="Versity logo"></router-link>

			<input type="text" name="navbar-search" v-model="search" @keyup.enter="onSearch" class="search show-for-large input-icon margin--all-none background_color--dark text_color--light" placeholder="Busca cursos!">

			<nav class="margin_left--auto text_color--light">
				<router-link to="/about">Acerca de</router-link>
				<router-link to="">Instructores</router-link>
			</nav>

			<div class="account text_color--light">
				<button @click="openSignModal(true)" class="btn small margin--all-none margin_left--one">Registro</button>
				<button @click="openSignModal(false)" class="btn hollow small margin--all-none">Entrar</button>
			</div>
		</div>
	</aside>
</template>

<script>
const MenuIcon = () => import('vue-material-design-icons/menu.vue')
const CloseIcon = () => import('vue-material-design-icons/close.vue')

export default {
	name: 'NavBar',
	data() {
		return {
			search: '',
			mobileActive: false,
		}
	},
	methods: {
		onSearch() {
			console.log('search')
			this.$router.push({ path: 'courses', query: { keywords: this.search }})
		},
		openSignModal(onSignup) {
			this.$modal.show('sign-modal', { onSignup: onSignup })
		}
	},
	components: {
		MenuIcon,
		CloseIcon,
	}
}
</script>

<style scoped>
#navbar {
	z-index: 999;

	height: 4rem;
}

#navbar .mobile-nav {
	transition: background 250ms var(--ease-in-out-sine);

	background: rgba(33, 33, 33, 0);
}

#navbar .mobile-nav.active {
	background: rgba(33, 33, 33, 0.9);
}

#navbar .mobile-nav .mobile-toggle {
	padding: 0.5rem;

	transition: background 250ms, color 250ms var(--ease-in-out-sine);

	background: rgba(33, 33, 33, 0.9);
}

#navbar .mobile-nav.active .mobile-toggle {
	color: var(--error);
	background: rgba(33, 33, 33, 0);
}

#navbar .mobile-nav-container {
	z-index: -1;

	padding: 4rem 2rem 1rem;

	background: rgba(33, 33, 33, 0.9);
}

#navbar .mobile-nav-container nav a {
	padding-left: 0;
	padding-right: 0;
}

#navbar .large-nav {
	background: rgba(33, 33, 33, 0.9);
}

#navbar .logo {
	display: block;

	flex: 0 0 auto;

	height: 100%;
}

#navbar .search {
	flex: 1 1;

	background-color: transparent;
	background-image: url('../assets/svg/search_icon.svg');
}

#navbar .large-nav .search {
	flex: 0 1;

	min-width: 350px;
}

#navbar nav {
	font-size: 1rem;
}

#navbar nav a {
	padding: 0.5rem 1rem;

	transition: color 250ms var(--ease-in-out-sine);

	color: inherit;
}

#navbar nav a:hover {
	color: var(--accent);
}

</style>
