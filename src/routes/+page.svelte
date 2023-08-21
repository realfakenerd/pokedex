<script lang="ts">
	import PokeCard from '$lib/components/cards/PokeCard.svelte';
	import SearchBar from '$lib/components/inputs/Search.svelte';
	import type { PageData } from './$types';
	import { LRUCache } from 'lru-cache';

	export let data: PageData;

	$: ({ pokemones } = data);

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
	$: filteredPokemon = pokemones.filter((pokemon) => memoizedFilterPokemon(pokemon, value));

	let next = data.next;
	async function loadMore() {
		const res = await fetch(next);
		const newPokemones = (await res.json()) as CachedPokemonList;

		pokemones = [...pokemones, ...newPokemones.results];
		next = newPokemones.next;
		console.log(pokemones);
	}
</script>

<svelte:head>
	<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
	<title>Pokédex</title>
</svelte:head>

<SearchBar bind:value />

<section class="my-2 flex flex-col gap-2 px-2">
	{#each filteredPokemon as pokemon (pokemon.id)}
		<PokeCard pokename={pokemon.name} pokemontypes={pokemon.types} id={pokemon.id} />
	{:else}
		<div>try catching another pokemon</div>
	{/each}
</section>
<section class="flex w-full justify-center py-2">
	<button on:click={loadMore} class="bg-surface-variant w-1/3 p-2">Load more</button>
</section>
