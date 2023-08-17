<script lang="ts">
	import PokeCard from '$lib/components/cards/PokeCard.svelte';
	import SearchBar from '$lib/components/inputs/Search.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { pokemones } = data;

	let value = '';

	function filterPokemon(pokemon: CachedPokemon, searchTerm: string) {
		if (!searchTerm) return true;
		return pokemon.name.includes(searchTerm.toLowerCase().trim());
	}

	$: filteredPokemon = pokemones.filter((pokemon) => filterPokemon(pokemon, value));
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
