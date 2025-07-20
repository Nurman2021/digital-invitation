<script>
	import { Instagram, Phone } from 'lucide-svelte';
</script>

<section class="bg-primary text-primary-content py-20">
	<div class="container mx-auto px-4 text-center">
		<h2 class="font-helvetica mb-6 text-4xl font-bold md:text-5xl">
			Buat Undangan Digitalmu Sekarang!
		</h2>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<button class="btn btn-secondary btn-lg">
				<Instagram class="mr-2 h-5 w-5" />
				Instagram
			</button>
			<button
				class="btn btn-outline btn-lg hover:text-primary border-white text-white hover:bg-white"
			>
				<Phone class="mr-2 h-5 w-5" />
				WhatsApp
			</button>
		</div>
	</div>
</section>
