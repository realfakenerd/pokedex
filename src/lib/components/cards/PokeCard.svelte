<script lang="ts">
	import Icon from '$lib/elements/Icon.svelte';
	import { gibberish } from '$lib/utils';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import PokePill from './PokePill.svelte';
	import { db } from '$lib/db';
	import { onMount } from 'svelte';
	export let id = 0;
	export let pokemontypes: PokemonType[];
	export let pokename: string;

	let dispatched = false;
	let did: NamedAPIResourceList | undefined;
	onMount(async () => {
		did = await db.pokemones.get(id);
		if (did) dispatched = !dispatched;
	});

	async function dispatchAdd() {
		dispatched = !dispatched;
		if (!did) {
			did = await db.pokemones.add({
				id,
				name: pokename,
				types: pokemontypes
			});
			return;
		}
		await db.pokemones.delete(id);
	}
</script>

<section
	in:fly={{ y: 10, duration: 100, easing: cubicOut }}
	style:--bg-color={gibberish(pokemontypes[0].type.name)}
	style:--on-color={gibberish(pokemontypes[0].type.name, false)}
	class="poke-container group"
>
	<section class="info-section">
		<header
			class="flex flex-col items-start justify-start transition-colors group-hover:text-[rgb(var(--bg-color))]"
		>
			<a href={`/pokemon/${pokename}`} class="text-title-small group-hover:underline">
				Nº {id < 100 ? (id < 10 ? `00${id}` : `0${id}`) : id}
			</a>
			<a href={`/pokemon/${pokename}`} class="text-title-large capitalize">
				{pokename}
			</a>
		</header>
		<main class="inline-flex w-full items-start justify-start gap-1">
			<PokePill class="w-1/2 px-1.5 py-1" pokemontypes={pokemontypes[0].type.name} />
			{#if pokemontypes.length > 1}
				<PokePill class="w-1/2 px-1.5 py-1" pokemontypes={pokemontypes[1].type.name} />
			{/if}
		</main>
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
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png"
				alt={`Image of ${pokename}`}
			/>
		</figure>
	</section>

	<button
		aria-label={dispatched ? 'Remove from Favorites' : 'Add to Favorites'}
		on:click={dispatchAdd}
		class="bg-surface/30 ring-on-surface absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full ring-2 backdrop-blur-sm"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			class="stroke-on-surface {dispatched ? 'fill-on-surface' : 'fill-none'}"
		>
			<path
				d="M13.9 3.07a3.67 3.67 0 0 0-5.2 0l-.7.71-.7-.7a3.67 3.67 0 1 0-5.2 5.18l.71.7L8 14.17l5.19-5.2.7-.7a3.67 3.67 0 0 0 0-5.19Z"
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
