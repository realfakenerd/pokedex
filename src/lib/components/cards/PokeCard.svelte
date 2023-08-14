<script lang="ts">
	import Icon from '$lib/elements/Icon.svelte';
	import { gibberish } from '$lib/utils';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import PokePill from './PokePill.svelte';
	export let id = 0;
	export let pokemontypes: Pokemon['types'];
	export let pokename: string;
	export let sprites: Pokemon['sprites']['front_default'];
</script>

<section
	in:fly={{ y: 5, duration: 200, easing: cubicOut }}
	style:--bg-color={gibberish(pokemontypes[0].type.name)}
	style:--on-color={gibberish(pokemontypes[0].type.name, false)}
	class="poke-container group"
>
	<section class="info-section">
		<hgroup
			class="text-on-surface-variant flex flex-col items-start justify-start transition-colors group-hover:text-[rgb(var(--bg-color))]"
		>
			<a href={`/pokemon/${pokename}`} class="text-title-small group-hover:underline">
				Nº {id < 100 ? (id < 10 ? `00${id}` : `0${id}`) : id}
			</a>
			<a href={`/pokemon/${pokename}`} class="text-title-large capitalize">
				{pokename}
			</a>
		</hgroup>
		<div class="inline-flex w-full items-start justify-start gap-1">
			<PokePill class="w-1/2 px-1.5 py-1" pokemontypes={pokemontypes[0].type.name} />
			{#if pokemontypes.length > 1}
				<PokePill class="w-1/2 px-1.5 py-1" pokemontypes={pokemontypes[1].type.name} />
			{/if}
		</div>
	</section>
	<section class="image-section">
		<div>
			<Icon
				fill="rgb(var(--color-surface-variant))"
				class="h-[94px] w-[94px]"
				name={pokemontypes[0].type.name}
			/>
		</div>
		<figure>
			<img
				width="256"
				height="256"
				loading={id <= 6 ? 'eager' : 'lazy'}
				decoding="async"
				src={sprites}
				alt={pokename}
			/>
		</figure>
	</section>

	<button
		class="bg-surface/30 ring-on-surface absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full ring-2 backdrop-blur-sm"
	>
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			class="stroke-on-surface fill-none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Vector"
				d="M13.8931 3.07309C13.5526 2.73242 13.1483 2.46218 12.7033 2.27781C12.2584 2.09343 11.7814 1.99854 11.2998 1.99854C10.8181 1.99854 10.3412 2.09343 9.89618 2.27781C9.45121 2.46218 9.04692 2.73242 8.70642 3.07309L7.99975 3.77975L7.29309 3.07309C6.60529 2.38529 5.67244 1.99889 4.69975 1.99889C3.72706 1.99889 2.79422 2.38529 2.10642 3.07309C1.41863 3.76088 1.03223 4.69373 1.03223 5.66642C1.03223 6.63911 1.41863 7.57196 2.10642 8.25975L2.81309 8.96642L7.99975 14.1531L13.1864 8.96642L13.8931 8.25975C14.2337 7.91925 14.504 7.51496 14.6884 7.06999C14.8727 6.62502 14.9676 6.14808 14.9676 5.66642C14.9676 5.18476 14.8727 4.70782 14.6884 4.26285C14.504 3.81788 14.2337 3.41359 13.8931 3.07309V3.07309Z"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
</section>

<style>
	.poke-container {
		@apply bg-surface-variant relative inline-flex min-h-[118px] rounded-2xl;
	}

	.image-section {
		background-color: rgb(var(--bg-color));
		color: rgb(var(--on-color));

		@apply relative flex min-h-[102px] min-w-[126px] items-center justify-center rounded-l-xl rounded-r-2xl transition-colors;
	}

	.image-section > div {
		@apply absolute inset-0 z-0 flex h-full w-full items-center justify-center;
	}

	.image-section > figure {
		@apply z-10 max-h-[94px] max-w-[94px];
	}

	.image-section img {
		image-rendering: pixelated;
	}

	.info-section {
		@apply inline-flex w-full flex-col items-start justify-center gap-1 p-4 pl-6;
	}
</style>
