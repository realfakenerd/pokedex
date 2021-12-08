<nav
  class="navbar bg-base-100 w-full shadow-lg md:mb-5 z-10 fixed bottom-0 md:relative"
>
  <section class="navbar-start px-2 mx-2">
    <div class="w-6">
      <a href="/"> <img src="/pokeball-icon.svg" alt="Pokemon Ball logo" /></a>
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
    </div>
  </section>
</nav>
