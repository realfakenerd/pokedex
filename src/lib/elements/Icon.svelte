<script lang="ts">
	interface Props {
		class?: string;
		name?: Elements;
		fill?: string;
		width?: number;
		height?: number;
	}

	interface Icon {
		box: { w: number; h: number };
		svg: string;
	}

	let { class: className = '', name, fill = '', width = 18, height = 18 }: Props = $props();
	let icon: Icon = $state({
		box: {
			w: 0,
			h: 0
		},
		svg: ''
	});

	$effect(() => {
		import('./index.js')
			.then((module) => (icon = module.default[name ?? 'bug']))
			.catch(() => (icon = { box: { w: 0, h: 0 }, svg: '' }));
	});

</script>

<svg
	style:--fill-color={fill}
	class={className}
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
