<script>
	import { Heart, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-svelte';
</script>

<footer class="footer footer-center bg-base-200 text-base-content p-10">
	<div class="grid grid-flow-col gap-4">
		<div class="flex items-center gap-2">
			<Heart class="text-primary h-6 w-6" />
			<span class="text-xl font-bold">WeddingAI</span>
		</div>
	</div>

	<div class="grid grid-flow-col gap-4">
		<a href="#features" class="link link-hover">Fitur</a>
		<a href="#pricing" class="link link-hover">Harga</a>
		<a href="#portfolio" class="link link-hover">Portfolio</a>
		<a href="#about" class="link link-hover">Tentang</a>
		<a href="#contact" class="link link-hover">Kontak</a>
	</div>

	<div class="grid grid-flow-col gap-4">
		<button class="btn btn-ghost btn-circle">
			<Facebook class="h-5 w-5" />
		</button>
		<button class="btn btn-ghost btn-circle">
			<Instagram class="h-5 w-5" />
		</button>
		<button class="btn btn-ghost btn-circle">
			<Twitter class="h-5 w-5" />
		</button>
		<button class="btn btn-ghost btn-circle">
			<Mail class="h-5 w-5" />
		</button>
	</div>

	<div class="grid w-full max-w-4xl gap-8 md:grid-cols-3">
		<div>
			<h3 class="mb-2 font-semibold">Fitur</h3>
			<div class="space-y-1">
				<a href="#wedding-planning" class="link link-hover block">Perencanaan Pernikahan</a>
				<a href="#vendor-management" class="link link-hover block">Manajemen Vendor</a>
				<a href="#guest-coordination" class="link link-hover block">Koordinasi Tamu</a>
				<a href="#budget-tracking" class="link link-hover block">Pelacakan Anggaran</a>
			</div>
		</div>

		<div>
			<h3 class="mb-2 font-semibold">Solusi</h3>
			<div class="space-y-1">
				<a href="#for-couples" class="link link-hover block">Untuk Pasangan</a>
				<a href="#for-planners" class="link link-hover block">Untuk Perencana</a>
				<a href="#for-vendors" class="link link-hover block">Untuk Vendor</a>
				<a href="#integrations" class="link link-hover block">Integrasi</a>
			</div>
		</div>

		<div>
			<h3 class="mb-2 font-semibold">Perusahaan</h3>
			<div class="space-y-1">
				<a href="#about-us" class="link link-hover block">Tentang Kami</a>
				<a href="#our-team" class="link link-hover block">Tim Kami</a>
				<a href="#blog" class="link link-hover block">Blog</a>
				<a href="#contact" class="link link-hover block">Kontak</a>
			</div>
		</div>
	</div>

	<div class="divider"></div>

	<div>
		<p>🌼 Made with <a href="https://daisyui.com/" class="link link-primary">daisyUI</a></p>
		<p class="text-sm opacity-70">© 2024 WeddingAI. All rights reserved.</p>
	</div>
</footer>
