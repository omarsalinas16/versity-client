<!--
	PublicWrapper.vue is used as housing of the publicly visible part of the site (landing page, about, etc).
	The important part here is the definition of an entry point for the SignModal to be, so it can be activated from
	within any of the public pages.
-->
<template>
	<div id="public-wrapper" class="background_color--dark">
		<!-- View container -->
		<router-view/>
		<!-- Common footer -->
		<footer-bar/>

		<!-- Sign modal component -->
		<sign-modal/>
	</div>
</template>

<script>
const FooterBar = () => import('@/components/FooterBar')
const SignModal = () => import('@/views/public/SignModal')

/**
 * Definition of Public Wrapper.
 * @name PublicWrapper
 * @class
 */
export default {
	/**
	 * @memberof PublicWrapper
	 * @name name
	 * @const {String}
	 */
	name: 'PublicWrapper',
	components: {
		FooterBar,
		SignModal,
	},
}
</script>
