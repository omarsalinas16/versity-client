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

/**
 * Definition of SpinnerButton. Loads common CSS stylesheets.
 * @name SpinnerButton
 * @class
 */
export default {
	/**
	 * @memberof SpinnerButton
	 * @name name
	 * @const {String}
	 */
	name: 'SpinnerButton',
	props: {
		/**
		 * Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. 
		 * @memberof SpinnerButton
		 * @name loading
		*/
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
