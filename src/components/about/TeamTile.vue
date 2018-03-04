<template>
	<div class="team-tile text_align--center">
		<img :src="imagePath" alt="" class="display--block object_fit--cover">
		<h3>{{ name }}</h3>
		<p class="margin--all-none">{{ title }}</p>
	</div>
</template>

<script>
export default {
	name: 'TeamTile',
	props: {
		name: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
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
