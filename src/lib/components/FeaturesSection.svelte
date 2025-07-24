<script>
	import {
		SwatchBook,
		MessagesSquare,
		FilePenLine,
		Heart,
		Users,
		Camera,
		Music,
		MapPin,
		CircleCheck,
		UserCheck,
		CreditCard,
		Timer,
		Images,
		TvMinimalPlay,
		QrCode,
		Radio
	} from 'lucide-svelte';

	const features = [
		{
			icon: SwatchBook,
			title: 'Beragam Pilihan Tema',
			description:
				'Pilih tema favoritmu dari puluhan tema dan bisa kamu custom sendiri, mau ganti background dengan foto prewed? atau ubah warna tulisan? Bisa!.'
		},
		{
			icon: FilePenLine,
			title: 'Custom Nama Tamu',
			description:
				'Ngundang teman sebaya atau yang lebih tua gak perlu hawatir. Tetap sopan dengan undangan digital karena kamu bisa kirim undangan dengan nama tamu.'
		},
		{
			icon: MessagesSquare,
			title: 'Konfirmasi Kehadiran',
			description:
				'Kini kamu bisa mengetahui berapa jumlah tamu yang hadir atau tidak, sehingga bisa mengurangi makanan sisa yang tidak termakan.'
		}
	];

	const additionalFeatures = [
		{
			icon: Music,
			title: 'Koordinasi Vendor Real-time',
			description:
				'Koordinasi cepat dengan vendor untuk update dan respon instan. Memastikan informasi terkini dan perencanaan real-time.'
		},
		{
			icon: MapPin,
			title: 'Kompatibilitas Multi-venue',
			description:
				'Akses platform dengan mulus di berbagai venue dan lokasi. Perencanaan konsisten di mobile, desktop, dan platform lain.'
		},
		{
			icon: Heart,
			title: 'Update Berkelanjutan dan Dukungan',
			description:
				'Update rutin untuk memperkenalkan tren pernikahan baru dan perbaikan. Dukungan pelanggan responsif untuk pertanyaan atau masalah.'
		}
	];
</script>

<section class="bg-base-100 py-20">
	<div class="container mx-auto px-4">
		<!-- Why Choose Section -->
		<div class="mb-16 text-center">
			<h2
				class="font-helvetica mx-auto mb-6 max-w-3xl text-4xl leading-normal font-bold md:text-5xl"
			>
				Kenapa Harus Menggunakan
				<span class="text-primary">Undangan Digital</span>?
			</h2>
			<div class="mx-auto grid max-w-2xl grid-cols-1 justify-center gap-4 md:grid-cols-2">
				<div class="flex items-start">
					<CircleCheck class="text-primary" style="min-width: 24px" size={24} />
					<div class="ml-2">Hemat Biaya, Waktu, dan Tenaga</div>
				</div>
				<div class="flex items-start">
					<CircleCheck class="text-primary" style="min-width: 24px" size={24} />
					<div class="ml-2">Lebih Praktis dan Efisien</div>
				</div>
				<div class="flex items-start">
					<CircleCheck class="text-primary" style="min-width: 24px" size={24} />
					<div class="ml-2">Bisa diakses kapan saja dan dimana saja</div>
				</div>
				<div class="flex items-start">
					<CircleCheck class="text-primary" style="min-width: 24px" size={24} />
					<div class="ml-2">Ramah Lingkungan</div>
				</div>
				<div class="flex items-start">
					<CircleCheck class="text-primary" style="min-width: 24px" size={24} />
					<div class="ml-2">Tanpa Sampah</div>
				</div>
				<div class="flex items-start">
					<CircleCheck class="text-primary" style="min-width: 24px" size={24} />
					<div class="ml-2">Fitur melimpah</div>
				</div>
			</div>
		</div>

		<!-- Features Grid -->
		<div class="mb-20 grid gap-8 md:grid-cols-3">
			{#each features as feature}
				<div class="text-center">
					<div
						class="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
					>
						<svelte:component this={feature.icon} class="text-primary h-8 w-8" />
					</div>
					<h3 class="font-helvetica mb-3 text-xl font-semibold">{feature.title}</h3>
					<p class="text-base-content/70">{feature.description}</p>
				</div>
			{/each}
		</div>

		<div class="mb-16 text-center">
			<h2 class="font-helvetica mb-6 text-4xl font-bold md:text-5xl">
				Fitur <span class="text-primary">Lengkap</span>
			</h2>
			<p class="text-base-content/70 mx-auto mb-12 max-w-3xl text-lg">
				Undangan Digital Dengan Fitur yang Lengkap hanya disini
			</p>
		</div>

		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			<!-- Row 1 -->
			<div class="card bg-info text-info-content shadow-lg">
				<div class="card-body flex flex-col items-center justify-center p-4">
					<UserCheck size={56} />
					<div class="mt-2 text-center text-sm font-medium">Custom Nama Tamu</div>
				</div>
			</div>
			<div class="card bg-info text-info-content shadow-lg">
				<div class="card-body flex flex-col items-center justify-center p-4">
					<Music size={56} />
					<div class="mt-2 text-center text-sm font-medium">Custom Music Latar</div>
				</div>
			</div>
			<div class="card bg-info text-info-content shadow-lg">
				<div class="card-body flex flex-col items-center justify-center p-4">
					<MessagesSquare size={56} />
					<div class="mt-2 text-center text-sm font-medium">RSVP &amp; Ucapan</div>
				</div>
			</div>
			<div class="card bg-info text-info-content shadow-lg">
				<div class="card-body flex flex-col items-center justify-center p-4">
					<CreditCard size={56} />
					<div class="mt-2 text-center text-sm font-medium">Amplop Digital</div>
				</div>
			</div>

			<!-- Row 2 -->
			<div class="card bg-info text-info-content shadow-lg">
				<div class="card-body flex flex-col items-center justify-center p-4">
					<Timer size={56} />
					<div class="mt-2 text-center text-sm font-medium">Count Down Timer</div>
				</div>
			</div>
			<div class="card bg-info text-info-content shadow-lg">
				<div class="card-body flex flex-col items-center justify-center p-4">
					<Images size={56} />
					<div class="mt-2 text-center text-sm font-medium">Galeri Foto &amp; Video</div>
				</div>
			</div>
			<div class="card bg-info text-info-content shadow-lg">
				<div class="card-body flex flex-col items-center justify-center p-4">
					<MapPin size={56} />
					<div class="mt-2 text-center text-sm font-medium">Integrasi Google Maps</div>
				</div>
			</div>
			<div class="card bg-info text-info-content shadow-lg">
				<div class="card-body flex flex-col items-center justify-center p-4">
					<TvMinimalPlay size={56} />
					<div class="mt-2 text-center text-sm font-medium">Info Live Streaming</div>
				</div>
			</div>

			<!-- Row 3 - Centered 2 cards -->
			<div class="card bg-info text-info-content shadow-lg md:col-start-2">
				<div class="card-body flex flex-col items-center justify-center p-4">
					<QrCode size={56} />
					<div class="mt-2 text-center text-sm font-medium">QR Code Checkin Acara</div>
				</div>
			</div>
			<div class="card bg-info text-info-content shadow-lg">
				<div class="card-body flex flex-col items-center justify-center p-4">
					<Radio size={56} />
					<div class="mt-2 text-center text-sm font-medium">Layar Sapa Real Time</div>
				</div>
			</div>
		</div>
	</div>
</section>
