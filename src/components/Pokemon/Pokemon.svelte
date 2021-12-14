<script>
  import PokeProfile from "./PokeProfile.svelte";
  import PokeStats from "./PokeStats.svelte";
  import PokeImg from "./PokeImg.svelte";
  import { fly, fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  export let pokemon;

  let poketipo = pokemon.types.map((data) => data.type.name);
  let displayPoketipo =
    poketipo.length == 1 ? poketipo[0] : `${poketipo[0]}, ${poketipo[1]}`;
</script>

<div
  in:fly={{ x: -400, duration: 2000, easing: cubicInOut }}
  out:fade={{ duration: 2000, easing: cubicInOut }}
  class="card md:card-side shadow-red-400 bg-base-200 shadow-2xl mb-32 md:mb-5"
>
  <PokeImg
    tipo={poketipo}
    altName={pokemon.name}
    sprite={pokemon.sprites["other"]["official-artwork"]["front_default"]}
  />
  <div class="card-body">
    <h3 class="card-title uppercase font-bold tracking-widest">
      {pokemon.name} : {displayPoketipo}
    </h3>
    <PokeStats statuses={pokemon.stats} />
    <PokeProfile
      baseXP={pokemon["base_experience"]}
      weight={pokemon.weight}
      height={pokemon.height}
    />
  </div>
</div>
