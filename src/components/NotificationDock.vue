<template>
	<aside id="notification-dock" class="position--fixed position--top-right background_color--dark text_color--light padding--all-one">
		<button @click="close" class="close btn transparent position--absolute position--top-right padding--all-one"><close-icon/></button>
		<h1 class="margin_top--two">Notificaciones</h1>

		<p v-if="!hasNotifications">No hay notificaciones sin leer.</p>
		
		<p v-else v-for="(notif, i) in notifications" :key="i">{{ notif }}</p>
	</aside>
</template>

<script>
import _ from 'lodash'
const CloseIcon = () => import('vue-material-design-icons/close.vue')

/**
 * Definition of NotificationDock. Loads common CSS stylesheets.
 * @name NotificationDock
 * @class
 */
export default {
	/**
	 * @memberof NotificationDock
	 * @name name
	 * @const {String}
	 */
	name: 'NotificationDock',
	methods: {
		close() {
			this.onClose(false)
		}
	},
	props: {
		/**
		 * Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. 
		 * @memberof NotificationDock
		 * @name notifications
		*/
		notifications: {
			type: Array,
			default: [],
		},
		/**
		 * @memberof NotificationDock
		 * @name onClose
		*/
		onClose: {
			type: Function,
			default: () => { },
		}
	},
	computed: {
		hasNotifications() {
			return !_.isEmpty(this.notifications)
		},
	},
	components: {
		CloseIcon,
	}
}
</script>

<style>
#notification-dock {
	height: 100vh;
	width: 300px;
	box-shadow: -2px 0 8px rgba(0, 0, 0, 0.5);
}

#notification-dock .close:hover {
	color: var(--error);
}

</style>
