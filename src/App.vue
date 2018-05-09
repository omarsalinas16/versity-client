<!--
	App.vue is the root view of the entire app.
	Its only purpose is to load all the necessary CSS styles and set the containing DOM elements.
	All the actual views are placed inside the default <router-view> while a special <router-view> named nav is used to
	allocate the navigation menus.
 -->
<template>
	<div id="app-main" class="font_family--regular background_color--light flex--column-no-wrap">
		<router-view name="nav"/>
		<router-view class="flex_grow--grow"/>
	</div>
</template>

<script>
// Sanitize CSS normalizes the look of a page across browsers.
import '@/assets/css/sanitize.css'

// Foundation is a CSS framework for fast prototyping and development, this is a custom version with most of the styles
// altered in some way or another.
import '@/assets/css/foundation.css'

// CSS native variables for easily controling colors and themes.
import '@/assets/css/variables.css'
// This is the main CSS style sheet of the app
import '@/assets/css/app.css'
// Utility.css stores useful reusable CSS classes for fast composition.
import '@/assets/css/utility.css'

// Port of animate.css for Vue transitions.
import '@/assets/css/vue2-animate.css'

/**
 * Entry point and common wrapper of the entire web application. Loads common CSS stylesheets.
 * @name App
 * @class
 */
export default {
	/**
	 * @memberof App
	 * @name name
	 * @const {String}
	 */
	name: 'App',
}
</script>

<style scoped>
#app-main {
	min-height: 100vh;
	max-width: 100vw;
}

</style>

