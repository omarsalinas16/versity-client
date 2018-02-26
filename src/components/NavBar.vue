<template>
	<aside id="navbar" class="position--fixed position--top-left flex--row-no-wrap align_items--center width--viewport padding--v-one padding--h-two">
		<router-link to="/" class="logo margin_right--two">
			<img src="@/assets/img/logo.png" alt="Versity logo" class="show-for-medium">
			<img src="@/assets/img/icon.png" alt="Versity logo" class="show-for-small-only">
		</router-link>

		<div class="show-for-medium flex--row-no-wrap align_items--center width--parent">
			<input type="text" name="navbar-search" v-model="search" @keyup.enter="onSearch" class="search show-for-large input-icon margin--all-none background_color--dark border--medium onFocus-border--hint text_color--light" placeholder="Busca cursos!">

			<nav class="margin_left--auto text_color--light">
				<router-link to="/about">Acerca de</router-link>
				<router-link to="/bussiness">Afiliados</router-link>
				<router-link to="/personal">Personal</router-link>
			</nav>

			<div class="account text_color--light">
				<router-link to="/signup" class="btn small margin--all-none background_color--accent">Registro</router-link>
			</div>
		</div>

		<div class="hide-for-medium flex--row-no-wrap align_items--center width--parent">
			<div class="margin_left--auto account text_color--light">
				<router-link to="/signup" class="btn small margin--all-none background_color--accent">Registro</router-link>
			</div>
			<button class="margin--all-none padding--all-one text_color--light"><menu-icon/></button>
		</div>
	</aside>
</template>

<script>
const MenuIcon = () => import('vue-material-design-icons/menu.vue')

export default {
	name: 'NavBar',
	data() {
		return {
			search: ''
		}
	},
	methods: {
		onSearch() {
			console.log('search')
			this.$router.push({ path: 'courses', query: { keywords: this.search }})
		}
	},
	components: {
		MenuIcon
	}
}
</script>

<style scoped>
#navbar {
	z-index: 999;

	height: 4rem;

	background: rgba(33, 33, 33, 0.9);
}

#navbar .logo {
	display: block;

	flex: 1 0 auto;

	height: 100%;
}

#navbar .search {
	flex: 0 1;

	background-image: url('../assets/svg/search_icon.svg');
	background-color: transparent;
}

#navbar nav {
	font-size: 1rem;
}

#navbar nav a {
	padding: 0.5rem 1rem;

	transition: color 200ms;

	color: inherit;
}

#navbar nav a:hover {
	color: var(--accent);
}

</style>
