<script>
	import { ExternalLink } from 'lucide-svelte';

	let { product } = $props();
</script>

<div
	class="card bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
	<figure class="h-56">
		<img class="h-full w-full object-cover" src={product.image} alt={product.name} />
	</figure>
	<div class="card-body">
		<h2 class="card-title text-base-content">{product.name}</h2>
		<p class="text-base-content/70 text-sm line-through">Rp. {product.description}</p>
		<p class="text-primary mb-4 text-lg font-bold">Rp. {product.price}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary font-normal"><ExternalLink size={18} /> Lihat Contoh </button>
		</div>
	</div>
</div>
