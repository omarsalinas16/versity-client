/**
 * This is the entry point of the application, here Vue is loaded, configured and mounted on a root DOM element of id
 * app. VueValidate is used for form and input validation, Vuex is used as a state manager and immutable data store.
 * @module main
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/**
 * The Vue instance
 * @const
 */
import Vue from 'vue'

/**
 * The root view of the entire application
 * @const
 */
import App from './App'

/**
 * For handling clicks outside an entity
 * @const
 */
import vClickOutside from 'v-click-outside'

/**
 * Vue router for navigating in a one-page application
 * @const
 */
import router from './router'

/**
 * For displaying modals and popups
 * @const
 */
import vmodal from 'vue-js-modal'

import es from 'vee-validate/dist/locale/es'
import VeeValidate, { Validator } from 'vee-validate';

import store from '@/stores/user-info'

// Click outside event
Vue.use(vClickOutside)

// VeeValidate initialization, set output messages to spanish.
Validator.localize('es', es)
Vue.use(VeeValidate)

// VueModal initialization.
Vue.use(vmodal, {
	dialog: true,
	dynamic: true,
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
})
