import type { PageLoad } from "./$types";

export const load = (async ({fetch}) => {
    const res = await fetch('https://pokeapi.co/api/v2/region/')
    const data = await res.json() as Regions;

    return {
        regions: data
    }
}) satisfies PageLoad;