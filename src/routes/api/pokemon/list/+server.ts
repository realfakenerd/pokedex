import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface CachedPokemon {
	id: number;
	name: string;
	types: PokemonType[];
}

const pokemonCache: Record<string, CachedPokemon> = {};

async function fetchPokeData(poke: NameAPIResource[]): Promise<Pokemon[]> {
	const concurrentRequests = 20; // Número máximo de requisições simultâneas

	const batches: NameAPIResource[][] = [];
	for (let i = 0; i < poke.length; i += concurrentRequests) {
		batches.push(poke.slice(i, i + concurrentRequests));
	}

	const pokemons: Pokemon[] = [];

	for (const batch of batches) {
		const promises = batch.map(async (p) => {
			if (pokemonCache[p.name]) return pokemonCache[p.name];

			let attempts = 3;
			while (attempts > 0) {
				try {
					const res = await fetch(p.url);
					const data = (await res.json()) as Pokemon;

					const cachedData = {
						id: data.id,
						name: data.name,
						types: data.types
					} satisfies CachedPokemon;

					pokemonCache[data.name] = cachedData;

					return cachedData;
				} catch (error) {
					attempts--;
				}
			}

			return null;
		});

		const batchResults = await Promise.all(promises);
		pokemons.push(...batchResults.filter((pokemon) => pokemon !== null));
	}

	return pokemons;
}

export const GET: RequestHandler = async ({ fetch, url }) => {
	const limit = url.searchParams.get('limit') ?? 10;

	const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
	const data = (await res.json()) as NamedAPIResourceList;

	const pokemons = await fetchPokeData(data.results);

	const list = pokemons.map((pokemon) => ({
		id: pokemon.id,
		name: pokemon.name,
		types: pokemon.types
	}));
	return json(list);
};
