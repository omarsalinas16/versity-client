<template>
	<div class="background_color--dark font_family--regular">
		<router-view name="nav"/>
		<router-view/>
	</div>
</template>

<script>
import '@/assets/css/sanitize.css'

import '@/assets/css/foundation.css'

import '@/assets/css/variables.css'
import '@/assets/css/app.css'
import '@/assets/css/utility.css'

export default {
	name: 'App',
}
</script>
