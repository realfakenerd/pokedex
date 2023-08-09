<script>
  import pokeball from "./pokeball.svg";
  import pokepin from "./PokePin.svg";
  import pokeheart from "./PokeHeart.svg";
  import perfil from "./Perfil.svg";
</script>

<nav>
  <a href="/">
    <img src={pokeball} alt="pokeball icon" />
    <span>Pokedéx</span>
  </a>
  <a href="pokepn">
    <img src={pokepin} alt="pokepin" />
    <span>Regions</span>
  </a>
  <a href="pokepn">
    <img src={pokeheart} alt="pokeheart" />
    <span>Favorites</span>
  </a>
  <a href="pokepn">
    <img src={perfil} alt="perfil" />
    <span>Profile</span>
  </a>
</nav>

<style>
  nav {
    @apply bg-surface-variant text-label-large text-on-surface-variant flex min-h-[72px] w-full items-center justify-between border-t px-8 py-0;
    border-color: #e6e6e6;
  }

  a {
    @apply flex flex-col place-items-center;
    display: flex;
    /* width: 56px;
    height: 56px; */
    gap: -2px;
  }
</style>
