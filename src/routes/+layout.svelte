<script>
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '../app.css';
</script>

<main class="min-h-[100dvh]">
	<slot />
</main>

<footer class="fixed bottom-0 left-0 z-50 w-full">
	<Navbar />
</footer>
