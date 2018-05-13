<template>
	<main id="course" class="background_color--light">

		<div class="grid-container">
			<header class="grid-x margin_bottom--two">
				<div class="cell small-12 large-8">
					<h1 v-show="title" class="margin_bottom--none">{{ title }}</h1>
					<p v-show="authorName" class="margin_top--none margin_bottom--half">
						Presentado por: <b><a href="">{{ authorName }}</a></b>
					</p>

					<div v-show="categories && categories.length > 0" class="course-categories">
						<span v-for="(c, i) in categories" :key="i" class="display--inline-block background_color--midlight font_weight--bold">{{ c }}</span>
					</div>
				</div>
			</header>

			<section class="margin_bottom--two">
				<vue-d-player ref="player" :options="videoOptions"/>
			</section>

			<section class="grid-x">
				<article class="cell small-12 large-8">
					<h2>Introducción</h2>
					<p>{{ description }}</p>
				</article>
			</section>
		</div>

	</main>
</template>

<script>
import { get } from '@/utils/api'

import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'

/**
 * Definition courses parameters. Loads common CSS stylesheets.
 * @name Course
 * @class
 * @property {String} tile The title string 
 * @property {String} firstName The first name string 
 * @property {String} lastName The last name string 
 * @property {String[]} categories The categories strings 
 * @property {String} description The description string 
 * @property {String[]} video The video strings 
 * @property {String} url The url string 
 * @property {String} pic The video string 
 * @property {boolean} autoplay Defines a boolean
 */
export default {
	/**
	 * @memberof Course
	 * @name name
	 * @const {String}
	 */
	name: 'Course',
	data() {
		return {
			title: '',
			firstName: '',
			lastName: '',
			categories: [],
			description: '',

			videoOptions: {
				video: {
					url: '',
					pic: ''
				},
				autoplay: true
			}
		}
	},
	beforeMount() {
		this.loadCourse()
	},
	methods: {
		/**
		 * This load all the courses availables
		 * @function
		 * @name loadCourse
		 */
		loadCourse() {
			const slug = this.$route.params.slug

			if (slug) {
				get(`course/${slug}`)
					.then(res => {
						if (res.status === 200 && res.data) {
							this.setData(res.data)
						} else {
							this.onLoadError()
						}
					})
					.catch(err => {
						if (err) this.onLoadError(err)
					})
			}
		},
		/**
		 * This function is called when is an error while loading courses
		 * @function
		 * @name onLoadError
		 */
		onLoadError(err) {
			console.error(err)
			this.setData()

			this.$router.go(-1)
		},
		/**
		 * This function places all the data taken before
		 * @function
		 * @name setData
		 */
		setData(data) {
			console.log(data)

			this.title = data.title || ''
			this.firstName = data._author.first_name || ''
			this.lastName = data._author.last_name || ''
			this.categories = data.categories || []
			this.description = data.description || ''

			const resources = data.resources
			if (resources && resources.length > 0) {
				const res = resources[0]

				if (res && res.type == 'video') {
					this.$refs.player.dp.switchVideo({
						url: res.mediaURL,
						pic: data.thumbnailURL
					})
				}
			}
		}
	},
	computed: {
		authorName() {
			return `${this.firstName} ${this.lastName}`
		}
	},
	components: {
		VueDPlayer
	}
}
</script>

<style>
#course {
	padding-top: calc(var(--nav-height) + 2rem);
}

@media screen and (min-width: 40em) {
	#course {
		padding-top: calc(var(--nav-height) + 3rem);
	}
}

#course .course-categories span {
	padding: 2px 6px;
	border-radius: 3px;
	margin-right: 0.5em;
	font-size: 12px;
}

#course .media-container .video {
	max-width: 100%;
	height: auto;
}
</style>
