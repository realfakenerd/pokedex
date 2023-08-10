import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/pokemon');
	const pokemones = (await res.json()) as PokemonList;

	pokemones.results = pokemones.results.map(async (poke) => {
		// @ts-expect-error ssss
		const res = await fetch(`/api/pokemon/${poke.name}`);
		const pokemon = (await res.json()) as Pokemon;
		return pokemon;
	});
	return {
		pokemones
	};
}) satisfies PageLoad;
