import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0');
	const pokemones = (await res.json()) as PokemonList;

	pokemones.results = pokemones.results.map(async (poke) => {
		// @ts-expect-error ssss
		const res = await fetch(poke.url);
		const pokemon = (await res.json()) as Pokemon;
		return pokemon;
	});
	return {
		pokemones
	};
}) satisfies PageLoad;
