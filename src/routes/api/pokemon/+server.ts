import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ fetch, setHeaders }) => {
	setHeaders({
		'Cache-Control': `public, s-maxage= ${60 * 60 * 24}`
	})
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
	const pokemones = await res.json();
	return json(pokemones);
}) satisfies RequestHandler;
