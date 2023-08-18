import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	try {
		const res = await fetch(`/api/pokemon/${params.id}`);
		const data = (await res.json()) as Pokemon;

		const hiv = data.stats.reduce((maxStat, stat) => {
			return stat.base_stat > maxStat.base_stat ? stat : maxStat;
		}, data.stats[0]);

		return {
			pokemon: data,
			streamed: {
				characteristic: (
					await fetch(`https://pokeapi.co/api/v2/characteristic/${Math.floor(hiv.base_stat / 5)}`)
				).json() as Promise<Characteristic>,
				specie: (await fetch(data.species.url)).json() as Promise<PokemonSpecies>
			}
		};
	} catch (err) {
		throw error(404, `Pokemon ${params.id} not found`);
	}
}) satisfies PageLoad;
