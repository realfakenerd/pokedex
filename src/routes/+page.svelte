<script lang="ts">
	import PokeCard from '$lib/components/cards/PokeCard.svelte';
	import SearchBar from '$lib/components/inputs/Search.svelte';
	import { LRUCache } from '$lib/cache.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let value = '';
	const cache = new LRUCache<string, boolean>({
		max: 1000,
		ttl: 1000 * 60 * 3
	});

	const memoizedFilterPokemon = (pokemon: CachedPokemon, searchTerm: string) => {
		const cacheKey = `${pokemon.name}-${searchTerm}`;
		const cachedResult = cache.get(cacheKey);
		if (cachedResult !== undefined) return cachedResult;

		const result = !searchTerm || pokemon.name.includes(searchTerm.toLowerCase().trim());
		cache.set(cacheKey, result);
		return result;
	};

	$: filteredPokemon = data.pokemones.filter((pokemon) => memoizedFilterPokemon(pokemon, value));

	let next = data.next;
	async function loadMore() {
		const res = await fetch(next);
		const newPokemones = (await res.json()) as CachedPokemonList;

		data.pokemones = [...data.pokemones, ...newPokemones.results];
		next = newPokemones.next;
	}
</script>

<svelte:head>
	<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
	<title>Pokédex</title>
</svelte:head>

<SearchBar bind:value />

<section class="my-2 flex flex-col gap-2 px-2">
	{#each filteredPokemon as {id, name, types}, index (index)}
		<PokeCard {id} pokename={name} pokemontypes={types}/>
	{:else}
		<div>try catching another pokemon</div>
	{/each}
</section>
<section class="flex w-full justify-center p-2">
	<button
		on:click={loadMore}
		class="interactive-bg-primary inline-flex w-full flex-col place-items-center gap-2 rounded-3xl px-4 py-2 capitalize"
	>
		Load More
	</button>
</section>
