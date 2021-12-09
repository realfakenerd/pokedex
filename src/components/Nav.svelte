<nav
  class="navbar bg-base-100 w-full shadow-lg md:mb-5 z-10 fixed bottom-0 md:relative"
>
  <section class="navbar-start px-2 mx-2">
    <div class="w-6">
      <a href="/">
        <img src="pokeball-icon.svg" alt="Pokeball" />
      </a>
    </div>
  </section>
  <section class="hidden navbar-center px-2 mx-2 md:flex">
    <div class="flex items-stretch space-x-5">
      <a class="btn btn-ghost hover:text-white hover:bg-primary-focus" href="/"
        >Home</a
      >
      <a
        class="btn btn-ghost hover:text-white hover:bg-primary-focus"
        href="/about">About</a
      >
      <a
        class="btn btn-ghost hover:text-white hover:bg-primary-focus"
        href="/pokemon/"
      >
        Pokemon
      </a>
    </div>
  </section>
  <section class="navbar-end">
    <div class="form-control">
      <label for="searchInputNav" class="hidden label">
        <span class="label-text">connected</span>
      </label>
      <div class="relative">
        <input
          type="text"
          placeholder="Search"
          class="w-full pr-16 input input-ghost input-bordered border-primary"
          id="searchInputNav"
        />
        <button class="absolute top-0 right-0 btn btn-square btn-ghost">
          <img src="search-icon.svg" alt="search-icon" />
        </button>
      </div>
    </div>
  </section>
</nav>
