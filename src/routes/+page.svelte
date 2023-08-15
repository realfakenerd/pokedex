<script lang="ts">
	import PokeCard from '$lib/components/cards/PokeCard.svelte';
	import SearchBar from '$lib/components/inputs/Search.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const { pokemones } = data;

	let searchVal = '';
</script>

<svelte:head>
	<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
	<title>Pokédex</title>
</svelte:head>

<SearchBar bind:value={searchVal} />

<section class="my-2 flex flex-col gap-2 px-2">
	{#each pokemones as pokemon, i (i)}
		<PokeCard
			pokename={pokemon.name}
			pokemontypes={pokemon.types}
			sprites={pokemon.sprites}
			id={i + 1}
		/>
	{/each}
</section>
