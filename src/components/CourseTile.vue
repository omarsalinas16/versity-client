<template>
	<div class="course-tile">
		<router-link :to="url" class="display--inline-block thumbnail width--parent">
			<img :src="thumbnailPath" alt="" class="display--block object_fit--cover">
		</router-link>
		<div class="info display--flex flex_direction--row flex_wrap--no-wrap justify_content--space-between text_color--medium">
			<p v-if="studentsCount" class="margin--all-none">{{ formattedStudents }} estudiantes</p>
			<p v-if="duration" class="margin--all-none">{{ formattedDuration }}</p>
		</div>
		<div class="details">
			<router-link :to="url" class="title display--block font_weight--bold text_color--dark onHover-text_color--medium">{{ title }}</router-link>
			<router-link :to="authorUrl" class="author margin--all-none text_color--dark onHover-text_color--hint">{{ author }}</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CourseTile',
	props: {
		url: {
			default: 'http://google.com',
			type: String,
		},
		authorUrl: {
			default: 'http://google.com',
			type: String,
		},
		thumbnailPath: {
			default: 'http://via.placeholder.com/210x140',
			type: String,
		},
		studentsCount: {
			default: 9999,
			type: Number,
		},
		duration: {
			default: 90,
			type: Number,
		},
		title: {
			default: 'Sample Title: How to write placeholder text',
			type: String,
		},
		author: {
			default: 'Nicholas Cage',
			type: String,
		},
	},
	computed: {
		formattedStudents() {
			return this.studentsCount.toLocaleString()
		},
		formattedDuration() {
			const hours = Math.floor(this.duration / 60)
			const minutes = Math.floor(this.duration % 60)

			const hoursString = hours ? hours.toString().padStart(2, '0') + 'h ' : ''
			return hoursString + minutes.toString().padStart(2, '0') + 'm'
		}
	}
}
</script>

<style scoped>
.course-tile {
	width: auto;
}

@media screen and (min-width: 40em) {
	.course-tile {
		width: 210px;
	}
}

.course-tile .thumbnail img {
	width: 100%;
	height: 210px;
}

@media screen and (min-width: 40em) {
	.course-tile .thumbnail img {
		width: 210px;
		height: 140px;
	}
}

.course-tile > .info {
	font-size: 13px;

	margin: 0.4rem 0;
}

.course-tile > .details > .title {
	margin: 0 0 0.5rem;
}

</style>
