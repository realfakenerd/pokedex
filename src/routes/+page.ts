import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/pokemon');
	const pokemones = await res.json() as CachedPokemonList;
	return {
		next: pokemones.next,
		pokemones: pokemones.results
	};
}) satisfies PageLoad;
