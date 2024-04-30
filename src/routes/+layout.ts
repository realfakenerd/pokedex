import type { LayoutLoad } from "./$types"

export const load = (async ({url, fetch}) => {
    const res = await fetch('/api/pokemon?limit=100');
	const pokemones = (await res.json()) as CachedPokemonList;
    return {
        currentPath: url.pathname,
        pokemones
    }
}) satisfies LayoutLoad
