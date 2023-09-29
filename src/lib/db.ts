import Dexie, {type Table} from 'dexie';

class SubDexie extends Dexie {
    pokemones!: Table<PokemonListDef>;

    constructor(){
        super('pokefavorites');
        this.version(1).stores({
            pokemones: 'id, name, types'
        })
    }
}

export const db = new SubDexie();