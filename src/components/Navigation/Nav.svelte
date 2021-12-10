<script>
  import Searchbar from "./Searchbar.svelte";
</script>

<nav
  class="navbar bg-base-100 w-full shadow-lg md:mb-5 z-10 fixed bottom-0 md:relative"
>
  <section class="navbar-start px-2 mx-2">
    <div class="w-6">
      <a href="/"> <img src="pokeball-icon.svg" alt="Pokemon Ball logo" /></a>
    </div>
  </section>
  <section class="hidden navbar-center px-2 mx-2 md:flex">
    <div class="flex items-stretch">
      <a class="btn btn-ghost hover:bg-red-300 focus:bg-red-500" href="/"
        >Home</a
      >
      <a class="btn btn-ghost hover:bg-red-300 focus:bg-red-500" href="/about"
        >About</a
      >
      <a
        href="/pokemon/"
        class="btn btn-ghost hover:bg-red-300 focus:bg-red-500"
      >
        Pokemon
      </a>
    </div>
  </section>
  <section class="navbar-end">
    <Searchbar />
  </section>
</nav>
