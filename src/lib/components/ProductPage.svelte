<script>
	import ProductCard from './ProductCard.svelte';
	import CategoryFilter from './CategoryFilter.svelte';
	import products from '$lib/data/product';

	const categories = [...new Set(products.map((product) => product.category))];

	let activeCategory = 'all';

	const handleFilter = (event) => {
		activeCategory = event.detail.category;
	};

	$: filteredProducts =
		activeCategory === 'all'
			? products
			: products.filter((product) => product.category === activeCategory);
</script>

<div class="bg-base-100 py-20">
	<div class="container mx-auto px-4">
		<div class="mb-16 text-center">
			<div class="badge badge-secondary badge-lg mb-4">
				Silahkan klik tombol dibawah ini untuk melihat contoh
			</div>
			<h2 class="text-base-content text-4xl font-bold md:text-5xl">Pilihan Tema</h2>
		</div>

		<div class="mx-auto max-w-7xl">
			<CategoryFilter {categories} {activeCategory} on:filter={handleFilter} />

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each filteredProducts as product}
					<ProductCard {product} />
				{/each}
			</div>

			{#if filteredProducts.length === 0}
				<div class="py-12 text-center">
					<div class="alert alert-info">
						<span class="text-lg">Tidak ada produk ditemukan dalam kategori ini.</span>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
