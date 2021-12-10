<script>
  import { pokeType } from "../../pokeType.js";
  let class_name1;
  let class_name2;
  export let sprite;
  export let altName;
  export let tipo;

  if (tipo.length == 1) {
    class_name1 = `from-${pokeType(tipo[0])}`;
  } else {
    class_name1 = `from-${pokeType(tipo[0])}`;
    class_name2 = `to-${pokeType(tipo[1])}`;
    console.log(tipo);
  }
</script>

<figure class="bg-gradient-to-r {class_name1} {class_name2}">
  <img class="filter  drop-shadow-2xl" src={sprite} alt={altName} />
</figure>

<!-- pokemon.sprites["other"]["official-artwork"]["front_default"] -->
<!-- pokemon.name -->
