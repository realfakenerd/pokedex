<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import { handleScroll } from '$lib/utils';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '../app.css';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let {data, children} = $props();
</script>

{#key data.currentPath}
	<main class="min-h-[100dvh]">
		{@render children()}
	</main>
{/key}

<footer use:handleScroll class="fixed bottom-0 left-0 z-50 w-full transition-all duration-150">
	<Navbar />
</footer>

<style>
	:global(:root) {
		color-scheme: light dark;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateY(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateY(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation: 110ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			250ms cubic-bezier(0.291, 0.281, 0, 1.2) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			500ms cubic-bezier(0.291, 0.281, 0, 1.2) both slide-from-right;
	}
</style>
