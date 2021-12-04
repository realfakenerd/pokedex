<script>
  import axios from "axios";
  import { metatags } from "@roxi/routify";
  import PokeStats from "../../components/Pokemon/PokeStats.svelte";
  export let id;
  async function load() {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await axios.get(url);
    const data = res.data;
    return data;
  }
  load();
  metatags.title = `Pokedex - ${id}`;
</script>

<div class="m-5">
  {#await load()}
    <h1>loading data</h1>
  {:then pokemon}
    <div class="card md:card-side shadow-2xl bg-base-300">
      <figure class="bg-green-300">
        <img
          src={pokemon.sprites.other["official-artwork"]["front_default"]}
          alt={pokemon.name}
        />
      </figure>
      <div class="card-body">
        <h3 class="card-title uppercase font-bold tracking-widest">
          {pokemon.name}
        </h3>
        <PokeStats statuses={pokemon.stats} />
      </div>
    </div>
  {/await}
</div>

<style>
  img {
    filter: drop-shadow(2.5px 2.5px 10px rgba(0, 0, 0, 0.5));
  }
</style>
