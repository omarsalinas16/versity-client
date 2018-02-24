import Vue from 'vue'
import Router from 'vue-router'

import Public from '@/views/public/Public'
import Home from '@/views/public/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			exact: true,
			redirect: '/public'
		},
		{
			path: '/public',
			component: Public,
			children: [
				{
					path: '/',
					name: 'Home',
					component: Home
				}
			]
		}
	]
})
