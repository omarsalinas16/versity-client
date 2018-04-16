import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * This store represents the logged User data.
 */
export default new Vuex.Store({
	state: {
		firstName: '',
		lastName: '',
		username: '',
	},
	getters: {
		/**
		 * Returns the composed full name based on [firstName] and [lastName].
		 * @param {object} state - The current state of the store. 
		 */
		fullName(state) {
			return `${state.firstName} ${state.lastName}`
		}
	},
	mutations: {
		/**
		 * Sets the [firstName] value to the store.
		 * @param {object} state - The current mutable state of the store.
		 * @param {string} value - The new value of the property.
		 */
		SET_FIRST_NAME(state, value) {
			state.firstName = value
		},
		/**
		 * Sets the [lastName] value to the store.
		 * @param {object} state - The current mutable state of the store.
		 * @param {string} value - The new value of the property.
		 */
		SET_LAST_NAME(state, value) {
			state.lastName = value
		},
		/**
		 * Sets the [username] value to the store.
		 * @param {object} state - The current mutable state of the store.
		 * @param {string} value - The new value of the property.
		 */
		SET_USERNAME(state, value) {
			state.username = value
		}
	}
})
