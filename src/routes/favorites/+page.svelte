<script lang="ts">
	import PokeCard from '$lib/components/cards/PokeCard.svelte';
	import { db } from '$lib/db';
	import { liveQuery } from 'dexie';

	let pokemones = liveQuery(() => db.pokemones.toArray());
</script>

<section class="my-2 flex flex-col gap-2 px-2">
	{#if $pokemones}
		{#each $pokemones as pokemon, i (i)}
			<PokeCard id={pokemon.id} pokename={pokemon.name} pokemontypes={pokemon.types} />
		{/each}
	{/if}
</section>
