<script>
  import { CTA as ButtonCTA, Element as ButtonElement } from "$lib/components";
</script>

<section class="p-4 flex-col flex gap-2">
  <ButtonCTA filled>Continuar</ButtonCTA>
  <ButtonCTA outlined>Continuar</ButtonCTA>
  <ButtonCTA disabled>Continuar</ButtonCTA>
</section>

<section class="flex flex-col gap-2 p-4">
  {#each ["all", "water", "dragon", "eletric", "fairy", "ghost", "fire", "ice", "grass", "bug", "fight", "normal", "dark", "steel", "rock", "psychic", "ground", "poison", "flying"] as element}
    <ButtonElement {element} />
  {/each}
</section>
