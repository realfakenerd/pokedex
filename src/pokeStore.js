import { writable } from "svelte/store";
import axios from 'axios';

async function catchThemAll() {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
    const data = await res.data.results;
    return data.map(({ name, url },/** @type {number} */ index) => {
        return {
            name,
            url,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
    })
}



const pokemon = writable(catchThemAll())

export default pokemon