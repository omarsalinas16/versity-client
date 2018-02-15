<template>
	<div id="app">
		<nav-bar/>
		<router-view/>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import NavBar from '@/components/NavBar'

export default {
	name: 'App',
	components: {
		FooterBar,
		NavBar
	}
}
</script>

<style>
#app {
	display: flex;
	flex-flow: column nowrap;

	min-height: 100vh;
}

#app main {
	flex: 1 1 100%;
}

</style>
