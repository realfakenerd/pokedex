interface PokemonListDef {
	id: number;
	name: string;
	types: PokemonType[];
}

interface MessageData {
    value: string;
    pokemones: PokemonListDef[]
}

addEventListener('message', (e: MessageEvent<MessageData>) => {
    const {value, pokemones} = e.data;
    const res = pokemones.filter(val => val.name.includes(value.toLowerCase().trim()))

    postMessage(res);
})