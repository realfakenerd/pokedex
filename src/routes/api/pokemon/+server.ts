import { error, json } from '@sveltejs/kit';
import { LRUCache } from 'lru-cache';
import type { RequestHandler } from './$types';

const pokemonCache = new LRUCache<string, CachedPokemon>({
	max: 200,
	ttl: 2000
});

type Fetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;

/**
 * Asynchronous generator function to fetch Pokemon data in batches.
 *
 * @param fetch - The fetch function to make HTTP requests.
 * @param poke - An array of Pokemon resources to fetch.
 * @returns An async generator yielding cached Pokemon data.
 */
async function* fetchPokeData(fetch: Fetch, poke: NameAPIResource[]) {
	const concurrentRequests = 20;

	let i = 0;
	for (i; i < poke.length; i += concurrentRequests) {
		const batch = poke.slice(i, i + concurrentRequests);
		const promises = batch.map(async (p) => {
			const cachedPokemon = pokemonCache.get(p.name);
			if (cachedPokemon) return cachedPokemon;

			let attempts = 3;
			while (attempts > 0) {
				try {
					const res = await fetch(`/api/pokemon/${p.name}`);

					if (!res.ok) {
						error(res.status, `Failed to fetch pokemon data for ${p.name}: ${res.statusText}`);
					}

					const data = (await res.json()) as Pokemon;

					const cachedData = {
						id: data.id,
						name: data.name,
						types: data.types
					} as CachedPokemon;

					pokemonCache.set(data.name, cachedData);

					return cachedData;
				} catch (error) {
					attempts--;
					console.error('Error fetching pokemon data:', error);
				}
			}

			return null;
		});

		const batchResults = await Promise.all(promises);
		yield* batchResults.filter((pokemon) => pokemon !== null);
	}
}

export const GET: RequestHandler = async ({ fetch, url, setHeaders }) => {
	setHeaders({
		'Cache-Control': `public, s-maxage= ${60 * 60 * 24}`
	});

	const limit = url.searchParams.get('limit') ?? 100;

	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);

		if (!res.ok) {
			error(res.status, `Failed to fetch pokemon list: ${res.statusText}`);
		}

		const data = (await res.json()) as NamedAPIResourceList;

		const pokemons = [];
		for await (const pokemon of fetchPokeData(fetch, data.results)) {
			pokemons.push({
				id: pokemon?.id,
				name: pokemon?.name,
				types: pokemon?.types
			});
		}

		return json(pokemons);
	} catch (error) {
		console.error('Error fetching pokemon data:', error);
		return json({ error: 'Failed to fetch pokemon data' }, { status: 500 });
	}
};
