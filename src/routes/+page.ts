import type { PageLoad } from "./$types";

export const load = (async ({fetch}) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    const pokemones = await res.json() as PokemonList;

    pokemones.results = pokemones.results.map(async (poke, index) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`);
        const pokemon = await res.json() as Pokemon;
        return pokemon
    })
    return {
        pokemones
    }
}) satisfies PageLoad