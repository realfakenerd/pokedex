<script>
  export let statuses;
</script>

<div class="md:w-1/2">
  <h3 class="uppercase font-bold">Stats</h3>
  <ul class="grid grid-cols-2 gap-3">
    {#each statuses as status}
      <li class="">
        <div class="flex flex-row gap-2">
          <h4 class="capitalize">{status.stat.name}</h4>
          <h4 class="capitalize">{status["base_stat"]}</h4>
        </div>
        <progress
          class="progress progress-primary bg-secondary"
          max="100"
          value={status["base_stat"]}
        />
      </li>
    {/each}
  </ul>
</div>
