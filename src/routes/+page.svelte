<script>
  import PokeCard from "$lib/components/cards/PokeCard.svelte";
  import SearchBar from "$lib/components/inputs/Search.svelte";
  export let data;

  const { pokemones } = data;
</script>

<svelte:head>
  <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
  <title>Pokédex</title>
</svelte:head>

<SearchBar />

<section class="my-2 flex flex-col gap-2 px-2">
  {#each pokemones.results as pokemon, i (i)}
    {#await pokemon}
      <div
        class="rounded-xl animate-pulse bg-surface-variant min-w-[403px] min-h-[118px]"
      />
    {:then pokemon}
      <PokeCard {pokemon} id={i + 1} />
    {/await}
  {/each}
</section>
