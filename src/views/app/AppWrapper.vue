<template>
	<div id="app-wrapper" class="background_color--light">
		<router-view/>
		<footer-bar :class="'top-border'"/>
	</div>
</template>

<script>
const FooterBar = () => import('@/components/FooterBar')

export default {
	name: 'AppWrapper',
	components: {
		FooterBar,
	},
}
</script>
