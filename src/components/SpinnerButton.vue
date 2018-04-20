<template>
	<button class="spinner-btn btn">
		<transition name="fade" mode="out-in">
			<loading-icon v-if="loading"/>
			<span v-else><slot/></span>
		</transition>
	</button>
</template>

<script>
const LoadingIcon = () => import('vue-material-design-icons/loading.vue')

export default {
	name: 'SpinnerButton',
	props: {
		loading: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		LoadingIcon,
	},
}
</script>

<style scoped>
.spinner-btn .loading-icon {
	display: inline-block;
	animation: rotate 1000ms linear infinite;
}

@keyframes rotate {
	from { transform: rotate(0deg) }
	to { transform: rotate(360deg) }
}

</style>
