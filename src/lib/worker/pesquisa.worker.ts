interface PokemonListDef {
	id: number;
	name: string;
	types: PokemonType[];
}

interface MessageData {
    value: string;
    pokemones: PokemonListDef[]
}

addEventListener('message', ({data}: MessageEvent<MessageData>) => {
    const {value, pokemones} = data;
    const res = pokemones.filter(val => val.name.includes(value.toLowerCase().trim()))

    postMessage(res);
})