<script>
  import { PokeCard } from "$lib/components/cards";
  import { SearchBar } from "$lib/components/inputs";
  export let data;

  const { pokemones } = data;
</script>

<svelte:head>
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    <title>Pokédex</title>
</svelte:head>

<SearchBar />

<section class="flex flex-col gap-2 my-2 px-2">
  {#each pokemones.results as pokemon, i (i)}
    {#await pokemon}
      <div
        class="rounded-xl animate-pulse bg-surface-variant min-w-[403px] min-h-[118px]"
      />
    {:then pokemon}
      <PokeCard poketype={pokemon.types} {pokemon} id={i + 1} pokename={pokemon.name} />
    {/await}
  {/each}
</section>
