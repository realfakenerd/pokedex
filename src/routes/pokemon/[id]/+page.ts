import type { Pokemon } from '$lib/lib';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
	const data = (await res.json()) as Pokemon;

	return {
		pokemon: data
	};
}) satisfies PageLoad;
