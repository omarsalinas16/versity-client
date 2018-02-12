<template>
	<div id="navbar">
		<img src="@/assets/logo.png" alt="Versity logo" class="logo">
		<nav>
			<a href="">Menu Item</a>
			<a href="">Menu Item</a>
			<a href="">Menu Item</a>
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
	top: 0;
	left: 0;

	display: flex;

	flex-flow: row nowrap;

	width: 100vw;
	height: 5rem;
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

	opacity: 0.65;
	background: #000000;
}

#navbar > .logo {
	margin-right: 2rem;
}

#navbar > nav {
	color: var(--txt-light, #ffffff);
}

#navbar > nav > a {
	font-size: 1rem;

	padding: 0.5rem 1rem;

	transition: color 0.3s;
	text-decoration: none;

	color: inherit;
}

#navbar > nav > a:hover {
	color: var(--accent);
}

</style>
