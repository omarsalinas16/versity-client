<template>
	<footer id="footer" class="background_color--light text_color--medium">
		<div class="footer-container container">
			<div class="links row">
				<div class="three columns">
					<h3>Versity</h3>
					<ul class="link-list">
						<li><router-link to="/about">Acerca de</router-link></li>
						<li><router-link to="/instructors">Instructores</router-link></li>
						<li><router-link to="/community">Personal</router-link></li>
						<li><router-link to="">Blog</router-link></li>
						<li><router-link to="">Empleo</router-link></li>
					</ul>
				</div>
				<div class="three columns">
					<h3>Comunidad</h3>
					<ul class="link-list">
						<li><router-link to="/premium">Premium</router-link></li>
						<li><router-link to="">Planes empresariales</router-link></li>
						<li><router-link to="">Planes academicos</router-link></li>
						<li><router-link to="/courses">Clases gratuitas</router-link></li>
					</ul>
				</div>
				<div class="three columns">
					<h3>Instructores</h3>
					<ul class="link-list">
						<li><router-link to="/instructors">Sé un profesor</router-link></li>
						<li><router-link to="">Academia de profesores</router-link></li>
						<li><router-link to="">Material academico</router-link></li>
						<li><router-link to="">Afiliaciones</router-link></li>
					</ul>
				</div>
				<div class="three columns">
					<h3>Contacto</h3>
					<div class="contact-social container">
						<div class="row">
							<div class="three columns">
								<a href="http://www.twitter.com/" target="_blank"><twitter-icon/></a>
							</div>
							<div class="three columns">
								<a href="http://www.facebook.com/" target="_blank"><facebook-icon/></a>
							</div>
							<div class="three columns">
								<a href="http://www.youtube.com/" target="_blank"><youtube-play-icon/></a>
							</div>
							<div class="three columns">
								<a href="mailto:contact@versity.mx" target="_blank"><email-icon/></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="copy">
				Copyright &copy; 2018 Versity LLC. Todos los derechos reservados.
			</div>
		</div>
	</footer>
</template>

<script>
const TwitterIcon = () => import('vue-material-design-icons/twitter.vue')
const FacebookIcon = () => import('vue-material-design-icons/facebook.vue')
const YoutubePlayIcon = () => import('vue-material-design-icons/youtube-play.vue')
const EmailIcon = () => import('vue-material-design-icons/email.vue')

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

#footer .copy {
	padding-top: 1.5rem;

	border-top: 1px solid #dfdfdf;
}

</style>
