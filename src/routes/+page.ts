import type { PageLoad } from "./$types";

export const load = (async ({fetch}) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    return {
        pokemones: await res.json()
    }
}) satisfies PageLoad