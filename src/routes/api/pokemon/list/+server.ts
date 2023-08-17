import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

async function* fetchPokeData(poke: NameAPIResource[]) {
	for (const p of poke) {
		const res = await fetch(p.url);
		const data = await res.json() as Pokemon;

		yield {
			id: data.id,
			name: data.name,
			types: data.types
		}
	}
}

export const GET = (async ({ fetch, url }) => {
	const limit = url.searchParams.get('limit') ?? 10;

	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
	const data = await res.json() as NamedAPIResourceList;

	const list = []
	for await (const pokemon of fetchPokeData(data.results)) {
		list.push(pokemon)
	}

	return json(list);
}) satisfies RequestHandler;

// const pokelist = await Promise.all(
// 	data.results.map(async (poke) => {
// 		const res = await fetch(`/api/pokemon/${poke.name}`);
// 		const data = (await res.json()) as Pokemon;

// 		return {
// 			id: data.id,
// 			name: data.name,
// 			types: data.types,
// 		} as PokemonListDef;
// 	})
// );
