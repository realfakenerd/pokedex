<script>
  import { metatags } from "@roxi/routify";
  import PokeCard from "../components/PokeCard.svelte";
  import PokeList from "../components/PokeList.svelte";
  import { pokemon, fetchPokemon } from "../pokeStore.js";
  fetchPokemon();
  metatags.title = "Pokedex";
  metatags.description = "Description coming soon...";
</script>

<section class="p-5 mx-5">
  <h1 class="font-extrabold text-4xl">The poke dex</h1>
</section>

<section class="px-5">
  {#await $pokemon}
    <div class="card shadow-lg">
      <div class="card-body">
        <div class="card-title">
          <h1>POKEMON</h1>
        </div>
        <p>they are coming....</p>
      </div>
    </div>
  {:then pokemone}
    <PokeList>
      {#each pokemone as { name, id, image }}
        <PokeCard endereco={id} {name} {id} {image} />
      {/each}
    </PokeList>
  {:catch err}
    <h1>{err}</h1>
  {/await}
</section>
