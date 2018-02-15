<template>
	<main id="home">
		<div class="persona">
			<img src="@/assets/persona_banner.jpg" alt="Home page banner" class="banner"/>

			<div class="hero-container">
				<div class="hero container">
					<h1>Encuentra tu camino</h1>
					<p>Miles de cursos por descubir,<br>miles de cosas por aprender</p>
					
					<router-link to="/signup" class="btn btn-gradient">Empieza hoy</router-link>
				</div>
			</div>
		</div>
		<div class="temp"></div>
	</main>
</template>

<script>
export default {
	name: 'Home'
}
</script>

<style>
#home {
}

#home > .persona {
	position: relative;

	overflow: hidden;

	height: 60vh;
}

#home > .persona > .banner {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	width: 100%;
	height: 100%;

	filter: blur(2px);
	object-fit: cover;
}

#home > .persona > .hero-container {
	position: relative;

	display: flex;

	flex-flow: row nowrap;

	width: 100%;
	height: 100%;

	background: rgba(0, 0, 0, 0.3);

	align-items: center;
	justify-content: center;
}

#home > .persona > .hero-container > .hero {
	padding: 1rem;

	text-align: center;

	color: var(--txt-light);
}

#home > .persona > .hero-container > .hero > p {
	font-size: 1.25rem;
}

#home > .temp {
	height: 100vh;
}

</style>
