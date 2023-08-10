<script lang="ts">
	import { onMount } from 'svelte';
	export let name = '' as Elements | null;
	export let fill = '';
	export let width: number = 18;
	export let height: number = 18;

	interface Icon {
		box: { w: number; h: number };
		svg: string;
	}

	let icon: Icon = {
		box: {
			w: 0,
			h: 0
		},
		svg: ''
	};

	onMount(async () => {
		try {
			const imported = await import('./index.js');
			icon = imported.default[name ?? 'bug'];
		} catch (error) {
			console.error('Error importing icon:', error);
			icon = { box: { w: 0, h: 0 }, svg: '' };
		}
	});
</script>

<svg
	style:--fill-color={fill}
	class={$$props.class}
	{height}
	{width}
	viewBox="0 0 {icon?.box.w} {icon?.box.h}"
>
	{@html icon?.svg}
</svg>

<style>
	svg {
		--fallback: rgb(var(--bg-color));
		fill: var(--fill-color, var(--fallback));
	}
</style>
