import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
interface PokemonListDef {
	id: number;
	name: string;
	types: PokemonType[];
}

export const GET = (async ({ fetch, url }) => {
	const limit = url.searchParams.get('limit') ?? 10;

	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
	const data = (await res.json()) as PokemonList;

	const pokelist = await Promise.all(
		data.results.map(async (poke) => {
			const res = await fetch(`/api/pokemon/${poke.name}`);
			const data = (await res.json()) as Pokemon;

			return {
				id: data.id,
				name: data.name,
				types: data.types,
			} as PokemonListDef;
		})
	);

	return json(pokelist);
}) satisfies RequestHandler;
