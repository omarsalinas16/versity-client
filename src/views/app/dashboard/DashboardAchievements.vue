<template>
	<div class="achievements">
		<h2>Logros</h2>
		<p v-show="achievements.length <= 0" class="text_color--medium">No has completado ningun logro aún, sigue intentandolo!</p>
	</div>
</template>

<script>
export default {
	name: 'DashboardAchievements',
	data() {
		return {
			achievements: []
		}
	},
}
</script>

<style scoped>

</style>
