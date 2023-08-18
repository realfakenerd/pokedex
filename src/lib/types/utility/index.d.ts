interface Description {
	/** The localized description for an API resource in a specific language. */
	description: string;
	/**	The language this name is in. */
	language: NameAPIResource;
}

interface APIResource {
	/** The URL of the referenced resource. */
	url: string;
}

/**
 * Calling any API endpoint without a resource ID or name will
 * return a paginated list of available resources for that API.
 *
 * By default, a list "page" will contain up to 20 resources.
 *
 * If you would like to change this just add a 'limit' query
 * parameter to the GET request, e.g. ?limit=60. You can use
 * 'offset' to move to the next page, e.g. ?limit=60&offset=60.
 */
interface NamedAPIResourceList {
	/** The total number of resources available from this API. */
	count: number;
	/** The URL for the next page in the list. */
	next: string;
	/** The URL for the previous page in the list. */
	previous: string;
	/** A list of named API resources. */
	results: NameAPIResource[];
}

interface Name {
	/** The localized name for an API resource in a scpecific language. */
	name: string;
	/** The language this name is in, */
	language: NameAPIResource<LanguageNames, 'language/:id'>;
}

interface FlavorText {
	/**
	 * The localized flavor text for an API resource in a specific
	 * language. Note that this text is left unprocessed as it is
	 * found in game files. This means that it contains special
	 * characters that one might want to replace with their visible
	 * decodable version. Please check out this issue to find
	 * out more.
	 */
	flavor_text: string;
	/** The language this name is in. */
	language: NameAPIResource<LanguageNames, 'language/:id'>;
	/** The game version this flavor text is extracted from. */
	version: NameAPIResource;
}
