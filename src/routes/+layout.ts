import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
  try {
    const res = await fetch('/api/pokemon?limit=100');

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const pokemons = (await res.json()) as CachedPokemonList;
    return {
      currentPath: url.pathname,
      pokemones,
    };
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    // Optionally return a default value or handle the error in the UI
    return { currentPath: url.pathname, pokemons: [] };
  }
};
