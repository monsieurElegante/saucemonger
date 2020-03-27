<script>
import Navbar from "./components/Navbar.vue";

export default {
	components: { Navbar },
	props: [],

	data() {
		return {};
	},
	computed: {},
	methods: {}
};
</script>


<template>
	<div id="app">
		<navbar />

		<br />

		<main>
			<router-view />
		</main>
	</div>
</template>


<style>
* {
	color: rgb(0, 122, 122);
	background: rgb(0, 33, 33);
}
h1,
h2,
h3,
h4,
h5,
h6 {
	color: rgb(188, 188, 0);
	text-align: center;
}
p {
	color: rgb(188, 0, 188);
}
a {
	color: rgb(0, 188, 188);
}
img {
	display: block;
	max-height: 60vh;
	max-width: 60%;
	margin-left: auto;
	margin-right: auto;
}

/* Bootstrap Tweaks */
.card-img-top,
.btn {
	border-radius: 0;
}
.btn {
	margin: 5px;
	padding: 5px;
	color: rgb(0, 122, 122);
	border-color: rgb(0, 122, 122);
}
</style>
