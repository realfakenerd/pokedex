interface PokemonList {
	count: number;
	next: string;
	previous: null;
	results: Promise<Pokemon>[];
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

interface Pokemon {
	abilities: Ability[];
	base_experience: number;
	forms: Species[];
	game_indices: GameIndex[];
	height: number;
	held_items: any[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: Move[];
	name: string;
	order: number;
	past_types: any[];
	species: Species;
	sprites: Sprites;
	stats: Stat[];
	types: Type[];
	weight: number;
}

interface Ability {
	ability: Species;
	is_hidden: boolean;
	slot: number;
}

interface Species {
	name: Elements;
	url: string;
}

interface GameIndex {
	game_index: number;
	version: Species;
}

interface Move {
	move: Species;
	version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
	level_learned_at: number;
	move_learn_method: Species;
	version_group: Species;
}

interface GenerationV {
	'black-white': Sprites;
}

interface GenerationIv {
	'diamond-pearl': Sprites;
	'heartgold-soulsilver': Sprites;
	platinum: Sprites;
}

interface Versions {
	'generation-i': GenerationI;
	'generation-ii': GenerationIi;
	'generation-iii': GenerationIii;
	'generation-iv': GenerationIv;
	'generation-v': GenerationV;
	'generation-vi': { [key: string]: Home };
	'generation-vii': GenerationVii;
	'generation-viii': GenerationViii;
}

interface Sprites {
	back_default?: string;
	back_female?: string;
	back_shiny?: string;
	back_shiny_female?: string;
	front_default?: string;
	front_female?: string;
	front_shiny?: string;
	front_shiny_female?: string;
	other?: Other;
	versions?: Versions;
	animated?: Sprites;
}

interface GenerationI {
	'red-blue': RedBlue;
	yellow: RedBlue;
}

interface RedBlue {
	back_default: string;
	back_gray: string;
	back_transparent: string;
	front_default: string;
	front_gray: string;
	front_transparent: string;
}

interface GenerationIi {
	crystal: Crystal;
	gold: Gold;
	silver: Gold;
}

interface Crystal {
	back_default: string;
	back_shiny: string;
	back_shiny_transparent: string;
	back_transparent: string;
	front_default: string;
	front_shiny: string;
	front_shiny_transparent: string;
	front_transparent: string;
}

interface Gold {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
	front_transparent?: string;
}

interface GenerationIii {
	emerald: OfficialArtwork;
	'firered-leafgreen': Gold;
	'ruby-sapphire': Gold;
}

interface OfficialArtwork {
	front_default: string;
	front_shiny: string;
}

interface Home {
	front_default: string;
	front_female: null;
	front_shiny: string;
	front_shiny_female: null;
}

interface GenerationVii {
	icons: DreamWorld;
	'ultra-sun-ultra-moon': Home;
}

interface DreamWorld {
	front_default: string;
	front_female: null;
}

interface GenerationViii {
	icons: DreamWorld;
}

interface Other {
	dream_world: DreamWorld;
	home: Home;
	'official-artwork': OfficialArtwork;
}

interface Stat {
	base_stat: number;
	effort: number;
	stat: Species;
}

interface Type {
	slot: number;
	type: Species;
}

interface Characteristic {
	descriptions: Description[];
	gene_modulo: number;
	highest_stat: HighestStat;
	id: number;
	possible_values: number[];
}

interface Description {
	description: string;
	language: Language;
}

interface Language {
	name: string;
	url: string;
}

interface HighestStat {
	name: string;
	url: string;
}
