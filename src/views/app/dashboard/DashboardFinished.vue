<template>
	<div class="finished-courses">
		<h2>Cursos terminados</h2>
		<p v-show="courses.length <= 0" class="text_color--medium">
			No has completado ningun curso aún. <router-link to="/app/active">Ir a mis cursos</router-link>.
		</p>
	</div>
</template>

<script>

/**
 * Definition of DashboardFinished. 
 * @name DashboardFinished
 * @class
 * @property {String[]} courses Finishied courses
 */
export default {
	/**
	 * @memberof DashboardFinished
	 * @name name
	 * @const {String}
	 */
	name: 'DashboardFinished',
	data() {
		return {
			courses: []
		}
	},
}
</script>

<style scoped>

</style>
