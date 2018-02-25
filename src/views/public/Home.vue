<template>
	<main id="home">
		<div class="persona page-hero-height background_size--cover background_repeat--no-repeat container_flex--center flex_direction--row">
			<div class="hero padding--all-one text_align--center text_color--light">
				<h1>Encuentra tu camino</h1>
				<p>Miles de cursos por descubir,<br>miles de cosas por aprender</p>
				
				<router-link to="/signup" class="btn background_color--gradient text_color--light onHover-text_color--light font_weight--bold">Empieza hoy</router-link>
			</div>
		</div>

		<div class="courses background_color--light">
			<div class="courses-container grid-container padding--all-one">
				<div class="text_align--center">
					<h2>Disfruta de una gran colección de temas diferentes, gratis</h2>
					<p>Descubre nuevos hobbies, aprende exactamente lo que buscas y cuando quieras</p>
				</div>
				<div class="course-categories margin_botton--one display--flex flex_direction--row flex_wrap--no-wrap">
					<button v-for="n in 6" :key="n" href="" class="btn margin--all-none text_color--hint">Sample Text</button>
				</div>
				<div class="course-grid row display--grid justify_content--center" is="transition-group" name="fade">
						<course-tile v-for="n in 8" :key="n"></course-tile>
				</div>
			</div>
		</div>

		<div class="premium-banner background_color--dark text_color--light">
			<span class="highlight-bar"></span>
			<div class="grid-container padding--v-two padding-h-one">
				<div class="grid-x">
					<div class="cell small-12 medium-6">
						<h2 class="font_weight--normal">Obtén acceso a cursos especiales,<br/>elimina la publicidad<br/> y más</h2>
						<router-link to="" class="premium-btn btn margin_top--two border--hint onHover-background_color--hint">Sé premium</router-link>
					</div>
					<div class="cell small-12 medium-6">

					</div>
				</div>
			</div>
		</div>

		<div class="why-us background_color--light text_align--center">
			<div class="grid-container padding--v-two padding-h-one">
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
		</div>

		<div class="teachers container_flex--center flex_direction--row background_size--cover background_repeat--no-repeat text_color--light text_align--center">
			<div class="padding--all-one">
				<h1>Sé un instructor afiliado</h1>
				<h2 class="font_weight--normal">Gana dinero. Comparte tu conocimiento. Ayuda a la comunidad</h2>

				<router-link to="/signup" class="btn background_color--gradient text_color--light onHover-text_color--light font_weight--bold">Más información</router-link>
			</div>
		</div>

		<div class="sign-remind background_color--dark text_color--light text_align--center">
			<span class="highlight-bar"></span>

			<div class="padding--all-one">
				<h3 class="display--inline-block margin--all-none margin_right--one font_weight--normal">Desafia tus habilidades. Aprende algo nuevo. Consigue ayuda.</h3>
				<router-link to="/signup" class="btn small display--inline-block  margin--all-none background_color--accent">Sign In</router-link>
			</div>
		</div>
		
	</main>
</template>

<script>
const CourseTile = () => import('@/components/home/CourseTile')

export default {
	name: 'Home',
	components: {
		CourseTile
	}
}
</script>

<style scoped>
#home .persona {
	background-image: url('../../assets/img/persona_banner.jpg');
}

#home .persona .hero p {
	font-size: 1.25rem;
}

#home .courses .course-categories {
	overflow-x: auto;
}

#home .courses .courses-container {
	padding-bottom: 3rem;
}

#home .courses .course-grid {
	grid-gap: 2rem 1rem;
	grid-template-columns: repeat(auto-fill, minmax(auto, 210px));
}

#home .premium-banner .premium-btn {
	transition: background 200ms;
}

#home .teachers {
	height: 420px;

	background-image: url('../../assets/img/teachers_hero.png');
	background-position: center;
}

</style>
