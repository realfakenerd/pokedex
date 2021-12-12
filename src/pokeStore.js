import { writable } from "svelte/store";
import axios from 'axios';

export const pokemon = writable([]);
const pokemonDetails = {};
let loaded = false;

export const fetchPokemon = async () => {
    if (loaded) return;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=999`;
    const res = await axios.get(url);
    const data = await res.data;
    const loadedPokemon = data.results.map((data, index) => ({
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1
            }.png`
    }));
    pokemon.set(loadedPokemon);
    loaded = true;
};

export const getPokemonById = async (id) => {
    if (pokemonDetails[id]) return pokemonDetails[id];

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        pokemonDetails[id] = data;
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

// async function catchThemAll() {
//     const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=400');
//     const data = await res.data.results;
//     return data.map(({ name, url },/** @type {number} */ index) => {
//         return {
//             name,
//             url,
//             id: index + 1,
//             image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
//         }
//     })
// }



// const pokemon = writable(catchThemAll())

// export default pokemon