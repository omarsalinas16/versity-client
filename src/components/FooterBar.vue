<template>
	<footer id="footer" class="background_color--light text_color--medium">
		<div class="footer-container grid-container">
			<div class="links grid-x">
				<div class="cell small-6 medium-3">
					<h3>Versity</h3>
					<ul class="link-list padding_left--none">
						<li><router-link to="/about">Acerca de</router-link></li>
						<li><router-link to="">Instructores</router-link></li>
						<li><router-link to="">Personal</router-link></li>
						<li><router-link to="">Blog</router-link></li>
						<li><router-link to="">Empleo</router-link></li>
					</ul>
				</div>
				<div class="cell small-6 medium-3">
					<h3>Comunidad</h3>
					<ul class="link-list padding_left--none">
						<li><router-link to="">Premium</router-link></li>
						<li><router-link to="">Planes empresariales</router-link></li>
						<li><router-link to="">Planes academicos</router-link></li>
						<li><router-link to="">Clases gratuitas</router-link></li>
					</ul>
				</div>
				<div class="cell small-6 medium-3">
					<h3>Instructores</h3>
					<ul class="link-list padding_left--none">
						<li><router-link to="">Sé un profesor</router-link></li>
						<li><router-link to="">Academia de profesores</router-link></li>
						<li><router-link to="">Material academico</router-link></li>
						<li><router-link to="">Afiliaciones</router-link></li>
					</ul>
				</div>
				<div class="contact-social margin_bottom--two cell small-6 medium-3">
					<h3>Contacto</h3>
					<div class="grid-x grid-padding-x small-up-2 medium-up-4">
						<div class="cell">
							<a href="http://www.twitter.com/" target="_blank" class="display--block text_color--medium"><twitter-icon/></a>
						</div>
						<div class="cell">
							<a href="http://www.facebook.com/" target="_blank" class="display--block text_color--medium"><facebook-icon/></a>
						</div>
						<div class="cell">
							<a href="http://www.youtube.com/" target="_blank" class="display--block text_color--medium"><youtube-play-icon/></a>
						</div>
						<div class="cell">
							<a href="mailto:contact@versity.mx" target="_blank" class="display--block text_color--medium"><email-icon/></a>
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

/**
 * Definition of Footer bar. Loads common CSS stylesheets.
 * @name FooterBat
 * @class
 */
export default {
	/**
	 * @memberof FooterBar
	 * @name name
	 * @const {String}
	 */
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
	padding: 3rem 1rem 4rem;
}

#footer.top-border .footer-container {
	border-top: 1px solid #dfdfdf;
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

#footer .contact-social a {
	width: 24px;
	height: 24px;
	margin-bottom: 0.5rem;
}

#footer .copy {
	padding-top: 1.5rem;

	border-top: 1px solid #dfdfdf;
}


</style>
