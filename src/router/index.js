import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/public/Home')
const SignUp = () => import('@/views/public/SignUp')
const About = () => import('@/views/public/About')

const StyleTest = () => import('@/views/dev/StyleTest')

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', name: 'home', component: Home },
		{ path: '/signup', name: 'signup', component: SignUp },
		{ path: '/about', name: 'about', component: About },

		
		{ path: '/dev/styles', name: 'styles', component: StyleTest },
	]
})
