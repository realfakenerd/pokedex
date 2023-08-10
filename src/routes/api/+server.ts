import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (async() => {
    return json({
        pokemon: 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0',
        'pokemon/:id': 'https://pokeapi.co/api/v2/pokemon/:id'
    })
}) satisfies RequestHandler