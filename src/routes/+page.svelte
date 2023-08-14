<script lang="ts">
	import PokeCard from '$lib/components/cards/PokeCard.svelte';
	import SearchBar from '$lib/components/inputs/Search.svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	export let data: PageData;

	const { pokemones } = data;

	let searchVal = ''

	const list = writable(pokemones.results);

	$: filter = () => {
		if(searchVal) return pokemones.results.filter(val => val.then(val => val.name.includes(searchVal.toLowerCase())))
		Promise.all(pokemones.results)
		.then(value => {
			const e = value.filter(poke => {
				return poke.name.includes(searchVal)
			})
		})
		
		return pokemones.results
	}
</script>

<svelte:head>
	<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
	<title>Pokédex</title>
</svelte:head>

<SearchBar bind:value={searchVal} on:keyup={filter}/>

<section class="my-2 flex flex-col gap-2 px-2">
	{#each filter() as pokemon, i (i)}
		{#await pokemon}
			<div class="rounded-2xl animate-pulse bg-surface-variant min-w-[368px] min-h-[120px]" />
		{:then pokemon}
			<PokeCard pokename={pokemon.name} pokemontypes={pokemon.types} sprites={pokemon.sprites.front_default} id={i + 1} />
		{/await}
	{/each}
</section>
