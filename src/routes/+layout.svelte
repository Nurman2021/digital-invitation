<script>
	import '../app.css';
	import ThemeController from '$lib/components/ThemeController.svelte';

	let { children } = $props();
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
		{@render children()}
	</main>

	<!-- Theme Controller -->
	<ThemeController />
</div>
