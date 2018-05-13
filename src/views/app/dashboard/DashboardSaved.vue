<template>
	<div class="saved-courses">
		<h2>Cursos guardados</h2>
		<p v-show="courses.length <= 0" class="text_color--medium">
			No estás suscrito a ningun curso, visita nuestro <router-link to="">catalogo de cursos</router-link>.
		</p>
	</div>
</template>

<script>

/**
 * Definition of DashboardSaved. 
 * @name DashboardSaved
 * @class
 * @property {String[]} courses Saved Courses
 */
export default {
	/**
	 * @memberof DashboardSaved
	 * @name name
	 * @const {String}
	 */
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
