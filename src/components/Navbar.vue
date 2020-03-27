<template>
	<header class="navbar d-flex">
		<router-link to="/">
			<button class="btn">Home</button>
		</router-link>
		<router-link to="/about">
			<button class="btn">About</button>
		</router-link>
	</header>
</template>


<script>
export default {
	name: "navbar",

	components: {},
	props: [],

	data() {
		return {};
	},
	computed: {},
	methods: {}
};
</script>


<style scoped>
.navbar {
	justify-content: center;
}
</style>