<script lang="ts">
	import PokeCard from '$lib/components/cards/PokeCard.svelte';
	import SearchBar from '$lib/components/inputs/Search.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { pokemones } = data;

	let value = '';

	$: pesquisa = (val: PokemonList) => {
		if (value) return val.name.includes(value.toLowerCase().trim());
		return true;
	};
</script>

<svelte:head>
	<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
	<title>Pokédex</title>
</svelte:head>

<SearchBar bind:value />

<section class="my-2 flex flex-col gap-2 px-2">
	{#each pokemones.filter(pesquisa) as pokemon, i (i)}
		<PokeCard pokename={pokemon.name} pokemontypes={pokemon.types} id={i + 1} />
	{:else}
		<div>try catching another pokemon</div>
	{/each}
</section>
