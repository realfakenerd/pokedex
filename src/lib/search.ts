import FlexSearch from 'flexsearch';

let pokeIndex: FlexSearch.Worker;
let pokemones: CachedPokemon[];

export function createPokemonIndex(data: CachedPokemon[]) {
	pokeIndex = new FlexSearch.Worker({ tokenize: 'forward', cache: true, preset: 'score' });

	data.forEach((p, i) => {
		const item = `${i}-${p.name}`;
		pokeIndex.addAsync(i, item);
	});

	pokemones = data;
}

export async function searchPokemon(value: string) {
	const match = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	const results = await pokeIndex.searchAsync(match, {
		limit: 5,
		suggest: true
	});

	return results
		.map((index) => pokemones[index as number])
		.map(({ id, name, types }) => ({ id, name, types }));
}
