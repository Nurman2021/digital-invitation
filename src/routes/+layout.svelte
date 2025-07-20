<script>
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
		{@render children()}
	</main>
</div>
