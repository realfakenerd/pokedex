import type { PageLoad } from './$types';
interface PokemonListDef {
	id: number;
	name: string;
	types: PokemonType[];
}
export const load = (async ({ fetch }) => {
	const res = await fetch('/api/pokemon/list?limit=100');
	const pokemones = await res.json() as PokemonListDef[];
	return {
		pokemones
	};
}) satisfies PageLoad;
