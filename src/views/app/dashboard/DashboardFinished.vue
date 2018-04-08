<template>
	<div class="finished-courses">
		<h2>Cursos terminados</h2>
		<p v-show="courses.length <= 0" class="text_color--medium">
			No has completado ningun curso aún. <router-link to="/app/active">Ir a mis cursos</router-link>.
		</p>
	</div>
</template>

<script>
export default {
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
