import Flexsearch, { type Document, type Index } from 'flexsearch';

let pokeIndex: Index;
let pokemones: CachedPokemon[];
let pokeDoc: Document<CachedPokemon[]>;

export function createPokemonIndex(data: CachedPokemon[]) {
	pokeIndex = new Flexsearch.Index({ tokenize: 'forward', cache: true, preset: 'performance' });

	data.forEach((p, i) => {
		const item = `${i}-${p.name}`;
		pokeIndex.addAsync(i, item);
	});

	pokemones = data;
}

export async function searchPokemon(value: string) {
	const match = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	const results = await pokeIndex.searchAsync(match, {
		limit: 50,
		suggest: true
	});

	return results
		.map((index) => pokemones[index as number])
		.map(({ id, name, types }) => ({ id, name, types }));
}
