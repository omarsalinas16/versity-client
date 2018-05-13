<template>
	<div id="app-wrapper" class="background_color--light">
		<router-view/>
		<footer-bar :class="'top-border'"/>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import { get } from '@/utils/api'

const FooterBar = () => import('@/components/FooterBar')

/**
 * Definition of AppWrapper. 
 * @name AppWrapper
 * @class
 */
export default {
	/**
	 * @memberof AppWrapper
	 * @name name
	 * @const {String}
	 */
	name: 'AppWrapper',
	beforeMount() {
		this.getUserInfo()
	},
	methods: {
		...mapMutations([
			'SET_FIRST_NAME',
			'SET_LAST_NAME',
			'SET_USERNAME',
		]),
		/**
		 * Receive user info.
		 * @function
		 * @name setUserInfo
		 * @property {Function} SET_FIRST_NAME Sets the [firstName] value to the store
	     * @property {Function} SET_LAST_NAME Sets the [lastName] value to the store
	     * @property {Function} SET_USERNAME Sets the [username] value to the store
		 */
		setUserInfo(firstName, lastName, username) {
			this.SET_FIRST_NAME(firstName)
			this.SET_LAST_NAME(lastName)
			this.SET_USERNAME(username)
		},
		/**
		 * Get the user info.
		 * @function
		 * @name getUserInfo
		 */
		getUserInfo() {
			get('user/status')
				.then(res => {
					const { data, status } = res

					console.log(data, status)

					if (status === 200 && data.status) {
						const { user } = data
						this.setUserInfo(user.first_name, user.last_name, user.username)
					} else {
						console.log('fail')
						this.$router.push({ path: '/' })
					}
				})
				.catch(err => {
					if (err) this.$router.push({ path: '/' })
				})
		},
	},
	components: {
		FooterBar,
	},
}
</script>
