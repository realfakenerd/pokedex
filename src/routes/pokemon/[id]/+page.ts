import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	try {
		const res = await fetch(`/api/pokemon/${params.id}`);
		const data = (await res.json()) as Pokemon;
		return {
			pokemon: data,
			streamed: {
				characteristic: (
					await fetch(`https://pokeapi.co/api/v2/characteristic/${data.id}`)
				).json() as Promise<Characteristic>
			}
		};
	} catch (err) {
		throw error(404, `Pokemon ${params.id} not found`)
	}
}) satisfies PageLoad;
