<template>
	<div id="navbar">
		<router-link to="/" class="logo">
			<img src="@/assets/logo.png" alt="Versity logo">
		</router-link>
		<nav>
			<router-link to="/about">Menu Item</router-link>
			<router-link to="/bussiness">Menu Item</router-link>
			<router-link to="/personal">Menu Item</router-link>
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
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;

	display: flex;

	flex-flow: row nowrap;

	width: 100vw;
	height: 4rem;
	padding: 1rem;

	align-items: center;
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

	color: var(--txt-light, #ffffff);
}

#navbar > nav > a {
	padding: 0.5rem 1rem;

	transition: color 0.3s;
	text-decoration: none;

	color: inherit;
}

#navbar > nav > a:hover {
	color: var(--accent);
}

</style>
