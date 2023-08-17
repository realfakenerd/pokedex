<script lang="ts">
	import PokeCard from '$lib/components/cards/PokeCard.svelte';
	import SearchBar from '$lib/components/inputs/Search.svelte';
	import type { PageData } from './$types';
	import { LRUCache } from 'lru-cache';

	export let data: PageData;

	const { pokemones } = data;

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
