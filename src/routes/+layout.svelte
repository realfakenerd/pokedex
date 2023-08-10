<script>
	import { dev } from '$app/environment';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import { handleScroll } from '$lib/utils';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import { inject } from '@vercel/analytics';
	import '../app.css';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<main class="min-h-[100dvh]">
	<slot />
</main>

<footer use:handleScroll class="fixed bottom-0 left-0 z-50 w-full transition-all duration-150">
	<Navbar />
</footer>
