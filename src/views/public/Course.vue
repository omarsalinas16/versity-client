<template>
	
</template>

<script>
import { get } from '@/utils/api'

export default {
	name: 'Course',
	data() {
		return {
			course: { }
		}
	},
	beforeMount() {
		const slug = this.$route.params.slug
		console.log(slug)

		if (slug) {
			get(`course/${slug}`)
				.then(res => {
					if (res.status === 200 && res.data) {
						console.log(res.data)
					}
				})
				.catch(err => {
					if (err) {
						console.error(err)
						this.course = {}
					}
				})
		}
	}
}
</script>

<style>

</style>
