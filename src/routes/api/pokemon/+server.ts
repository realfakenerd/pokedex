import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ fetch }) => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0');
	const pokemones = await res.json();
	return json(pokemones);
}) satisfies RequestHandler;
