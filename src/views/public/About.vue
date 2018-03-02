<template>
	<main id="about">
		<div class="slider page-hero-height">
			<swiper :options="swiperOption">
				<swiper-slide class="slide-1 background_size--cover background_repeat--no-repeat">
					<div class="size--fill-parent container_flex--center flex_direction--row">
						<div class="grid-container padding--h-two padding--v-one text_align--center text_color--light">
							<h1>Lo que hacemos</h1>
							<h2 class="font_weight--normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium beatae officiis? Voluptate praesentium nisi eligendi, voluptates quos ullam dolorum excepturi quod deleniti expedita earum? Placeat cupiditate quam harum aperiam.</h2>						
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="slide-2 background_size--cover background_repeat--no-repeat">
					<div class="size--fill-parent container_flex--center flex_direction--row">
						<div class="grid-container padding--h-two padding--v-one text_align--center text_color--light">
							<h1>Cómo lo hacemos</h1>
							<h2 class="font_weight--normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium beatae officiis? Voluptate praesentium nisi eligendi, voluptates quos ullam dolorum excepturi quod deleniti expedita earum? Placeat cupiditate quam harum aperiam.</h2>						
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="slide-3 background_size--cover background_repeat--no-repeat">
					<div class="size--fill-parent container_flex--center flex_direction--row">
						<div class="grid-container padding--h-two padding--v-one text_align--center text_color--light">
							<h1>Quienes somos</h1>
							<h2 class="font_weight--normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium beatae officiis? Voluptate praesentium nisi eligendi, voluptates quos ullam dolorum excepturi quod deleniti expedita earum? Placeat cupiditate quam harum aperiam.</h2>						
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="slide-4 background_size--cover background_repeat--no-repeat">
					<div class="size--fill-parent container_flex--center flex_direction--row">
						<div class="grid-container padding--h-two padding--v-one text_align--center text_color--light">
							<h1>Nuestra historia</h1>
							<h2 class="font_weight--normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium beatae officiis? Voluptate praesentium nisi eligendi, voluptates quos ullam dolorum excepturi quod deleniti expedita earum? Placeat cupiditate quam harum aperiam.</h2>						
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="slide-5 background_size--cover background_repeat--no-repeat">
					<div class="size--fill-parent container_flex--center flex_direction--row">
						<div class="grid-container padding--h-two padding--v-one text_align--center text_color--light">
							<h1>Por qué lo hacemos</h1>
							<h2 class="font_weight--normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusantium beatae officiis? Voluptate praesentium nisi eligendi, voluptates quos ullam dolorum excepturi quod deleniti expedita earum? Placeat cupiditate quam harum aperiam.</h2>						
						</div>
					</div>
				</swiper-slide>

				<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
				<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
				<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
			</swiper>
		</div>

		<div class="what-is background_color--dark text_color--light">
			<span class="highlight-bar"></span>

			<div class="grid-container padding--v-two padding--h-one">
				<div class="grid-x">
					<div class="cell small-12 medium-6">
						<h1>Qué es Versity?</h1>
						<h3 class="font_weight--normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi eius aliquid vitae deleniti quia inventore placeat aut magni minima id quidem ipsa quasi nulla assumenda, ipsum eveniet ipsam molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, et.</h3>

						<a href="http://www.youtube.com" class="btn hollow hint display--inline-flex flex_direction--row align_items--center margin_top--two"><play-icon/>Mira cómo funciona</a>
					</div>
					<div class="cell small-12 medium-6">
						
					</div>
				</div>
			</div>
		</div>

		<div class="team background_color--light">
			<div class="team-container grid-container padding--all-one">
				<div class="text_align--center">
					<h2>Nuestro equipo</h2>
					<p>Creemos que una gran empresa comienza con grandes personas, donde se predica con el ejemplo.</p>
				</div>
				<div class="team-grid row display--grid justify_content--center" is="transition-group" name="fade">
						
				</div>
			</div>
		</div>
	</main>
</template>

<script>
const { swiper, swiperSlide } = require('vue-awesome-swiper')
const PlayIcon = () => import('vue-material-design-icons/play.vue')

import 'swiper/dist/css/swiper.css'

export default {
	name: 'About',
	data() {
		return {
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					delay: 6500,
					disableOnInteraction: false
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
		}
	},
	components: {
		swiper,
		swiperSlide,
		PlayIcon
	}
}
</script>

<style scoped>
#about .slider .swiper-container {
	width: 100%;
	height: 100%;
}

#about .slider .swiper-slide > div {
	background: rgba(0, 0, 0, 0.45);
}

#about .slider .slide-1 {
	background-image: url('../../assets/img/about_slide_background_2-min.jpg');
}

#about .slider .slide-2 {
	background-image: url('../../assets/img/about_slide_background_3-min.jpg');
}

#about .slider .slide-3 {
	background-image: url('../../assets/img/about_slide_background_5-min.jpg');
}

#about .slider .slide-4 {
	background-image: url('../../assets/img/about_slide_background_2-min.jpg');
}

#about .slider .slide-5 {
	background-image: url('../../assets/img/persona_banner.jpg');
}

</style>
