<template>
	<div id="app" class="flex--column-no-wrap">
		<nav-bar/>
		<router-view/>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
import FooterBar from '@/components/FooterBar'
import NavBar from '@/components/NavBar'

export default {
	name: 'Public',
	components: {
		FooterBar,
		NavBar
	}
}
</script>
