import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ params, fetch, setHeaders }) => {
    try {
        setHeaders({
            'Cache-Control': `public, s-maxage= ${60 * 60 * 24}`
        });
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
		const data = await res.json();

		return json(data);
	} catch (err) {
		throw error(404, `Pokemon ${params.name} not found`);
	}
}) satisfies RequestHandler;