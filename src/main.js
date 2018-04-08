// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import router from './router'
import vmodal from 'vue-js-modal'

import es from 'vee-validate/dist/locale/es'
import VeeValidate, { Validator } from 'vee-validate';

import store from '@/stores/user-info'

Validator.localize('es', es)
Vue.use(VeeValidate)

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
