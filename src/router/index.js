/**
 * Module that inport every route of the page. 
 * @module 
 */

/**
 * The Vue instance
 * @const
 */
import Vue from 'vue'

/**
 * The Vue instance
 * @const
 */
import Router from 'vue-router'

// Public views.
/**
 * The public wrapper view
 * @const
 */
const PublicWrapper = () => import('@/views/public/PublicWrapper')

/**
 * The Navigation bar view
 * @const
 */
const NavBar = () => import('@/components/NavBar')

/**
 * The home view
 * @const
 */
const Home = () => import('@/views/public/Home')

/**
 * The about view
 * @const
 */
const About = () => import('@/views/public/About')

/**
 * The course view
 * @const
 */
const Course = () => import('@/views/public/Course')

// Web-app views.
/**
 * The app wrapper view
 * @const
 */
const AppWrapper = () => import('@/views/app/AppWrapper')

/**
 * The app Navigation bar view
 * @const
 */
const AppNavBar = () => import('@/components/AppNavBar')

// Main dashboard sections.
/**
 * The dashboard view
 * @const
 */
const Dashboard = () => import('@/views/app/Dashboard')

/**
 * The dashboard avtive part view
 * @const
 */
const DashboardActive = () => import('@/views/app/dashboard/DashboardActive')

/**
 * The dashboard save part view
 * @const
 */
const DashboardSaved = () => import('@/views/app/dashboard/DashboardSaved')

/**
 * The dashboard finished part view
 * @const
 */
const DashboardFinished = () => import('@/views/app/dashboard/DashboardFinished')

/**
 * The dashboard achievements part view
 * @const
 */
const DashboardAchievements = () => import('@/views/app/dashboard/DashboardAchievements')

/**
 * The profile view
 * @const
 */
const Profile = () => import('@/views/app/Profile')

// Dev views.
// TODO: Remove for production.
/**
 * The Style test view
 * @const
 */
const StyleTest = () => import('@/views/dev/StyleTest')

Vue.use(Router)

/**
 * Definition of all the routes that the page uses.
 * @name routes
 * @class
 * @property {String} path The string of the path
 * @property {String[]} children  Children paths
 */
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
				{ path: 'courses/:slug', name: 'course', component: Course }
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
						{ path: 'active', name: 'app-home', component: DashboardActive },
						{ path: 'saved', name: 'app-home-saved', component: DashboardSaved },
						{ path: 'finished', name: 'app-home-finished', component: DashboardFinished },
						{ path: 'achievements', name: 'app-home-achievements', component: DashboardAchievements },
						{ path: '', redirect: 'active' },
					],
				},
				{ path: 'profile', component: Profile },
				{ path: '*', redirect: '' },
			],
		},

		{ path: '/dev', redirect: '/dev/styles'},
		{ path: '/dev/styles', name: 'styles', component: StyleTest },

		{ path: '*', redirect: '/' },
	],
	/**
	 * This is a patch so the public views act more like a normal website, that is so when changing pages the scroll level
	 * gets resetted to the top.
	 */
	scrollBehavior(to, from, savedPosition) {
		if (to.fullPath.indexOf('app') < 0) {
			return { x: 0, y: 0 }
		}
	}
})
