<script>
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/240px-Pok%C3%A9_Ball_icon.svg.png";
</script>

<nav
  class="navbar bg-base-100 w-full shadow-lg md:mb-5 z-10 fixed bottom-0 md:relative"
>
  <section class="navbar-start px-2 mx-2">
    <div class="w-6">
      <a href="/"> <img src={url} alt="Pokemon Ball logo" /></a>
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
    <div class="form-control">
      <label for="searchInputNav" class="hidden label">
        <span class="label-text">connected</span>
      </label>
      <div class="relative">
        <input
          type="text"
          placeholder="Search"
          class="w-full pr-16 input input-ghost input-bordered border-red-300"
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
