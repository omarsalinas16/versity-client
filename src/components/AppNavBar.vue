<template>
	<aside id="app-navbar" class="nav-bar flex--row-no-wrap align_items--center background_color--midlight padding--v-one padding--h-two">
		<router-link to="/app" class="logo height--parent margin_right--two"><img src="@/assets/img/icon_solid_black.png" alt="Versity logo"></router-link>

		<input type="text" name="navbar-search" v-model="search" @keyup.enter="onSearch" class="search flex_grow--not-grow show-for-large input-icon margin--all-none background_color--light" placeholder="Busca cursos!">

		<div class="account flex--row-no-wrap align_items--center margin_left--auto">
			<button @click="notifDockActive = !notifDockActive" class="notif-btn btn round medium margin--all-none">
				<span class="position--relative">
					<bell-outline-icon/>
					<transition name="fade">
						<span v-if="hasNotifications" class="notif-point display--block position--absolute position--top-right background_color--hint"/>
					</transition>
				</span>
			</button>

			<user-menu/>

			<router-link to="" class="btn small show-for-medium margin--all-none margin_left--one">Sé premium</router-link>
		</div>

		<transition name="fadeRight">
			<notification-dock v-show="notifDockActive" :notifications="notifications" :onClose="a => notifDockActive = a"/>
		</transition>
	</aside>
</template>

<script>
const UserMenu = () => import('@/components/UserMenu')
const NotificationDock = () => import('@/components/NotificationDock')
const BellOutlineIcon = () => import('vue-material-design-icons/bell-outline.vue')

export default {
	name: 'AppNavBar',
	data() {
		return {
			search: '',
			notifDockActive: false,
			notifications: [
				"Got a meme"
			]
		}
	},
	methods: {
		onSearch() {
			this.$router.push({ path: 'courses', query: { keywords: this.search }})
		}
	},
	computed: {
		hasNotifications() {
			return this.notifications && this.notifications.length > 0
		},
	},
	components: {
		BellOutlineIcon,
		NotificationDock,
		UserMenu,
	},
}
</script>

<style scoped>
#app-navbar .notif-btn {
	width: 32px;
	height: 32px;
	padding: 0;
}

#app-navbar .notif-btn .notif-point {
	width: 8px;
	height: 8px;

	border-radius: 50%;
}

#app-navbar .search {
	flex: 0 1;

	min-width: 350px;

	background-image: url('../assets/svg/search_icon_black.svg');
}

</style>
