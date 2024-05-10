<script lang="ts">
	import PokeCard from '$lib/components/cards/PokeCard.svelte';
	import { db } from '$lib/db';
	import { liveQuery } from 'dexie';

	let pokemones = liveQuery(() => db.favorites.toArray());
</script>

<header class="my-4 px-2">
	<h1 class="text-title-large">Favoritos</h1>
</header>

<section class="my-2 flex flex-col gap-2 px-2 min-h-[100dvh]">
	{#if $pokemones}
		{#each $pokemones as pokemon, i (i)}
			<PokeCard id={pokemon.id} pokename={pokemon.name} pokemontypes={pokemon.types} />
		{:else}
			<figure class="flex flex-col text-center text-on-surface">
				<img
					loading="lazy"
					style="width: 212px; height: 212px;"
					src="Magikarp_Jump_Pattern_01 1.png"
					alt="Favorite Pokémon not found"
					class="self-center"
				/>
				<figcaption>
					<h2 class="mt-4 w-full text-title-medium">
						Você não favoritou nenhum Pokémon :(
					</h2>
					<p class="mt-2 w-full text-body-medium">
						Clique no ícone de coração dos seus pokémons favoritos e eles aparecerão aqui.
					</p>
				</figcaption>
			</figure>
		{/each}
	{/if}
</section>
