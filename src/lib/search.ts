import FlexSearch from 'flexsearch';

let pokeIndex: FlexSearch.Index;
let pokemones: CachedPokemon[];

export function createPokemonIndex(data: CachedPokemon[]) {
	pokeIndex = new FlexSearch.Index({ tokenize: 'forward' });
	data.forEach((p, i) => {
		const item = `${i}-${p.name}`;
		pokeIndex.addAsync(i, item);
	});

	pokemones = data;
}

export function searchPokemon(value: string) {
	const match = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	const results = pokeIndex.search(match);
	return results
		.map((index) => pokemones[index as number])
		.map(({ id, name, types }) => ({ id, name, types }));
}
