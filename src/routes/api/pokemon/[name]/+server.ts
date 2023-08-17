import { error, json } from '@sveltejs/kit';
import type { RequestHandler, RouteParams } from './$types';

const pokemonCache = new Map<string, Pokemon>(); // Utilize um cache local

type Fetch = (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
async function getPokemonData(fetch: Fetch, params: RouteParams) {
	const cachedData = pokemonCache.get(params.name);
	if (cachedData) return cachedData;

	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
	if (!res.ok) {
		throw error(404, `Pokemon ${params.name} not found`);
	}

	const data = (await res.json()) satisfies Pokemon;

	pokemonCache.set(params.name, data);

	return data;
}

export const GET: RequestHandler = async ({ params, fetch, setHeaders }) => {
	try {
		const data = await getPokemonData(fetch, params);

		setHeaders({
			'Cache-Control': `public, s-maxage= ${60 * 60 * 24}`
		});
		return json(data);
	} catch (err) {
		throw error(404, `Pokemon ${params.name} not found`);
	}
};
