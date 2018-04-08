<template>
	<div class="saved-courses">
		<h2>Cursos guardados</h2>
		<p v-show="courses.length <= 0" class="text_color--medium">
			No estás suscrito a ningun curso, visita nuestro <router-link to="">catalogo de cursos</router-link>.
		</p>
	</div>
</template>

<script>
export default {
	name: 'DashboardSaved',
	data() {
		return {
			courses: []
		}
	},
}
</script>

<style scoped>

</style>
