<script>
  import { PokeCard } from "$lib/components/cards";
  import { SearchBar } from "$lib/components/inputs";
  export let data;

  const { pokemones } = data;
</script>

<SearchBar />

<section class="flex flex-col gap-2 my-2 px-2">
  {#each pokemones.results as pokemon, i (i)}
    {#await pokemon}
      loading....
    {:then pokemon}
      <PokeCard poketype={pokemon.types} id={i + 1} pokename={pokemon.name} />
    {/await}
  {/each}
</section>
