import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/pokemon/list?limit=151');
	const pokemones = await res.json() as CachedPokemon[];
	return {
		pokemones
	};
}) satisfies PageLoad;
