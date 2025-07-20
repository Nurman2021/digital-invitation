<script>
	import { createEventDispatcher } from 'svelte';

	export let categories = [];
	export let activeCategory = 'all';

	const dispatch = createEventDispatcher();

	const handleClick = (category) => {
		activeCategory = category;
		dispatch('filter', { category });
	};
</script>

<div class="mb-8 flex flex-wrap justify-center gap-3">
	<button
		class={`badge badge-lg transition-all duration-300 hover:scale-105 ${
			activeCategory === 'all'
				? 'badge-primary text-primary-content'
				: 'badge-outline hover:badge-primary hover:text-primary-content'
		}`}
		on:click={() => handleClick('all')}
	>
		Semua Tema
	</button>

	{#each categories as category}
		<button
			class={`badge badge-lg transition-all duration-300 hover:scale-105 ${
				activeCategory === category
					? 'badge-primary text-primary-content'
					: 'badge-outline hover:badge-primary hover:text-primary-content'
			}`}
			on:click={() => handleClick(category)}
		>
			{category}
		</button>
	{/each}
</div>
