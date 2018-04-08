<template>
	<main id="dashboard">
		<section class="dashboard-section active-courses grid-container">
			<div class="margin_bottom--one">
				<h1 class="title display--inline-block margin_right--one">Dashboard</h1>
				<h3 class="display--inline-block font_weight--normal">Bienvenido de vuelta {{ fullName }}!</h3>
			</div>

			<div class="grid-x grid-padding-x">
				<nav class="cell medium-3 overflow--hidden">
					<router-link to="/app/active" active-class="active" class="nav-btn btn display--block">Cursos recientes</router-link>
					<router-link to="/app/saved" active-class="active" class="nav-btn btn display--block">Cursos guardados</router-link>
					<router-link to="/app/finished" active-class="active" class="nav-btn btn display--block">Cursos terminados</router-link>
					<router-link to="/app/achievements" active-class="active" class="nav-btn btn display--block">Logros</router-link>
				</nav>
				<div class="cell auto overflow--hidden">
					<transition name="fade" mode="out-in">
						<router-view/>
					</transition>
				</div>
			</div>
		</section>

		<transition name="fade">
			<section v-if="showPremiumBanner" class="grid-container margin--v-two text_align--center">
				<div class="premium-banner position--relative background_color--dark grid-container padding--all-one box-shadow">
					<button @click="dismissPremiumBanner" class="dismiss-premium-btn btn transparent position--absolute position--top-right margin--all-none padding--all-none"><close-icon/></button>
					
					<p class="text_color--light margin--all-none margin_bottom--one">Parece que aún no tienes Versity Premium. Contratalo y disfruta de grandes beneficios especiales!</p>
					<router-link to="" class="btn small hint margin--all-none">Haz click aqui!</router-link>
				</div>
			</section>
		</transition>

		<section class="dashboard-section recommended grid-container">
			<h2>Recomendaciones</h2>

			<swiper class="courses-slider flex--row-no-wrap" :options="coursesSwiperOption">
				<swiper-slide v-for="n in 8" :key="n">
					<course-tile></course-tile>
				</swiper-slide>
			</swiper>
		</section>

		<section class="dashboard-section recent grid-container">
			<h2>Añadidos recientemente</h2>

			<swiper class="courses-slider flex--row-no-wrap" :options="coursesSwiperOption">
				<swiper-slide v-for="n in 8" :key="n">
					<course-tile></course-tile>
				</swiper-slide>
			</swiper>
		</section>

		<section class="dashboard-section news grid-container">
			<h2>Noticias</h2>
		</section>
	</main>
</template>

<script scoped>
import { mapState, mapGetters } from 'vuex'

const { swiper, swiperSlide } = require('vue-awesome-swiper')
const CourseTile = () => import('@/components/CourseTile')

const CloseIcon = () => import('vue-material-design-icons/close.vue')

import 'swiper/dist/css/swiper.css'

export default {
	name: 'Dashboard',
	data() {
		return {
			hasPremium: false,
			dismissedPremium: false,

			coursesSwiperOption: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				spaceBetween: 16,
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				breakpoints: {
					1024: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
					720: {
						slidesPerView: 2,
						slidesPerGroup: 2,
					},
					480: {
						slidesPerView: 1,
						slidesPerGroup: 1,
					},
				},
			},
		}
	},
	methods: {
		dismissPremiumBanner() {
			this.dismissedPremium = true
		},
	},
	computed: {
		...mapState([
			'firstName',
			'lastName',
			'username'
		]),
		...mapGetters([
			'fullName'
		]),
		showPremiumBanner() {
			return !this.hasPremium && !this.dismissedPremium
		},
	},
	components: {
		CloseIcon,
		CourseTile,
		swiper,
		swiperSlide,
	},
}
</script>

<style>
#dashboard nav {
	border-radius: 3px;
}

#dashboard nav .nav-btn {
	margin: 0;

	color: var(--txt_dark);
	border-color: var(--medium);
	border-radius: 0;
	background: var(--midlight);
}

#dashboard nav .nav-btn:not(:last-of-type) {
	border-bottom: none;
}

#dashboard nav .nav-btn:hover, #dashboard nav .nav-btn.active {
	background: var(--light);
}

#dashboard .dashboard-section {
	margin-top: 1rem;
	margin-bottom: 3rem;
}

#dashboard .premium-banner {
	border-radius: 3px;
}

#dashboard .premium-banner .dismiss-premium-btn {
	padding: 0.5rem;
	opacity: 0.6;

	transition-property: opacity;
}

#dashboard .premium-banner .dismiss-premium-btn:hover {
	opacity: 1;
}

</style>
