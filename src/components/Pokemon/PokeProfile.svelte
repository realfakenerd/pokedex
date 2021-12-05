<script>
  import pokemon from "../../pokeStore";

  export let weight = pokemon.weight;
  export let baseXP = pokemon["base_experience"];
  export let height = pokemon.height;
</script>

<div class="w-full shadow stats mt-5">
  <div class="stat">
    <div class="stat-title">Base Experience</div>
    <div class="stat-value">{baseXP}</div>
    <div class="stat-desc">the base experience</div>
  </div>
  <div class="stat">
    <div class="stat-title">Weight</div>
    <div class="stat-value">{weight}</div>
    <div class="stat-desc text-success">The weight of the pokemon</div>
  </div>
  <div class="stat">
    <div class="stat-title">Height</div>
    <div class="stat-value">{height}</div>
    <div class="stat-desc text-error">The height of the pokemon</div>
  </div>
</div>
