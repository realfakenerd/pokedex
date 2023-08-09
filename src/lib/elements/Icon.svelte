<script lang="ts">
  import { onMount } from "svelte";
  export let name = "" as Elements | null;
  export let fill = "";
  export let width: number | null = null;
  export let height: number | null = null;

  interface Icon {
    box: { w: number; h: number };
    svg: string;
  }

  let icon: Icon = {
    box: {
      w: 0,
      h: 0,
    },
    svg: "",
  };

  onMount(async () => {
    try {
      const imported = await import("./index.js");
      icon = imported.default[name ?? "bug"];
    } catch (error) {
      console.error("Error importing icon:", error);
      icon = { box: { w: 0, h: 0 }, svg: "" };
    }
  });
</script>

<svg
  style:--fill-color={fill}
  class={$$props.class}
  height={height ?? icon?.box.h}
  width={width ?? icon?.box.w}
  viewBox="0 0 {icon?.box.w} {icon?.box.h}"
>
  {@html icon?.svg}
</svg>

<style>
  svg {
    --fallback: rgb(var(--bg-color));
    fill: var(--fill-color, var(--fallback));
  }
</style>
