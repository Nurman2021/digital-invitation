<script>
	import HeroSection from '$lib/components/HeroSection.svelte';
	import StatsSection from '$lib/components/StatsSection.svelte';
	import FeaturesSection from '$lib/components/FeaturesSection.svelte';
	import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
	import FAQSection from '$lib/components/FAQSection.svelte';
	import CTASection from '$lib/components/CTASection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ProductPage from '$lib/components/ProductPage.svelte';
</script>

<svelte:head>
	<title>WeddingAI - Empowering Your Wedding Journey with AI-Powered Planning</title>
	<meta
		name="description"
		content="Transform your wedding planning with WeddingAI. AI-powered platform for seamless vendor coordination, guest management, and personalized wedding experiences. Start planning your perfect day!"
	/>
	<meta
		name="keywords"
		content="wedding planning, AI wedding planner, wedding coordination, wedding vendors, digital wedding, smart wedding planning"
	/>
	<meta property="og:title" content="WeddingAI - AI-Powered Wedding Planning Platform" />
	<meta
		property="og:description"
		content="Plan your perfect wedding with AI assistance. Smart vendor matching, guest coordination, and personalized recommendations."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<HeroSection />
<StatsSection />
<FeaturesSection />
<ProductPage />
<TestimonialsSection />
<FAQSection />
<CTASection />
<!-- <Footer /> -->
