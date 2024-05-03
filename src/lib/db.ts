import Dexie, {type Table} from 'dexie';

class CustomDexie extends Dexie {
    favorites!: Table<PokemonListDef, number>;
    pokemones!: Table<CachedPokemon, number>;

    constructor(){
        super('pokemon');
        this.version(1).stores({
            favorites: '&id, name, *types',
            pokemones: 'id, name, *types',
        })
    }
}

export const db = new CustomDexie();