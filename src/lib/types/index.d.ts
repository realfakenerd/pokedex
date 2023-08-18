/* The `CachedPokemon` interface is defining the structure of an object that represents a cached
Pokémon. It has three properties: */
interface CachedPokemon {
	id: number;
	name: string;
	types: PokemonType[];
}

type Elements =
	| 'water'
	| 'dragon'
	| 'electric'
	| 'fairy'
	| 'ghost'
	| 'fire'
	| 'ice'
	| 'grass'
	| 'bug'
	| 'fighting'
	| 'normal'
	| 'dark'
	| 'steel'
	| 'rock'
	| 'psychic'
	| 'ground'
	| 'poison'
	| 'flying';