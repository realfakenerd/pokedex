import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/pokemon/list?limit=100');
	const pokemones = await res.json() as NamedAPIResourceList[];
	return {
		pokemones
	};
}) satisfies PageLoad;
