import Vue from 'vue'
import Router from 'vue-router'

const PublicWrapper = () => import('@/views/public/PublicWrapper')
const NavBar = () => import('@/components/NavBar')

const Home = () => import('@/views/public/Home')
const About = () => import('@/views/public/About')

const AppWrapper = () => import('@/views/app/AppWrapper')
const AppNavBar = () => import('@/components/AppNavBar')

const Dashboard = () => import('@/views/app/Dashboard')

const StyleTest = () => import('@/views/dev/StyleTest')

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			components: {
				nav: NavBar,
				default: PublicWrapper,
			},
			children: [
				{ path: '', name: 'home', component: Home },
				{ path: 'about', name: 'about', component: About },
			],
		},

		{
			path: '/app',
			components: {
				nav: AppNavBar,
				default: AppWrapper,
			},
			children: [
				{
					path: '',
					component: Dashboard,
					children: [
						{ path: 'active', name: 'app-home', component: null },
						{ path: 'saved', name: 'app-home-saved', component: null },
						{ path: 'finished', name: 'app-home-finished', component: null },
						{ path: 'achievements', name: 'app-home-achievements', component: null },
						{ path: '', redirect: 'active' },
					],
				},
				{ path: '*', redirect: '' },
			],
		},

		{ path: '/dev', redirect: '/dev/styles'},
		{ path: '/dev/styles', name: 'styles', component: StyleTest },

		{ path: '*', redirect: '/' },
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.fullPath.indexOf('app') < 0) {
			return { x: 0, y: 0 }
		}
	}
})
