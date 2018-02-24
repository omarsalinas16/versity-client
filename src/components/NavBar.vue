<template>
	<div id="navbar" class="position--fixed position--top-left flex--row-no-wrap width--viewport align_items--center">
		<router-link to="/" class="logo"><img src="@/assets/img/logo.png" alt="Versity logo"></router-link>

		<input type="text" name="navbar-search" v-model="search" @keyup.enter="onSearch" class="search input-icon margin--all-none background_color--dark border--medium onFocus-border--hint text_color--light" placeholder="Busca cursos!">

		<nav class="text_color--light">
			<router-link to="/about">Acerca de</router-link>
			<router-link to="/bussiness">Afiliados</router-link>
			<router-link to="/personal">Personal</router-link>
		</nav>
	</div>
</template>

<script>
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
	}
}
</script>

<style scoped>
#navbar {
	z-index: 999;

	height: 4rem;
	padding: 1rem 2rem;

	background: rgba(33, 33, 33, 0.9);
}

#navbar > .logo {
	display: block;

	height: 100%;
	margin-right: 2rem;
}

#navbar > .search {
	background-image: url('../assets/svg/search_icon.svg');
}

#navbar > nav {
	font-size: 1rem;

	margin-left: auto;
}

#navbar > nav > a {
	padding: 0.5rem 1rem;

	transition: color 200ms;

	color: inherit;
}

#navbar > nav > a:hover {
	color: var(--accent);
}

</style>
