<template>
	<footer id="footer" class="background_color--light text_color--medium">
		<div class="footer-container container">
			<div class="links row">
				<div class="three columns">
					<h3>Versity</h3>
					<ul class="link-list">
						<li><a href="">Acerca de</a></li>
						<li><a href="">Afiliados</a></li>
						<li><a href="">Personal</a></li>
						<li><a href="">Blog</a></li>
						<li><a href="">Empleo</a></li>
					</ul>
				</div>
				<div class="three columns">
					<h3>Comunidad</h3>
					<ul class="link-list">
						<li><a href="">Premium</a></li>
						<li><a href="">Planes empresariales</a></li>
						<li><a href="">Planes academicos</a></li>
						<li><a href="">Clases gratuitas</a></li>
					</ul>
				</div>
				<div class="three columns">
					<h3>Instructores</h3>
					<ul class="link-list">
						<li><a href="">Sé un profesor</a></li>
						<li><a href="">Academia de profesores</a></li>
						<li><a href="">Material academico</a></li>
						<li><a href="">Afiliaciones</a></li>
					</ul>
				</div>
				<div class="three columns">
					<h3>Contacto</h3>
					<div class="contact-social container">
						<div class="row">
							<div class="three columns">
								<a href=""><twitter-icon/></a>
							</div>
							<div class="three columns">
								<a href=""><facebook-icon/></a>
							</div>
							<div class="three columns">
								<a href=""><youtube-play-icon/></a>
							</div>
							<div class="three columns">
								<a href=""><email-icon/></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="copy">

			</div>
		</div>
	</footer>
</template>

<script>
import TwitterIcon from 'vue-material-design-icons/twitter.vue'
import FacebookIcon from 'vue-material-design-icons/facebook.vue'
import YoutubePlayIcon from 'vue-material-design-icons/youtube-play.vue'
import EmailIcon from 'vue-material-design-icons/email.vue'

export default {
	name: 'FooterBar',
	components: {
		TwitterIcon,
		FacebookIcon,
		YoutubePlayIcon,
		EmailIcon,
	}
}
</script>

<style scoped>
#footer {
	margin: 4rem 0 0;
}

#footer .footer-container {
	padding: 3rem 0 4rem;
}

#footer .footer-container .links .link-list {
	list-style: none;
}

#footer .footer-container .links .link-list li {
	margin-bottom: 0.5rem;
}

#footer .footer-container .links .link-list a {
	color: inherit;
}

#footer .footer-container .links .link-list a:hover {
	color: var(--txt-dark);
}

#footer .contact-social {
	margin-bottom: 2rem;
}

</style>
