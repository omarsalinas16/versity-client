<template>
	<div id="app" class="display--flex flex_direction--column flex_wrap--no-wrap">
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
