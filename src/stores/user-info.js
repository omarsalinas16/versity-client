import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * This store represents the logged User data.
 * @name stores/UserInfo
 * @class 
 */
export default new Vuex.Store({
	/**
	 * @name stores/UserInfo.state
	 * @type {Object}
	 * @property {String} firstName The User's first name
	 * @property {String} lastName The User's last name
	 * @property {String} username The User's username
	 */
	state: {
		firstName: '',
		lastName: '',
		username: '',
	},
	getters: {
		fullName(state) {
			return `${state.firstName} ${state.lastName}`
		}
	},
	/**
	 * @name stores/UserInfo~mutations
	 * @type {Object}
	 * @property {Function} SET_FIRST_NAME Sets the [firstName] value to the store
	 * @property {Function} SET_LAST_NAME Sets the [lastName] value to the store
	 * @property {Function} SET_USERNAME Sets the [username] value to the store
	 */
	mutations: {
		SET_FIRST_NAME(state, value) {
			state.firstName = value
		},
		SET_LAST_NAME(state, value) {
			state.lastName = value
		},
		SET_USERNAME(state, value) {
			state.username = value
		}
	}
})
