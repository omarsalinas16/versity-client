<template>
	<div class="team-tile text_align--center">
		<img :src="imagePath" alt="" class="display--block object_fit--cover">
		<h3>{{ name }}</h3>
		<p class="margin--all-none">{{ title }}</p>
	</div>
</template>

<script>

/**
 * Common wrapper of the team tile. Loads common CSS stylesheets.
 * @name TeamTile
 * @class
 */
export default {
	/**
	 * @memberof TeamTile
	 * @name name
	 * @const {String}
	 */
	name: 'TeamTile',
	props: {
		/**
		 * Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. 
		 * @memberof TeamTile
		 * @name name
		*/
		name: {
			type: String,
			required: true,
		},
		/**
		 * @memberof TeamTile
		 * @name title
		*/
		title: {
			type: String,
			required: true,
		},
		/**
		 * @memberof TeamTile
		 * @name imagePath
		*/
		imagePath: {
			default: 'http://via.placeholder.com/210x140',
			type: String,
		}
	}
}
</script>

<style scoped>
.team-tile {
	width: 210px;
}

.team-tile > img {
	width: 210px;
	height: 140px;
}

</style>
