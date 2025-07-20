<script>
	let openItems = {};

	const faqs = [
		{
			id: 1,
			question:
				'Maaf Min, kalau nggak punya foto, apakah masih bisa buat undangan digital diwekita?',
			answer:
				'Tentu saja bisa Kak! 😊 Kalau nggak ada foto, kita bisa tetap bikin undangan digital yang keren untuk Kakak. Kita bisa pakai karakter animasi dan inisial nama Kakak dan pasangan biar undangannya tetap tampil istimewa dan personal! ✨'
		},
		{
			id: 2,
			question: 'Min, mau tanya nih, berapa lama masa aktif undangan digitalnya?',
			answer:
				'Untuk masa aktif undangan digitalnya selama 1 tahun ya Kak, jadi Kakak punya banyak waktu untuk menyebarkannya ke semua tamu undangan. 😊'
		},
		{
			id: 3,
			question: 'Min, untuk fitur yang tidak digunakan, apakah bisa dihapus dari undangannya?',
			answer:
				'Bisa banget Kak! 😊 Nanti tinggal dinote fitur apa yang ingin dihapus dari undangannya, dan kami akan sesuaikan sesuai dengan permintaan Kakak.'
		},
		{
			id: 4,
			question: 'Min, apakah bisa request desain untuk undangan digitalnya?',
			answer:
				'Tentu bisa Kak! 😊 Kakak bisa request desain undangan digital sesuai keinginan. Silakan beri tahu detailnya, dan kami akan bantu membuatkan undangan digital yang sesuai dengan request Kakak.'
		},
		{
			id: 5,
			question: 'Min, berapa lama proses pembuatan undangan digital?',
			answer:
				'Pengerjaan undangan digital biasanya memakan waktu 1 hari kerja, terhitung setelah pembayaran dan data fix kami terima. Kami akan segera proses dan pastikan undangan Kakak siap tepat waktu!'
		},
		{
			id: 6,
			question: 'Min, apa perbedaan antara undangan digital spesial dan premium?',
			answer:
				'Undangan digital premium memiliki desain yang lebih rumit dan detail, serta menggunakan bahan yang lebih sulit dicari dibandingkan dengan undangan digital spesial. Jadi, undangan premium memberikan tampilan dan kualitas yang lebih eksklusif dan unik.'
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
			<h2 class="font-helvetica mb-6 text-4xl font-bold md:text-5xl">FAQ</h2>
			<p class="text-base-content/70 text-lg">Frequently Asked Questions​</p>
		</div>

		<div class="mx-auto max-w-3xl">
			{#each faqs as faq}
				<div class="collapse-arrow bg-base-200 collapse mb-4">
					<input
						type="radio"
						name="faq-accordion"
						checked={faq.id === 1 ? 'checked' : false}
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
