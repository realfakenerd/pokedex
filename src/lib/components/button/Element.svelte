<script lang="ts">
  export let element: Elements = "all";

  function gibberish(bg = true, hover = false) {
    if (bg) {
      if (hover) return `var(--color-${element}-container-hover)`;
      return `var(--color-${element}-container)`;
    }

    if (hover) return `var(--color-on-${element}-container-hover)`;
    return `var(--color-on-${element}-container)`;
  }
</script>

<button
  style:--bg-color={gibberish()}
  style:--bg-color-hover={gibberish(true, true)}
  style:--on-color={gibberish(false)}
  style:--on-color-hover={gibberish(false, true)}
>
  <span class="text-label-large">
    {element}
  </span>
</button>

<style>
  button {
    background-color: rgb(var(--bg-color));
    color: rgb(var(--on-color));
    @apply transition-colors min-w-[328px] capitalize w-full px-4 py-2 rounded-3xl flex-col place-items-center gap-2 inline-flex;
  }

  button:hover {
    background-color: rgb(var(--bg-color-hover));
    color: rgb(var(--on-color-hover));
  }
</style>
