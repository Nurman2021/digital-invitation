<script>
	import { Star } from 'lucide-svelte';

	const testimonials = [
		{
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
			name: 'Nita & Reza',
			date: 'Minggu, 28 Januari 2024',
			text: '“Suka banget sama pelayanannya. Adminnya ramah dan sabar bantuin revisi. Undangannya tampil bagus banget di HP maupun laptop. Nilai plus buat tim Sitemu!”'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
			name: 'Siska & Denny',
			date: 'Selasa, 26 Desember 2023',
			text: '“Undangannya super lengkap! Ada RSVP, peta lokasi, galeri foto, bahkan countdown hari H. Orang tua kita juga senang karena tampilannya rapi dan profesional.'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
			name: 'Andini & Fajar',
			date: `Jum'at, 27 Oktober 2023`,
			text: '“Kita tadinya bingung mau cetak undangan atau digital. Pas lihat Sitemu, langsung jatuh hati. Praktis, hemat, dan bisa dibagikan lewat WhatsApp ke semua tamu. Highly recommended!”'
		}
	];
</script>

<section class="bg-base-200 py-20">
	<div class="container mx-auto px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">Apa Kata Mereka</h2>
		</div>

		<div class="grid gap-8 lg:grid-cols-3">
			{#each testimonials as testimonial, index}
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
								<p class="text-base-content/70 text-sm">{testimonial.date}</p>
							</div>
						</div>

						<p class="text-base-content/80 mb-4">{testimonial.text}</p>

						<div class="rating gap-1">
							<input
								type="radio"
								name="rating-{index}"
								class="mask mask-star-2 bg-accent"
								aria-label="1 star"
							/>
							<input
								type="radio"
								name="rating-{index}"
								class="mask mask-star-2 bg-accent"
								aria-label="2 star"
							/>
							<input
								type="radio"
								name="rating-{index}"
								class="mask mask-star-2 bg-accent"
								aria-label="3 star"
							/>
							<input
								type="radio"
								name="rating-{index}"
								class="mask mask-star-2 bg-accent"
								aria-label="4 star"
							/>
							<input
								type="radio"
								name="rating-{index}"
								class="mask mask-star-2 bg-accent"
								aria-label="5 star"
								checked
							/>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
