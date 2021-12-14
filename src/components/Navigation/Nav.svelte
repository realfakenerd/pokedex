<script>
  import Searchbar from "./Searchbar.svelte";
  import MediaQuery from "svelte-media-query";
  import Menu from "./Menu.svelte";
  import { url, isActive } from "@roxi/routify";
  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/pokemon/", "Pokemon"],
  ];
</script>

<nav
  class="navbar bg-base-100 w-full shadow-lg md:mb-5 z-10 fixed bottom-0 md:relative"
>
  <section class="navbar-start px-2 mx-2">
    <MediaQuery query="(max-width: 640px)" let:matches>
      {#if matches}
        <Menu {links} />
      {:else}
        <div class="w-8">
          <img
            style="width:24; height:24"
            src="pokeball-icon.svg"
            alt="Pokemon Ball logo"
          />
        </div>
      {/if}
    </MediaQuery>
  </section>
  <section class="hidden navbar-center px-2 mx-2 md:flex">
    <ul class="flex items-stretch space-x-3">
      {#each links as [path, name]}
        <li>
          <a
            href={$url(path)}
            class:active={$isActive(path)}
            class="btn btn-ghost hover:bg-primary/50 focus:bg-primary-focus"
          >
            <span>{name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
  <section class="navbar-end">
    <Searchbar />
  </section>
</nav>

<style>
  .active {
    @apply bg-primary;
  }
</style>
