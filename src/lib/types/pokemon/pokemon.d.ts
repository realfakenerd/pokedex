/**
 * ### Pokémon
 * Pokémon are the creatures that inhabit the world of the Pokémon games.
 * They can be caught using Pokéballs and trained by battling with other Pokémon.
 * Each Pokémon belongs to a specific species but may take on a variant which
 * makes it differ from other Pokémon of the same species, such as base
 * stats, available abilities and typings. See Bulbapedia for greater detail.
 */
interface Pokemon {
	/** The identifier for this resource. */
	id: number;

	/** The name for this resource. */
	name: string;

	/** The base experience gained for defeating this Pokémon. */
	base_experience: number;

	/** The height of this Pokémon in decimetres. */
	height: number;

	/**	The weight of this Pokémon in hectograms. */
	weight: number;

	/** Set for exactly one Pokémon used as the default for each species. */
	is_default: boolean;

	/** Order for sorting. Almost national order, except families are grouped together. */
	order: number;

	abilities: PokemonAbility[];

	/** A list of forms this Pokémon can take on. */
	forms: NameAPIResource<string, 'pokemon-form/:id'>[];

	/** A list of game indices relevent to Pokémon item by generation. */
	game_indices: VersionGameIndex[];

	/** A list of items this Pokémon may be holding when encountered. */
	held_items: PokemonHeldItem[];

	/** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
	location_area_encounters: `https://pokeapi.co/api/v2/pokemon/${number}/encounters`;

	/** A list of moves along with learn methods and level details pertaining to specific version groups. */
	moves: PokemonMove[];

	/** A list of details showing types this pokémon had in previous generations */
	past_types: PokemonTypePast[];

	/**	The species this Pokémon belongs to. */
	species: NameAPIResource;

	/**
	 * A set of sprites used to depict this Pokémon in the game.
	 * A visual representation of the various sprites can be
	 * found at PokeAPI/sprites
	 */
	sprites: Sprites;

	/** A list of base stat values for this Pokémon. */
	stats: PokemonStat[];

	/** A list of details showing types this Pokémon has. */
	types: PokemonType[];
}

interface PokemonTypePast {
	/** The last generation in which the referenced pokémon had the listed types. */
	generation: NameAPIResource;
	/**	The types the referenced pokémon had up to and including the listed generation. */
	types: PokemonType[];
}

interface PokemonHeldItem {
	/** The item the referenced Pokémon holds. */
	item: NameAPIResource;
	/** The details of the different versions in which the item is held. */
	version_details: PokemonHeldItemVersion;
}

interface PokemonHeldItemVersion {
	/** The version in which the item is held. */
	version: NameAPIResource;
	/** How often the item is held. */
	rarity: number;
}

/** A list of abilities this Pokémon could potentially have. */
interface PokemonAbility {
	/** Whether or not this is a hidden ability. */
	is_hidden: boolean;
	/** The slot this ability occupies in this Pokémon species. */
	slot: number;
	/** The ability the Pokémon may have. */
	ability: NameAPIResource<Elements, 'ability/:id'>;
}

interface NameAPIResource<T = string, Endpoint = string> {
	/**	The name of the referenced resource. */
	name: T;
	/** The URL of the referenced resource. */
	url: `https://pokeapi.co/api/v2/${Endpoint}/`;
}

/** A list of game indices relevent to Pokémon item by generation. */
interface VersionGameIndex {
	/** The internal id of an API resource within game data. */
	game_index: number;
	/** The version relevent to this game index. */
	version: NameAPIResource<string, 'version/:id'>;
}

/**
 * ### Moves
 * Moves are the skills of Pokémon in battle.
 * In battle, a Pokémon uses one move each turn.
 * Some moves (including those learned by Hidden Machine) can be used
 * outside of battle as well, usually for the purpose of removing
 * obstacles or exploring new areas.
 */
interface PokemonMove {
	/** The move the Pokémon can learn. */
	move: NameAPIResource;

	/** The details of the version in which the Pokémon can learn the move. */
	version_group_details: PokemonMoveVersion[];
}

interface PokemonMoveVersion {
	/** The minimum level to learn the move. */
	level_learned_at: number;

	/** The method by which the move is learned. */
	move_learn_method: NameAPIResource;

	/** The version group in which the move is learned. */
	version_group: NameAPIResource;
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
	/** The default depiction of this Pokémon from the front in battle. */
	front_default?: string;
	/**	The shiny depiction of this Pokémon from the front in battle. */
	front_shiny?: string;
	/** The female depiction of this Pokémon from the front in battle. */
	front_female?: string;
	/**  */
	front_shiny_female?: string;

	back_default?: string;
	back_female?: string;
	back_shiny?: string;
	back_shiny_female?: string;
	other?: Other;
	versions?: Versions;
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
	showdown: Sprites
}

interface PokemonStat {
	/** The effort points (EV) the Pokémon has in the stat. */
	effort: number;
	/** The stat the Pokémon has. */
	stat: NameAPIResource;
	/**	The base value of the stat. */
	base_stat: number;
}

interface PokemonType {
	/** The order the Pokémon's types are listed in. */
	slot: number;
	/** The type the referenced Pokémon has. */
	type: NameAPIResource<Elements>;
}

interface HighestStat {
	name: string;
	url: string;
}