<template>
	<div class="active-courses">
		<h2>Cursos activos</h2>
		<p v-show="courses.length <= 0" class="text_color--medium">
			No estás suscrito a ningun curso, visita nuestro <router-link to="">catalogo de cursos</router-link>.
		</p>
	</div>
</template>

<script>
export default {
	name: 'DashboardActive',
	data() {
		return {
			courses: []
		}
	},
}
</script>

<style scoped>

</style>
