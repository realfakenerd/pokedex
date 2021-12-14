<script>
  import axios from "axios";
  import { metatags } from "@roxi/routify";
  import Pokemon from "../../components/Pokemon/Pokemon.svelte";
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

<div class="m-5 h-full">
  {#await load()}
    <div class="card bg-base-300 shadow-2xl">
      <div class="card-body">
        <div class="card-title">
          <h1>Loading Pokemons</h1>
        </div>
        <p>Almost there...</p>
      </div>
    </div>
  {:then pokemon}
    <Pokemon {pokemon} />
  {:catch err}
    <div class="card bg-red-500 shadow-2xl">
      <div class="card-body">
        <div class="card-title">
          <h1>Oh! No</h1>
        </div>
        <p>You almost got him.</p>
        <br />
        <p>{err}</p>
      </div>
    </div>
  {/await}
</div>
