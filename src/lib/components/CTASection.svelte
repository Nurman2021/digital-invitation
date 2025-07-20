<script>
	import { Download, Heart } from 'lucide-svelte';
</script>

<section class="bg-primary text-primary-content py-20">
	<div class="container mx-auto px-4 text-center">
		<h2 class="mb-6 text-4xl font-bold md:text-5xl">Rencanakan pernikahan Anda hari ini!</h2>
		<p class="mx-auto mb-8 max-w-2xl text-lg opacity-90">
			Mulai gunakan WeddingAI, solusi lengkap yang dirancang untuk membantu Anda merencanakan
			pernikahan sempurna, mengkoordinasikan vendor, dan menciptakan kenangan tak terlupakan.
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<button class="btn btn-secondary btn-lg">
				<Download class="mr-2 h-5 w-5" />
				Mulai Gratis
			</button>
			<button
				class="btn btn-outline btn-lg hover:text-primary border-white text-white hover:bg-white"
			>
				<Heart class="mr-2 h-5 w-5" />
				Lihat Portfolio
			</button>
		</div>
	</div>
</section>
