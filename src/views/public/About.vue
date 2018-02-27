<template>
	<main id="about">
		<div class="slider page-hero-height">

		</div>

		<div class="what-is background_color--dark text_color--light">
			<span class="highlight-bar"></span>

			<div class="grid-container padding--v-two padding--h-one">
				<div class="grid-x">
					<div class="cell small-12 medium-6">
						<h1>Qué es Versity?</h1>
						<h3 class="font_weight--normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi eius aliquid vitae deleniti quia inventore placeat aut magni minima id quidem ipsa quasi nulla assumenda, ipsum eveniet ipsam molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, et.</h3>

						<a href="http://www.youtube.com" class="btn hollow hint display--inline-flex flex_direction--row align_items--center"><play-icon/>Mira cómo funciona</a>
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
const PlayIcon = () => import('vue-material-design-icons/play.vue')

export default {
	name: 'About',
	components: {
		PlayIcon
	}
}
</script>

<style scoped>

</style>
