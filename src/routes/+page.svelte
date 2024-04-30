<script lang="ts">
	import PokeCard from '$lib/components/cards/PokeCard.svelte';
	import SearchBar from '$lib/components/inputs/Search.svelte';
	import { createPokemonIndex, searchPokemon } from '$lib/search';

	let { data } = $props();

	let { pokemones } = data;
	let value = $state('');

	let results = $state<CachedPokemon[]>([]);
	$effect(() => {
		if (pokemones) createPokemonIndex(pokemones.results);
		if (value) {
			searchPokemon(value).then((res) => (results = res));
		} else results = pokemones.results;
	});

	let current = $state<number>(10);
	async function loadMore() {
		const limit = pokemones.results.length;
		if (current >= limit) return;
		current += 10;
	}
</script>

<svelte:head>
	<title>Pokédex</title>
	<link rel="shortcut icon" sizes="48x48" href="/favicon.ico" />
</svelte:head>

<SearchBar bind:value />

<section  class="my-2 flex flex-col gap-2 px-2">
	{#each results.slice(0, current) as { name, id, types }, index (index)}
		<PokeCard {id} pokemontypes={types} pokename={name} />
	{:else}
		<div class="bg-surface-variant relative inline-flex min-h-[118px] rounded-2xl animate-pulse">
			<!--  -->
		</div>
	{/each}
</section>
<section class="flex w-full justify-center p-2">
	<button
		onclick={loadMore}
		class="interactive-bg-primary inline-flex w-full flex-col place-items-center gap-2 rounded-3xl px-4 py-2 capitalize"
	>
		Load More
	</button>
</section>
