<script>
	import { ChevronDown, ChevronUp } from 'lucide-svelte';

	let openItems = {};

	const faqs = [
		{
			id: 1,
			question: 'Apa itu platform WeddingAI?',
			answer:
				'Platform perencanaan pernikahan komprehensif yang menggunakan teknologi AI untuk meningkatkan dan menyederhanakan pengalaman perencanaan pernikahan Anda di semua perangkat.'
		},
		{
			id: 2,
			question: 'Bagaimana AI bekerja dalam perencanaan pernikahan?',
			answer:
				'AI kami menganalisis preferensi, anggaran, dan gaya Anda untuk merekomendasikan vendor, venue, dan saran timeline yang sempurna. Ia belajar dari pilihan Anda untuk memberikan rekomendasi yang semakin personal.'
		},
		{
			id: 3,
			question: 'Tugas apa yang dapat dilakukan platform WeddingAI?',
			answer:
				'WeddingAI dapat membantu dengan pencocokan vendor, pelacakan anggaran, manajemen tamu, pembuatan timeline, perencanaan menu, pengaturan tempat duduk, dan koordinasi real-time dengan tim pernikahan Anda.'
		},
		{
			id: 4,
			question: 'Apakah data pernikahan saya aman dengan WeddingAI?',
			answer:
				'Tentu saja! Kami menggunakan langkah-langkah keamanan tingkat enterprise untuk melindungi informasi pribadi, detail tamu, dan rencana pernikahan Anda. Data Anda dienkripsi dan disimpan dengan aman.'
		},
		{
			id: 5,
			question: 'Bisakah WeddingAI belajar dari preferensi saya?',
			answer:
				'Ya! AI kami terus belajar dari pilihan, feedback, dan interaksi Anda untuk memberikan rekomendasi dan saran yang semakin personal sesuai dengan gaya dan preferensi unik Anda.'
		},
		{
			id: 6,
			question: 'Apakah saya memerlukan koneksi internet untuk WeddingAI?',
			answer:
				'Meskipun koneksi internet diperlukan untuk koordinasi vendor real-time dan rekomendasi AI, banyak fitur perencanaan inti yang bekerja offline dan sinkron saat Anda kembali online.'
		}
	];

	function toggleItem(id) {
		openItems[id] = !openItems[id];
		openItems = openItems; // Trigger reactivity
	}
</script>

<section class="bg-base-100 py-20">
	<div class="container mx-auto px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">Pertanyaan Pernikahan?</h2>
			<p class="text-base-content/70 text-lg">
				Panduan Anda untuk Pertanyaan Perencanaan Pernikahan AI
			</p>
		</div>

		<div class="mx-auto max-w-3xl">
			{#each faqs as faq}
				<div class="collapse-plus bg-base-200 collapse mb-4">
					<input
						type="checkbox"
						name="faq-accordion-{faq.id}"
						checked={openItems[faq.id] || false}
						on:change={() => toggleItem(faq.id)}
					/>
					<div class="collapse-title text-xl font-medium">
						{faq.question}
					</div>
					<div class="collapse-content">
						<p class="text-base-content/70">{faq.answer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
