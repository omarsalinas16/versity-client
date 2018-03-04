<template>
	<main id="signup" class="position--relative height--viewport container_flex--center flex_direction--row">
		<div class="background position--absolute position--center background_color--dark size--fill-parent"></div>

		<div class="floating-box position--relative background_color--light grid-container flex_grow--grow padding--all-none margin--all-one box-shadow">
		</div>
	</main>
</template>

<script>
export default {
	name: 'SignUp',
}
</script>

<style scoped>
#signup .background {
	opacity: 0.7;
}

#signup .floating-box {
	min-height: 60vh;
}

#signup .floating-box .aside-img {
	max-height: none;
}

</style>
