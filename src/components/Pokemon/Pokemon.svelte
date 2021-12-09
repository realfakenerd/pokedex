<script>
  import PokeProfile from "./PokeProfile.svelte";
  import PokeStats from "./PokeStats.svelte";
  import { fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  let classe = "bg-default";
  function pokeType(tipo) {
    switch (tipo) {
      case "grass":
        classe = "bg-grass";
        break;
      case "fire":
        break;
      case "flying":
        break;
      case "dragon":
        break;
      case "fairy":
        break;
      case "ice":
        break;
      case "normal":
        break;
      case "fighting":
        break;
      case "eletric":
        break;
      case "dark":
        break;
      case "bug":
        break;
      case "ghost":
        break;
      case "ground":
        break;
      case "poison":
        break;
      case "psychic":
        break;
      case "rock":
        break;
      case "steel":
        break;
      case "water":
        break;
      default:
        classe = "bg-default";
        break;
    }
  }

  export let pokemon;
</script>

<div
  in:fly={{ x: -400, duration: 2000, easing: cubicInOut }}
  out:fly={{ x: 200, duration: 2000, easing: cubicInOut }}
  class="card md:card-side shadow-2xl bg-base-200 mb-32 md:mb-5"
>
  <figure class:classe class="bg-red-200">
    <img
      src={pokemon.sprites["other"]["official-artwork"]["front_default"]}
      alt={pokemon.name}
    />
  </figure>

  <div class="card-body">
    <h3 class="card-title uppercase font-bold tracking-widest">
      {pokemon.name}
    </h3>
    <PokeStats statuses={pokemon.stats} />
    <PokeProfile
      baseXP={pokemon["base_experience"]}
      weight={pokemon.weight}
      height={pokemon.height}
    />
  </div>
</div>

<style>
  .bg-default {
    @apply bg-gradient-to-r from-red-500;
  }
  .bg-grass-poison {
    @apply bg-gradient-to-r from-yellow-200;
  }
  .bg-grass {
    @apply bg-gradient-to-r from-green-200;
  }
  img {
    filter: drop-shadow(2.5px 2.5px 10px rgba(0, 0, 0, 0.5));
  }
</style>
