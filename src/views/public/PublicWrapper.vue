<template>
	<div id="public-wrapper" class="background_color--dark">
		<router-view/>
		<footer-bar/>

		<sign-modal/>
	</div>
</template>

<script>
const FooterBar = () => import('@/components/FooterBar')
const SignModal = () => import('@/components/SignModal')

export default {
	name: 'PublicWrapper',
	components: {
		FooterBar,
		SignModal,
	},
}
</script>
