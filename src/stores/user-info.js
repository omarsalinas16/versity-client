import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
