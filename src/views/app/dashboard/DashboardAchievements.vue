<template>
	<div class="achievements">
		<h2>Logros</h2>
		<p v-show="achievements.length <= 0" class="text_color--medium">No has completado ningun logro aún, sigue intentandolo!</p>
	</div>
</template>

<script>

/**
 * Definition of Achievements Dashboard.
 * @name DashboardAchievements
 * @class
 * @property {String[]} achievements Achievements strings 
 */
export default {
	/**
	 * @memberof DashboardAchievements
	 * @name name
	 * @const {String}
	 */
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
