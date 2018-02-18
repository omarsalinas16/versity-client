<template>
	<div id="navbar" class="position--fixed position--top-left display--flex flex_direction--row flex_wrap--no-wrap width--viewport align_items--center">
		<router-link to="/" class="logo">
			<img src="@/assets/logo.png" alt="Versity logo">
		</router-link>
		<nav class="text_color--light">
			<router-link to="/about">Acerca de</router-link>
			<router-link to="/bussiness">Afiliados</router-link>
			<router-link to="/personal">Personal</router-link>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'NavBar'
}
</script>

<style scoped>
#navbar {
	z-index: 999;

	height: 4rem;
	padding: 1rem;
}

#navbar::before {
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;

	display: block;

	width: 100%;
	height: 100%;

	content: '';

	opacity: 0.75;
	background: #000000;
}

#navbar > .logo {
	display: block;

	height: 100%;
	margin-right: 2rem;
}

#navbar > nav {
	font-size: 1rem;
}

#navbar > nav > a {
	padding: 0.5rem 1rem;

	transition: color 0.3s;

	color: inherit;
}

#navbar > nav > a:hover {
	color: var(--accent);
}

</style>
