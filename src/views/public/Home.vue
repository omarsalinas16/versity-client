<!--
	Home.vue is the landing page of the site, here the most relevant and eye-catching informations is placed as well as
	direct links to the importat parts of the site.
-->
<template>
	<main id="home">
		<section class="persona page-hero background_size--cover background_repeat--no-repeat">
			<div class="page-hero-backdrop container_flex--center flex_direction--row">
				<div class="hero padding--all-one text_align--center text_color--light">
					<h1>Encuentra tu camino</h1>
					<h2 class="font_weight--normal">Miles de cursos por descubir,<br>miles de cosas por aprender</h2>
					
					<button @click="openSignModal(true)" class="btn gradient">Empieza hoy</button>
				</div>
			</div>
		</section>

		<section class="courses background_color--light">
			<div class="courses-container grid-container padding--all-one">
				<div class="text_align--center">
					<h2>Disfruta de una gran colección de temas diferentes, gratis</h2>
					<p>Descubre nuevos hobbies, aprende exactamente lo que buscas y cuando quieras</p>
				</div>
				<nav class="course-categories position--relative margin_bottom--one flex--row-no-wrap">
					<button v-for="(c, i) in courseCategories" :key="i" @click="onCategoryClicked(c.keyword, $event)" :keyword="c.keyword" class="btn transparent margin--all-none text_color--hint">{{ c.name }}</button>
				</nav>
				<div class="course-grid row display--grid justify_content--center" is="transition-group" name="fade">
						<course-tile v-for="n in 8" :key="n"></course-tile>
				</div>
			</div>
		</section>

		<section class="premium-banner background_color--dark text_color--light">
			<span class="highlight-bar"></span>
			<div class="grid-container">
				<div class="grid-x">
					<div class="cell small-12 medium-6 padding--v-two">
						<h2 class="font_weight--normal">Obtén acceso a cursos especiales,<br/>elimina la publicidad<br/> y más</h2>
						<router-link to="" class="btn hollow hint margin_top--two">Sé premium</router-link>
					</div>
					<div class="premium-banner-img cell small-12 medium-6 background_size--cover background_repeat--no-repeat"></div>
				</div>
			</div>
		</section>

		<section class="why-us background_color--light text_align--center">
			<div class="grid-container padding--v-two padding--h-one">
				<h2 class="margin_bottom--two">Por qué Versity?</h2>
				
				<div class="grid-x">
					<div class="cell small-12 medium-4">
						<img src="@/assets/img/connect_with_peers.png" alt="" class="display--block margin--h-auto">
						<h3>Conecta con tus compañeros</h3>
						<p>Comparte tu trabajo y tu conocimiento con la comunidad de Versity.</p>
					</div>
					<div class="cell small-12 medium-4">
						<img src="@/assets/img/designer_mug.png" alt="" class="display--block margin--h-auto">
						<h3>Aprende con la práctica</h3>
						<p>Practica lo que aprendes con nuestros cursos interactivos.</p>
					</div>
					<div class="cell small-12 medium-4">
						<img src="@/assets/img/future_proof.png" alt="" class="display--block margin--h-auto">
						<h3>Piensa a futuro</h3>
						<p>Mantente en la punta del conocimiento con nuestros expertos instructores.</p>
					</div>
				</div>
			</div>
		</section>

		<section class="teachers container_flex--center flex_direction--row background_size--cover background_repeat--no-repeat text_color--light text_align--center">
			<div class="padding--all-one">
				<h1>Sé un instructor afiliado</h1>
				<h2 class="font_weight--normal">Gana dinero. Comparte tu conocimiento. Ayuda a la comunidad</h2>

				<router-link to="" class="btn gradient">Más información</router-link>
			</div>
		</section>

		<section class="sign-remind background_color--dark text_color--light text_align--center">
			<span class="highlight-bar"></span>

			<div class="padding--all-one">
				<h3 class="display--inline-block margin--all-none margin_right--one font_weight--normal">Desafia tus habilidades. Aprende algo nuevo. Consigue ayuda.</h3>
				<button @click="openSignModal(true)" class="btn small display--inline-block margin--all-none">Regístrate</button>
			</div>
		</section>
		
	</main>
</template>

<script>
const CourseTile = () => import('@/components/CourseTile')

export default {
	name: 'Home',
	data() {
		return {
			courseCategories: [
				{ name: 'Software', keyword: 'software' },
				{ name: 'Diseño', keyword: 'design' },
				{ name: 'Matemáticas', keyword: 'maths' },
				{ name: 'Química', keyword: 'chemistry' },
			]
		}
	},
	methods: {
		onCategoryClicked(keyword, e) {
			// TODO: The idea here is that when a category button is clicked a list of the top n (probably 8) most recent
			// courses from that category is requested from the API.
			console.log(keyword)
		},
		openSignModal(onSignup) {
			// Open the SignModal.vue view and set the boolean parameter onSignup so the modal knows what subcomponent to
			// display.
			this.$modal.show('sign-modal', { onSignup: onSignup })
		}
	},
	components: {
		CourseTile
	}
}
</script>

<style scoped>
#home .persona {
	background-image: url('../../assets/img/persona_banner.jpg');
}

#home .courses .course-categories {
	overflow-x: auto;

	padding: 1rem;

	justify-content: flex-start;
}

@media screen and (min-width: 40em) {
	#home .courses .course-categories {
		padding: 0;

		justify-content: center;
	}
}

#home .courses .courses-container {
	padding-bottom: 3rem;
}

#home .courses .course-grid {
	grid-gap: 2rem 1rem;
	grid-template-columns: repeat(auto-fill, minmax(auto, 210px));
}

#home .premium-banner .premium-banner-img {
	background-image: url('../../assets/img/premium_banner.jpg');
}

#home .premium-banner .premium-banner-img::before {
	display: block;

	width: 100%;
	height: 100%;

	content: '';

	background: linear-gradient(to right, rgba(34, 34, 34, 1) 5%,rgba(34, 34, 34, 0) 35%,rgba(34, 34, 34, 0) 65%,rgba(34,34, 34, 1) 95%);
}

#home .teachers {
	height: 420px;

	background-image: url('../../assets/img/teachers_hero.png');
	background-position: center;
}

</style>
