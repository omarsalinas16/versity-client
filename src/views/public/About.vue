<template>
	<main id="about">
		<section class="slider page-hero">
			<swiper :options="swiperOption">
				<swiper-slide class="slide-1 background_size--cover background_repeat--no-repeat">
					<div class="page-hero-backdrop container_flex--center flex_direction--row">
						<div class="grid-container padding--h-two padding--v-one text_align--center text_color--light">
							<h1>Lo que hacemos</h1>
							<h2 class="font_weight--normal">Nosotros en Versity seleccionamos y ofrecemos una gran colección de cursos interactivos en linea. Es una plataforma que sigue la filosofía de compartir nuestro conocimiento para mejorar como comunidad.</h2>						
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="slide-2 background_size--cover background_repeat--no-repeat">
					<div class="page-hero-backdrop container_flex--center flex_direction--row">
						<div class="grid-container padding--h-two padding--v-one text_align--center text_color--light">
							<h1>Cómo lo hacemos</h1>
							<h2 class="font_weight--normal">En Versity todos puedes compartir su experiencia y crear cursos. Además, nuestro equipo se dedica a contactar con notables profesionistas y profesores de instituciones importantes para asegurar un estandar de calidad en los cursos ofertados.</h2>						
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="slide-3 background_size--cover background_repeat--no-repeat">
					<div class="page-hero-backdrop container_flex--center flex_direction--row">
						<div class="grid-container padding--h-two padding--v-one text_align--center text_color--light">
							<h1>Quienes somos</h1>
							<h2 class="font_weight--normal">Somos una comunidad internacional con una extensa cantidad de afiliados alrededor del mundo hispanohablante. Todos con el deseo de enseñar y aprender por igual.</h2>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="slide-4 background_size--cover background_repeat--no-repeat">
					<div class="page-hero-backdrop container_flex--center flex_direction--row">
						<div class="grid-container padding--h-two padding--v-one text_align--center text_color--light">
							<h1>Nuestra historia</h1>
							<h2 class="font_weight--normal">Versity comenzó como un pequeño equipo de desarrolladores originarios de México.</h2>			
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="slide-5 background_size--cover background_repeat--no-repeat">
					<div class="page-hero-backdrop container_flex--center flex_direction--row">
						<div class="grid-container padding--h-two padding--v-one text_align--center text_color--light">
							<h1>Por qué lo hacemos</h1>
							<h2 class="font_weight--normal">Cuando comenzó este proyecto no existian servicios de cursos de calidad para la comunidad hispanohablante que a su vez ofreciera estos servicios de forma gratuita y bajo un enfoque de comunidad en el que fueran los mismos usuarios quienes se ayudaran entre si. Esta fue la meta de Versity, brindar una plataforma que permitiera el autoaprendizaje de calidad en español.</h2>						
						</div>
					</div>
				</swiper-slide>

				<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
				<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
				<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
			</swiper>
		</section>

		<section class="statistics background_color--light text_color--medium text_align--center">
			<div class="grid-container padding--h-one">
				<div class="grid-x">
					<div class="cell small-12 medium-4">
						<img src="@/assets/img/connect_with_peers.png" alt="" class="display--block margin--h-auto">
						<h2>9+ Millones</h2>
						<h3 class="margin--all-none font_weight--normal">de estudiantes</h3>
					</div>
					<div class="cell small-12 medium-4">
						<img src="@/assets/img/designer_mug.png" alt="" class="display--block margin--h-auto">
						<h2>9999+ Instructores</h2>
						<h3 class="margin--all-none font_weight--normal">asociados</h3>
					</div>
					<div class="cell small-12 medium-4">
						<img src="@/assets/img/future_proof.png" alt="" class="display--block margin--h-auto">
						<h2>9999+ Cursos</h2>
						<h3 class="margin--all-none font_weight--normal">diversos</h3>
					</div>
				</div>
			</div>
		</section>

		<section class="what-is background_color--dark text_color--light">
			<span class="highlight-bar"></span>

			<div class="grid-container padding--v-two padding--h-one">
				<div class="grid-x">
					<div class="cell small-12 medium-6">
						<h1>Qué es Versity?</h1>
						<h3 class="font_weight--normal">Descubre cómo es que Versity ofrece sus cursos, cómo puedes aprender de profesionistas y profesores reales, además de con otros compañeros; ó como puedes obtener ingresos adicionales siendo un instructor afiliado.</h3>

						<a href="http://www.youtube.com" class="btn hollow hint display--inline-flex flex_direction--row align_items--center margin_top--two"><play-icon/>Mira cómo funciona</a>
					</div>
					<div class="cell small-12 medium-6">
						
					</div>
				</div>
			</div>
		</section>

		<section class="team background_color--light">
			<div class="team-container grid-container padding--h-one padding--v-two">
				<div class="text_align--center">
					<h2>Nuestro equipo</h2>
					<p>Creemos que una gran empresa comienza con grandes personas, donde se predica con el ejemplo.</p>
				</div>
				<div class="team-grid row display--grid justify_content--center">
					<team-tile v-for="(p, i) in team" :key="i" :name="p.name" :title="p.title" />
				</div>
			</div>
		</section>
	</main>
</template>

<script>
const { swiper, swiperSlide } = require('vue-awesome-swiper')
const TeamTile = () => import('@/components/about/TeamTile')
const PlayIcon = () => import('vue-material-design-icons/play.vue')

import 'swiper/dist/css/swiper.css'

export default {
	name: 'About',
	data() {
		return {
			team: [
				{ name: 'Omar Salinas', title: 'CEO', imagePath: '' },
				{ name: 'Jesus Moya', title: 'Lead Marketing', imagePath: '' },
				{ name: 'Pablo Garcia', title: 'Sysops', imagePath: '' },
				{ name: 'John Doe', title: 'Placeholder', imagePath: '' },
				{ name: 'John Doe', title: 'Placeholder', imagePath: '' },
				{ name: 'John Doe', title: 'Placeholder', imagePath: '' },
			],
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 0,
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
		TeamTile,
		PlayIcon
	}
}
</script>

<style scoped>
#about .slider .swiper-container {
	width: 100%;
	height: 100%;
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

#about .statistics .grid-container {
	padding-top: 5rem;
	padding-bottom: 4rem;
}

#about .team .team-grid {
	grid-gap: 2rem 1rem;
	grid-template-columns: auto;
}

@media screen and (min-width: 40em) {
	#about .team .team-grid {
		grid-template-columns: repeat(2, auto);
	}
}

@media screen and (min-width: 64em) {
	#about .team .team-grid {
		grid-template-columns: repeat(3, auto);
	}
}

</style>
