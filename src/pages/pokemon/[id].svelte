<script>
  import axios from "axios";
  import { params, metatags } from "@roxi/routify";
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

{#await load()}
  <h1>loading data</h1>
{:then pokemon}
  <div class="card md:card-side">
    <figure>
      <img
        src={pokemon.sprites.other["official-artwork"]["front_default"]}
        alt={pokemon.name}
      />
    </figure>
    <div class="card-body">
      <h1>{pokemon.name}</h1>
    </div>
  </div>
{/await}
