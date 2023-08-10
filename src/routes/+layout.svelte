<script>
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '../app.css';
	import { handleScroll } from '$lib/utils';
</script>

<main class="min-h-[100dvh]">
	<slot />
</main>

<footer use:handleScroll class="fixed bottom-0 left-0 z-50 transition-all duration-150 w-full">
	<Navbar />
</footer>
