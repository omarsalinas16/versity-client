<template>
	<footer id="footer">
		<div class="footer-container container">
			<div class="links row">
				<div class="three columns">
					<h3>Versity</h3>
					<ul class="link-list">
						<li><a href="">Acerca de</a></li>
						<li><a href="">Afiliados</a></li>
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
						<li><a href="">Sample</a></li>
						<li><a href="">Sample</a></li>
						<li><a href="">Sample</a></li>
					</ul>
				</div>
				<div class="three columns">
					<h3>Contacto</h3>
				</div>
			</div>
			<div class="copy">

			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'FooterBar'
}
</script>

<style scoped>
#footer {
	flex: 0 0;

	margin: 4rem 0 0;

	background: #dae1e9;
}

#footer > .footer-container {
	padding: 3rem 0 4rem;
}

#footer > .footer-container > .links .link-list {
	list-style: none;
}

#footer > .footer-container > .links .link-list > li {
	margin-bottom: 0.5rem;
}

#footer > .footer-container > .links .link-list a {
	color: var(--txt-dark);
}

#footer > .footer-container > .links .link-list a:hover {
	color: var(--accent);
}

</style>
