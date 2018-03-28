<template>
	<div id="app-main" class="font_family--regular background_color--light flex--column-no-wrap">
		<router-view name="nav"/>
		<router-view class="flex_grow--grow"/>
	</div>
</template>

<script>
import '@/assets/css/sanitize.css'

import '@/assets/css/foundation.css'

import '@/assets/css/variables.css'
import '@/assets/css/app.css'
import '@/assets/css/utility.css'

import '@/assets/css/vue2-animate.css'

export default {
	name: 'App',
}
</script>

<style scoped>
#app-main {
	min-height: 100vh;
	max-width: 100vw;
}

</style>

