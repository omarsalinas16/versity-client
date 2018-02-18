<template>
	<main id="home">
		<div class="persona position--relative overflow--hidden">
			<img src="@/assets/persona_banner.jpg" alt="Home page banner" class="banner position--absolute position--center object_fit--cover size--fill-parent"/>

			<div class="hero-container position--relative display--flex flex_direction--row flex_wrap--no-wrap flex_align--center size--fill-parent">
				<div class="hero container text_align--center text_color--light">
					<h1>Encuentra tu camino</h1>
					<p>Miles de cursos por descubir,<br>miles de cosas por aprender</p>
					
					<router-link to="/signup" class="btn background_color--gradient text_color--light onHover-text_color--light font_weight--bold">Empieza hoy</router-link>
				</div>
			</div>
		</div>

		<!-- Filler div to test some styles, remove after -->
		<div class="height--viewport"></div>
	</main>
</template>

<script>
export default {
	name: 'Home'
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

</style>
