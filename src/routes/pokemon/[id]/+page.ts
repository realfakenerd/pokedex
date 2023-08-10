import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
	const data = (await res.json()) as Pokemon;	
	return {
		pokemon: data,
		streamed: {
			characteristic: (await fetch(`https://pokeapi.co/api/v2/characteristic/${data.id}`)).json() as Promise<Characteristic>
		}
	};
}) satisfies PageLoad;
