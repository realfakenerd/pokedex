<script lang="ts">
	import PokeCard from '$lib/components/cards/PokeCard.svelte';
	import SearchBar from '$lib/components/inputs/Search.svelte';
	import { createPokemonIndex, searchPokemon } from '$lib/search';
	import { gibberish } from '$lib/utils.js';
	import { fly, slide } from 'svelte/transition';
	let { data } = $props();
	let { pokemones, types } = data;

	let searchTerm = $state('');
	let results = $state<CachedPokemon[]>([]);

	let indexCreated = $state(false);
	let observer: IntersectionObserver;
	$effect(() => {
		if (!indexCreated) {
			createPokemonIndex(pokemones);
			indexCreated = true;
		};

		if (searchTerm) searchPokemon(searchTerm).then((r) => (results = r));
		else results = pokemones;

		observer = new IntersectionObserver((entries) => {
			const lastCard = entries[entries.length - 1];
			if(!lastCard.isIntersecting) return;

			loadMore();
		}, {threshold: 1});
	});

	let current = $state<number>(10);
	async function loadMore() {
		const limit = pokemones.length;
		if (current >= limit) return;
		current++;
	}

	
	function loadMoreCard(node: HTMLElement) {
		observer.observe(node);
	}
</script>

{#snippet  skeleton()}
<div class="bg-surface-variant relative inline-flex min-h-[118px] animate-pulse rounded-2xl">
	<!--  -->
</div>
{/snippet}

<svelte:head>
	<title>Pokédex</title>
	<link rel="shortcut icon" sizes="48x48" href="/favicon.ico" />
</svelte:head>


<section class="px-2 py-4">
	<SearchBar bind:value={searchTerm} />
</section>
	
<section class="relative flex items-center overflow-hidden">
	<section class="scroll overflow-y-hidden overflow-x-scroll whitespace-nowrap">
		<section class="inline-block overflow-hidden whitespace-nowrap px-2">
			{#if types}
				{#each (types as NamedAPIResourceList).results as type}
					<div
						style:--bg-color={gibberish(type.name)}
						style:--on-color={gibberish(type.name, false)}
						style="background-color: rgb(var(--bg-color)); color: rgb(var(--on-color));"
						class="bg-secondary relative m-2 ml-0 inline-flex h-8 items-center overflow-hidden rounded-lg px-3"
					>
						<button class="block max-w-[20rem] overflow-hidden text-ellipsis whitespace-nowrap">
							{type.name}
						</button>
					</div>
				{/each}
			{/if}
		</section>
	</section>
</section>

<section  class="my-2 grid grid-cols-1 md:grid-cols-3 gap-2 px-2">
	{#if results}
		{#each results.slice(0, current) as { name, id, types }, index (index)}
		<div use:loadMoreCard class="w-full" in:slide={{ duration: 250, axis: 'x' }}>
			<PokeCard {id} pokemontypes={types} pokename={name} />
		</div>
		{:else}
			{@render skeleton()}
			{@render skeleton()}
			{@render skeleton()}
			{@render skeleton()}
			{@render skeleton()}
		{/each}
	{/if}
</section>

<style>
	.scroll::-webkit-scrollbar {
		display: none;
	}
</style>
