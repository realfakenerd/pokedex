<script>
  import { url, goto } from "@roxi/routify";
  import { fade } from "svelte/transition";
  import { pokemon, fetchPokemon } from "../../pokeStore.js";
  import MediaQuery from "svelte-media-query";

  let searchTerm = "";
  let filteredPokemon = [];

  $: {
    if (searchTerm) {
      filteredPokemon = $pokemon.filter((pokeman) =>
        pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredPokemon = [...$pokemon];
    }
  }
  fetchPokemon();
</script>

<div class="form-control">
  <label for="searchInputNav" class="hidden label">
    <span class="label-text ">s</span>
  </label>
  <MediaQuery query="(min-width: 768px)" let:matches>
    {#if !matches}
      <div class="dropdown dropdown-top">
        <div tabindex="0" class="relative">
          <input
            type="text"
            placeholder="Search"
            class="w-full pr-16 input input-ghost input-bordered border-red-300"
            bind:value={searchTerm}
          />
          <button class="absolute top-0 right-0 btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div
          tabindex="0"
          class="dropdown-content w-full py-4 shadow-lg bg-base-200 rounded-box"
        >
          {#if searchTerm != ""}
            <ul class="menu">
              <li class="menu-title">
                <span class="uppercase font-semibold">Search Result:</span>
              </li>
              {#each filteredPokemon as poke}
                <li transition:fade class="hover-bordered">
                  <a href={$goto("/pokemon/:id", { id: poke.id })}
                    ><span class="capitalize font-semibold">{poke.name}</span
                    ></a
                  >
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
    {:else}
      <div class="dropdown">
        <div tabindex="0" class="relative">
          <input
            type="text"
            placeholder="Search"
            class="w-full pr-16 input input-ghost input-bordered border-red-300"
            bind:value={searchTerm}
          />
          <button class="absolute top-0 right-0 btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div
          tabindex="0"
          class="dropdown-content w-full py-4 shadow-lg bg-base-200 rounded-box"
        >
          {#if searchTerm != ""}
            <ul class="menu">
              <li class="menu-title">
                <span class="uppercase font-semibold">Search Result:</span>
              </li>
              {#each filteredPokemon as poke}
                <li transition:fade class="hover-bordered">
                  <a href="/pokemon/:id" use:$url={{ id: poke.id }}
                    ><span class="capitalize font-semibold">{poke.name}</span
                    ></a
                  >
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
    {/if}
  </MediaQuery>
</div>
