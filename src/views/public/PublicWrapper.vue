<template>
	<div id="public-wrapper">
		<router-view/>
		<footer-bar/>
	</div>
</template>

<script>
const FooterBar = () => import('@/components/FooterBar')

export default {
	name: 'PublicWrapper',
	components: {
		FooterBar,
	}
}
</script>
