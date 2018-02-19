<template>
	<main id="home">
		<div class="persona position--relative overflow--hidden">
			<img src="@/assets/img/persona_banner.jpg" alt="Home page banner" class="banner position--absolute position--center object_fit--cover size--fill-parent"/>

			<div class="hero-container position--relative display--flex flex_direction--row flex_wrap--no-wrap flex_align--center size--fill-parent">
				<div class="hero container text_align--center text_color--light">
					<h1>Encuentra tu camino</h1>
					<p>Miles de cursos por descubir,<br>miles de cosas por aprender</p>
					
					<router-link to="/signup" class="btn background_color--gradient text_color--light onHover-text_color--light font_weight--bold">Empieza hoy</router-link>
				</div>
			</div>
		</div>

		<div class="courses background_color--light">
			<div class="container">
				<div class="row text_align--center">
					<h2>Disfruta de una gran colección de temas diferentes, gratis</h2>
					<p>Descubre nuevos hobbies, aprende exactamente lo que buscas y cuando quieras</p>
				</div>
				<div class="display--flex flex_direction--row flex_wrap--no-wrap justify_content--center">
					<button v-for="n in 5" :key="n" href="" class="btn text_color--hint">Sample Text</button>
				</div>
				<div class="course-grid row display--grid justify_content--center">
					<course-tile v-for="n in 8" :key="n"></course-tile>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import CourseTile from '@/components/home/CourseTile'

export default {
	name: 'Home',
	components: {
		CourseTile
	}
}
</script>

<style scoped>
#home > .persona {
	height: 60vh;
}

#home > .persona > .banner {
	filter: blur(2px);
}

#home > .persona > .hero-container {
	background: rgba(0, 0, 0, 0.4);
}

#home > .persona > .hero-container > .hero {
	padding: 1rem;
}

#home > .persona > .hero-container > .hero > p {
	font-size: 1.25rem;
}

#home > .courses > .container {
	padding: 1rem;
}

#home > .courses .course-grid {
	grid-template-columns: repeat(auto-fill, minmax(auto, 210px));
	grid-gap: 2rem 1rem;
}

</style>
