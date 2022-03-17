<script>
  import { metatags, ready } from "@roxi/routify";
  import PokeCard from "../components/PokeCard.svelte";
  import PokeList from "../components/PokeList.svelte";
  import { pokemon, fetchPokemon } from "../pokeStore.js";
  fetchPokemon().finally($ready);
  metatags.title = "Pokemones";
  let currentItems = 10;
</script>

<section class="p-5 mx-5">
  <h1 class="font-extrabold text-4xl">The poke dex</h1>
</section>

<section class="px-5">
  <PokeList>
    {#each $pokemon.slice(0, currentItems) as { name, id, image }}
      <PokeCard
        endereco={id}
        {name}
        {image}
      />
    {/each}
  </PokeList>
  <div class="flex justify-center">
    <button
      on:click={() => (currentItems += 10)}
      type="button"
      class="btn btn-primary my-10 mx-10 shadow-lg shadow-blue-200 hover:shadow-red-200"
      >Load more</button
    >
  </div>
</section>
