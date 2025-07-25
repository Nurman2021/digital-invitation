<script>
	import { onMount } from 'svelte';
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	// Error handler untuk debugging
	function handleLottieError(event) {
		console.error('Lottie error:', event);
	}
</script>

<section class="flex">
	<div class="relative hidden w-full flex-col items-center justify-center gap-4 bg-red-600 md:flex">
		{#if mounted}
			<!-- Lottie Animation - Sudut Kanan Atas -->
			<div class="absolute top-4 right-4 z-10 h-32 w-32 md:h-48 md:w-48">
				<LottiePlayer
					src="/animations/floral-a.json"
					autoplay
					loop
					controls={false}
					renderer="svg"
					background="transparent"
					segment={[50, 200]}
					on:error={handleLottieError}
				/>
			</div>

			<!-- Lottie Animation - Sudut Kiri Bawah -->
			<div class="absolute bottom-20 left-4 z-10 h-32 w-32 md:h-48 md:w-48">
				<LottiePlayer
					src="/animations/floral-b.json"
					autoplay
					loop
					controls={false}
					renderer="svg"
					background="transparent"
					on:error={handleLottieError}
				/>
			</div>
		{/if}
		<h1 class="text-xl">THE WEDDING OF</h1>
		<h2 class="text-5xl font-bold text-white">Sitti & Budi</h2>
		<h3 class="text-lg">Minggun, 28 Desember 2025</h3>
	</div>

	<div class="flex min-h-screen w-full flex-col items-center justify-center bg-blue-600 md:w-xl">
		<h1>Buka undangan</h1>
	</div>
</section>
