<script lang="ts">
	import { dev } from '$app/environment';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import { handleScroll } from '$lib/utils';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import { inject } from '@vercel/analytics';
	import '../app.css';
	import type { LayoutData } from './$types';
	import { fly } from 'svelte/transition';

	inject({ mode: dev ? 'development' : 'production' });

	export let data: LayoutData;
</script>

{#key data.currentPath}
	<main
		in:fly={{ y: -5, duration: 250, delay: 250 }}
		out:fly={{ y: 5, duration: 250 }}
		class="min-h-[100dvh]"
	>
		<slot />
	</main>
{/key}

<footer use:handleScroll class="fixed bottom-0 left-0 z-50 w-full transition-all duration-150">
	<Navbar />
</footer>
