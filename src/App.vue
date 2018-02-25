<template>
	<div class="background_color--dark font_family--regular">
		<nav-bar/>
		<router-view/>
		<footer-bar/>
	</div>
</template>

<script>
import '@/assets/css/sanitize.css'

import '@/assets/css/foundation.min.css'

import '@/assets/css/variables.css'
import '@/assets/css/app.css'
import '@/assets/css/utility.css'

const FooterBar = () => import('@/components/FooterBar')
const NavBar = () => import('@/components/NavBar')

export default {
	name: 'App',
	components: {
		FooterBar,
		NavBar
	}
}
</script>
