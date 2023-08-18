interface PokemonSpecies {
	/** The identifier for this resource. */
	id: number;
	/** The name for this resource. */
	name: string;
	/**
	 * The order in wich species should be sorted. Based on
	 * National Dex order. Expept families are grouped together
	 * and sorted by stage.
	 */
	order: number;
	/**
	 * The chance of this Pokémon being female.
	 * In eighths: or -1 for genderless.
	 */
	gender_rate: number;
	/**
	 * The base capture reage: up to 255. The higher the number. the
	 * easeier the catch.
	 */
	capture_rate: number;
	/**
	 * The happiness when caught by a normal Pokéball: up to 255.
	 * The higher the number. the happier the Pokémon.
	 */
	base_happiness: number;
	/** Wheter or not this is a baby Pokémon. */
	is_baby: boolean;
	/** Wheter or not this is a legendary Pokémon. */
	is_legendary: boolean;
	/** Wheter or not this is a mythical Pokémon. */
	is_mythical: boolean;
	/**
	 * Initial hatch counter: one must walk 255 * (hatch_counter + 1)
	 * steps before this Pokémon's egg hatches, unless utilizing bonuses
	 * like Flame Body's.
	 */
	hatch_counter: number;
	/** Whether or not this Pokémon has visual gender differences. */
	has_gender_differences: boolean;
	/**
	 * Wheter or not this Pokémon has multiple forms and can switch
	 * between them.
	 */
	forms_switchable: boolean;
	/** The rate at wich this Pokémon species gains levels. */
	growth_rate: NameAPIResource<GrowthRateNames, 'growth-rate/:id'>;
	/**
	 * A list of Pokedexes and the indexes reserved within them
	 * for this Pokémon species.
	 */
	pokedex_numbers: PokemonSpeciesDexEntry[];
	/** A list of egg groups this Pokémon species is a menber of. */
	egg_groups: NameAPIResource[];
	/** The color of this Pokémon for Pokédex search. */
	color: NameAPIResource<ColorNames, 'pokemon-color/:id'>;
	/** The shape of this Pokémon for Pokédex search. */
	shape: NameAPIResource<ShapeNames, 'pokemon-shape/:id'>;
	/** The Pokémon species tha evolves into this Pokemon_species */
	evolves_from_species?: NameAPIResource<string, 'pokemon-species/:id'>;
	/** The habitat this Pokémon species can be encountered in. */
	habitat: NameAPIResource<HabitatNames, 'pokemon-habitat/:id'>;
	/** The generation this Pokémon species was introduced in. */
	generation: NameAPIResource<GenerationNames, 'generation/:id'>;
	/** The name of this resource listed in different languages. */
	names: Name[];
	/**
	 * A list of encounters that can be had with this Pokémon species
	 * in pal park.
	 */
	pal_park_encounters: PalParkEncounterArea[];
	/** A list of flavor text entries for this Pokémon species. */
	flavor_text_entries: FlavorText[];
	/**
	 * Descriptions of different forms Pokémon take on within the
	 * Pokémon species
	 */
	form_descriptions: Description[];
	/** The genis of this Pokémon species listed in multiple languages. */
	genera: Genus[];
	/** The evolution chain this Pokémon species is a member of. */
	evolution_chain: APIResource;
	/** A list of the Pokémon that exist within this Pokémon species. */
	varieties: PokemonSpeciesVariety[];
}

interface Genus {
	/** The localized genus for the referenced Pokémon */
	genus: string;
	/** The language this genus is in. */
	language: NameAPIResource<LanguageNames, 'language/:id'>;
}

interface PalParkEncounterArea {
	/**
	 * The base score given to the player when the referenced
	 * Pokémon is caught during a pal park run.
	 */
	base_score: number;
	/**
	 * The base rate for encountering the referenced Pokémon in this
	 * pal park area.
	 */
	rate: number;
	/** The pal park area where this encounter happens. */
	area: NameAPIResource<PalParAreaNames>;
}

interface PokemonSpeciesDexEntry {
	/** The index number within the Pokédex. */
	entry_number: number;
	/** The Pokédex the referenced Pokémon spepcies can be found in. */
	pokedex: NameAPIResource<PokedexName, 'pokedex/:id'>;
}

interface PokemonSpeciesVariety {
	/** Whether this variety is the default variety. */
	is_default: boolean;
	/** The Pokémon variety */
	pokemon: NameAPIResource;
}
