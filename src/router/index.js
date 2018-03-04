import Vue from 'vue'
import Router from 'vue-router'

const PublicWrapper = () => import('@/views/public/PublicWrapper')
const NavBar = () => import('@/components/NavBar')

const Home = () => import('@/views/public/Home')
const SignUp = () => import('@/views/public/SignUp')
const About = () => import('@/views/public/About')

const AppWrapper = () => import('@/views/app/AppWrapper')

const SignIn = () => import('@/views/app/SignIn')

const StyleTest = () => import('@/views/dev/StyleTest')

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			components: {
				nav: NavBar,
				default: PublicWrapper
			},
			children: [
				{ path: '', name: 'home', component: Home },
				{ path: 'signup', name: 'signup', component: SignUp },
				{ path: 'about', name: 'about', component: About },
			],
		},

		{
			path: '/app',
			components: {
				default: AppWrapper
			},
			children: [
				{ path: 'signin', name: 'signin', component: SignIn },
			],
		},

		{ path: '/dev', redirect: '/dev/styles'},
		{ path: '/dev/styles', name: 'styles', component: StyleTest },
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.fullPath.indexOf('app') < 0) {
			return { x: 0, y: 0 }
		}
	}
})
