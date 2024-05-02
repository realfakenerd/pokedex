import { db } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const res = await fetch('/api/pokemon?limit=1302');
		const typeRes = await fetch('https://pokeapi.co/api/v2/type');

		if (!res.ok) {
			error(res.status, `API request failed with status ${res.status}`);
		}

		const types = (await typeRes.json()) as NamedAPIResourceList;
		// const pokemones = res.json() as Promise<CachedPokemon[]>;
		const pokemones = await res.json() as CachedPokemon[];

		return {
			pokemones,
			types
		};
	} catch (error) {
		console.error('Error fetching Pokemon data:', error);

		return {
			pokemones: [{ id: 0, name: 'ErrorMon', types: [] }] as CachedPokemon[],
			types: []
		};
	}
};
