<script>
  import { onMount } from "svelte";
  import { animate } from "motion";

  onMount(() => {
    animate('img', {opacity: 100}, {delay: 1.6})
  });
  export let sprite;
  export let altName;
</script>

<figure>
  <img
    style="width:475;height:475;opacity: 0"
    class="filter  drop-shadow-2xl"
    src={sprite}
    alt={altName}
  />
</figure>
