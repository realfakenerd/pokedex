import Dexie, {type Table} from 'dexie';

class CustomDexie extends Dexie {
    pokemones!: Table<PokemonListDef>;

    constructor(){
        super('pokefavorites');
        this.version(1).stores({
            pokemones: 'id, name, types'
        })
    }
}

export const db = new CustomDexie();