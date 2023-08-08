<script>
    import pokeball from './pokeball.svg';
    import pokepin from './PokePin.svg';
    import pokeheart from './PokeHeart.svg';
    import perfil from './Perfil.svg';
</script>

<nav>
  <a href="/">
    <img src={pokeball} alt="pokeball icon" />
    <span>Pokedéx</span>
  </a>
  <a href="pokepn">
    <img src={pokepin} alt="pokepin"/>
    <span>Regions</span>
  </a>
  <a href="pokepn">
    <img src={pokeheart} alt="pokeheart"/>
    <span>Favorites</span>
  </a>
  <a href="pokepn">
    <img src={perfil} alt="perfil"/>
    <span>Profile</span>
  </a>
</nav>

<style>
  nav {
    @apply flex w-full py-0 px-8 justify-between items-center border-t bg-surface-variant min-h-[72px] text-label-large text-on-surface-variant;
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
