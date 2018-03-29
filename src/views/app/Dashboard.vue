<template>
	<main id="dashboard">
		<section class="active-courses">
			<div class="grid-container">
				<div class="margin_bottom--one">
					<h1 class="title display--inline-block margin_right--one">Dashboard</h1>
					<h3 class="display--inline-block font_weight--normal">Bienvenido de vuelta {{ fullName }}!</h3>
				</div>

				<div class="grid-x grid-padding-x">
					<nav class="cell medium-3">
						<router-link to="/app/active" active-class="active" class="nav-btn btn display--block">Cursos recientes</router-link>
						<router-link to="/app/saved" active-class="active" class="nav-btn btn display--block">Cursos guardados</router-link>
						<router-link to="/app/finished" active-class="active" class="nav-btn btn display--block">Cursos terminados</router-link>
						<router-link to="/app/achievements" active-class="active" class="nav-btn btn display--block">Logros</router-link>
					</nav>
					<div class="cell auto overflow--hidden">
						<transition name="fade" mode="out-in">
							<router-view/>
						</transition>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	name: 'Dashboard',
	data() {
		return {
			firstName: 'John',
			lastName: 'Doe',
		}
	},
	computed: {
		fullName() {
			return this.firstName + ' ' + this.lastName
		}
	}
}
</script>

<style scoped>
#dashboard nav {
	overflow: hidden;

	border-radius: 3px;
}

#dashboard nav .nav-btn {
	margin: 0;

	color: var(--txt_dark);
	border-color: var(--medium);
	border-radius: 0;
	background: var(--midlight);
}

#dashboard nav .nav-btn:not(:last-of-type) {
	border-bottom: none;
}

#dashboard nav .nav-btn:hover, #dashboard nav .nav-btn.active {
	background: var(--light);
}

</style>
