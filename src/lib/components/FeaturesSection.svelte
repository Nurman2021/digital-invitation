<script>
	import { Calendar, Shield, Zap, Heart, Users, Camera, Music, MapPin } from 'lucide-svelte';

	const features = [
		{
			icon: Calendar,
			title: 'Perencanaan Pernikahan Efisien & Sinkronisasi',
			description:
				'Penjadwalan cerdas dan koordinasi vendor untuk perencanaan pernikahan yang mulus.'
		},
		{
			icon: Shield,
			title: 'Keamanan dan Perlindungan Privasi',
			description:
				'Detail pernikahan dan informasi tamu Anda dilindungi dengan keamanan tingkat enterprise.'
		},
		{
			icon: Zap,
			title: 'Bantuan Real-time & Pembelajaran',
			description: 'Rekomendasi bertenaga AI yang belajar dari preferensi dan gaya Anda.'
		},
		{
			icon: Heart,
			title: 'Asisten Pernikahan Cerdas',
			description:
				'WeddingAssist memanfaatkan kekuatan AI canggih untuk memahami dan merencanakan pernikahan sempurna Anda dengan mulus.'
		},
		{
			icon: Users,
			title: 'Sistem Manajemen Tamu',
			description:
				'Temui WeddingConnect, sistem manajemen tamu bertenaga AI. Mengatur RSVP, preferensi makanan, dan pengaturan tempat duduk.'
		},
		{
			icon: Camera,
			title: 'Pengalaman Pernikahan Personal',
			description:
				'Temukan WeddingConnect: teknologi personal yang belajar dari Anda, menyesuaikan venue dan vendor untuk pengalaman unik.'
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
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">
				Mengapa memilih <span class="text-primary">WeddingAI</span>?
			</h2>
			<p class="text-base-content/70 mx-auto max-w-3xl text-lg">
				Asisten pernikahan AI Anda memberikan pemahaman bahasa alami, pengalaman personal, dan
				analitik prediktif, mengintegrasikan koordinasi vendor, manajemen tamu, dan interaksi
				kontekstual untuk perencanaan pernikahan yang lebih cerdas dan efisien.
			</p>
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
					<h3 class="mb-3 text-xl font-semibold">{feature.title}</h3>
					<p class="text-base-content/70">{feature.description}</p>
				</div>
			{/each}
		</div>

		<!-- Feature with Image Section -->
		<div class="mb-20 grid items-center gap-16 lg:grid-cols-2">
			<div>
				<div class="badge badge-primary mb-4">10+</div>
				<h3 class="mb-6 text-3xl font-bold md:text-4xl">
					Template <span class="text-primary">Pernikahan</span>
				</h3>
				<p class="text-base-content/70 mb-8 text-lg">
					Aplikasi AI menetapkan tujuan, memproses data, melatih model, memprediksi hasil,
					menggabungkan umpan balik pengguna untuk peningkatan, dan berinteraksi dengan sistem
					eksternal untuk fungsionalitas perencanaan pernikahan yang lengkap
				</p>

				<!-- Process Steps -->
				<div class="space-y-4">
					<div class="flex items-center gap-4">
						<div
							class="bg-primary text-primary-content flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
						>
							1
						</div>
						<span>Pilih gaya dan preferensi pernikahan Anda</span>
					</div>
					<div class="flex items-center gap-4">
						<div
							class="bg-primary text-primary-content flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
						>
							2
						</div>
						<span>AI mencocokkan Anda dengan vendor sempurna</span>
					</div>
					<div class="flex items-center gap-4">
						<div
							class="bg-primary text-primary-content flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
						>
							3
						</div>
						<span>Rencanakan dan koordinasikan seluruh pernikahan Anda</span>
					</div>
					<div class="flex items-center gap-4">
						<div
							class="bg-primary text-primary-content flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold"
						>
							4
						</div>
						<span>Nikmati hari pernikahan sempurna Anda</span>
					</div>
				</div>

				<button class="btn btn-primary mt-6">Baca Selengkapnya</button>
			</div>

			<div class="mockup-phone">
				<div class="camera"></div>
				<div class="display">
					<div class="artboard artboard-demo phone-1 bg-gradient-to-br from-rose-100 to-pink-100">
						<div class="space-y-4 p-6">
							<div class="text-center">
								<h4 class="text-lg font-bold">Timeline Pernikahan</h4>
							</div>

							<div class="space-y-3">
								<div class="card bg-white/80 shadow-sm">
									<div class="card-body p-3">
										<div class="flex items-center justify-between">
											<span class="text-sm font-medium">Upacara</span>
											<span class="text-base-content/70 text-xs">14:00</span>
										</div>
									</div>
								</div>

								<div class="card bg-white/80 shadow-sm">
									<div class="card-body p-3">
										<div class="flex items-center justify-between">
											<span class="text-sm font-medium">Cocktail Hour</span>
											<span class="text-base-content/70 text-xs">15:30</span>
										</div>
									</div>
								</div>

								<div class="card bg-white/80 shadow-sm">
									<div class="card-body p-3">
										<div class="flex items-center justify-between">
											<span class="text-sm font-medium">Resepsi</span>
											<span class="text-base-content/70 text-xs">17:00</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- How Does It Work Section -->
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">
				Bagaimana kami <span class="text-primary">mengatur pernikahan Anda</span>?
			</h2>
			<p class="text-base-content/70 mx-auto mb-12 max-w-3xl text-lg">
				Daftar fitur yang terorganisir ini memberikan gambaran yang jelas tentang kemampuan platform
				pernikahan AI, memudahkan pasangan untuk memahami fungsionalitas utama platform.
			</p>
		</div>

		<!-- Additional Features Grid -->
		<div class="mb-12 grid gap-8 md:grid-cols-3">
			{#each additionalFeatures as feature}
				<div class="text-center">
					<div
						class="bg-secondary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
					>
						<svelte:component this={feature.icon} class="text-secondary h-8 w-8" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">{feature.title}</h3>
					<p class="text-base-content/70">{feature.description}</p>
				</div>
			{/each}
		</div>

		<!-- Third Party Integrations -->
		<div class="text-center">
			<div class="badge badge-accent badge-lg mb-4">50+</div>
			<h3 class="text-2xl font-bold">Integrasi Vendor</h3>
		</div>
	</div>
</section>
