<script>
	import { Star } from 'lucide-svelte';

	const testimonials = [
		{
			avatar:
				'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
			name: 'Sarah Thompson',
			role: 'Pengantin di Pernikahan Thompson-Wilson',
			text: 'WeddingAI adalah terobosan! Asisten virtual telah mengubah perencanaan pernikahan saya dengan rekomendasi vendor yang cerdas dan wawasan yang dipersonalisasi. Seperti memiliki perencana pernikahan khusus saya sendiri!'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
			name: 'Michael Johnson',
			role: 'Pengantin Pria di Pernikahan Johnson-Davis',
			text: 'Sebagai seseorang yang menghargai efisiensi, saya mengapresiasi antarmuka platform yang user-friendly. Ini terintegrasi dengan mulus dengan proses perencanaan pernikahan kami, dan pemrosesan bahasa alaminya memastikan interaksi yang lancar dan intuitif.'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
			name: 'Emily Chen',
			role: 'Perencana Pernikahan di Perfect Moments',
			text: 'Mengintegrasikan WeddingAI ke dalam layanan perencanaan pernikahan kami sangat mulus. Dukungan lintas platform dan alat pembelajaran mesin yang kuat membuatnya sempurna untuk profesional pernikahan. Sangat direkomendasikan!'
		}
	];
</script>

<section class="bg-base-200 py-20">
	<div class="container mx-auto px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">Apa Kata Mereka</h2>
		</div>

		<div class="grid gap-8 lg:grid-cols-3">
			{#each testimonials as testimonial}
				<div class="card bg-base-100 shadow-xl">
					<div class="card-body">
						<div class="mb-4 flex items-center gap-4">
							<div class="avatar">
								<div class="w-16 rounded-full">
									<img src={testimonial.avatar} alt={testimonial.name} />
								</div>
							</div>
							<div>
								<h3 class="text-lg font-semibold">{testimonial.name}</h3>
								<p class="text-base-content/70 text-sm">{testimonial.role}</p>
							</div>
						</div>

						<p class="text-base-content/80 mb-4">{testimonial.text}</p>

						<div class="rating rating-sm">
							{#each Array(5) as _}
								<Star class="fill-warning text-warning h-4 w-4" />
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
