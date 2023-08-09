<script lang="ts">
  import Icon from "$lib/elements/Icon.svelte";
  export let id = 0;
  export let pokename: string | null = null;
  export let poketype: Type[];
  export let pokemon: Pokemon;

  function gibberish(bg = true, hover = false, pokeslot = 0) {
    if (bg) {
      if (hover) return `var(--color-${poketype[pokeslot].type.name}-hover)`;
      return `var(--color-${poketype[pokeslot].type.name})`;
    }

    if (hover) return `var(--color-on-${poketype[pokeslot].type.name}-hover)`;
    return `var(--color-on-${poketype[pokeslot].type.name})`;
  }

  const sprites = pokemon.sprites?.front_default;
</script>

<section
  style:--bg-color={gibberish()}
  style:--bg-color-hover={gibberish(true, true)}
  style:--on-color={gibberish(false)}
  style:--on-color-hover={gibberish(false, true)}
  class="poke-container group"
>
  <section class="info-section">
    <hgroup
      class="flex-col justify-start items-start flex text-on-surface-variant group-hover:text-[rgb(var(--bg-color))] transition-colors"
    >
      <a href={`/pokemon/${pokemon.name}`} class="text-title-small group-hover:underline">
        Nº {id < 100 ? (id < 10 ? `00${id}` : `0${id}`) : id}
      </a>
      <h1 class="capitalize text-title-large">
        {pokename}
      </h1>
    </hgroup>
    <div class="justify-start items-start gap-1 inline-flex w-full">
      <section class="pokepill">
        <div>
          <figure>
            <Icon name={poketype[0].type.name} />
          </figure>
          <span>
            {poketype[0].type.name}
          </span>
        </div>
      </section>
      {#if poketype.length > 1}
        <section
          style:--bg-color={gibberish(true, false, 1)}
          style:--bg-color-hover={gibberish(true, true, 1)}
          style:--on-color={gibberish(false, false, 1)}
          style:--on-color-hover={gibberish(false, true, 1)}
          class="pokepill"
        >
          <div>
            <figure>
              <Icon name={poketype[1].type.name} />
            </figure>
            <span>
              {poketype[1].type.name}
            </span>
          </div>
        </section>
      {/if}
    </div>
  </section>
  <section class="image-section">
    <div>
      <Icon
        fill="#ccc"
        class="w-[94px] h-[94px]"
        name={poketype[0].type.name}
      />
    </div>
    <figure>
      <img
        width="256"
        height="256"
        loading="lazy"
        src={sprites}
        alt={pokename}
      />
    </figure>
  </section>

  <button
    on:click={() => console.log("clicked")}
    class="w-8 h-8 rounded-full backdrop-blur-sm right-2 flex justify-center items-center top-2 bg-surface/30 ring-2 ring-on-surface absolute z-20"
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      class="stroke-on-surface fill-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M13.8931 3.07309C13.5526 2.73242 13.1483 2.46218 12.7033 2.27781C12.2584 2.09343 11.7814 1.99854 11.2998 1.99854C10.8181 1.99854 10.3412 2.09343 9.89618 2.27781C9.45121 2.46218 9.04692 2.73242 8.70642 3.07309L7.99975 3.77975L7.29309 3.07309C6.60529 2.38529 5.67244 1.99889 4.69975 1.99889C3.72706 1.99889 2.79422 2.38529 2.10642 3.07309C1.41863 3.76088 1.03223 4.69373 1.03223 5.66642C1.03223 6.63911 1.41863 7.57196 2.10642 8.25975L2.81309 8.96642L7.99975 14.1531L13.1864 8.96642L13.8931 8.25975C14.2337 7.91925 14.504 7.51496 14.6884 7.06999C14.8727 6.62502 14.9676 6.14808 14.9676 5.66642C14.9676 5.18476 14.8727 4.70782 14.6884 4.26285C14.504 3.81788 14.2337 3.41359 13.8931 3.07309V3.07309Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</section>

<style>
  .poke-container {
    @apply min-w-[403px] min-h-[118px] relative bg-surface-variant rounded-2xl inline-flex;
  }

  .image-section {
    background-color: rgb(var(--bg-color));
    color: rgb(var(--on-color));

    @apply transition-colors min-w-[126px] min-h-[102px] rounded-xl flex justify-center relative items-center;
  }

  .image-section > div {
    @apply absolute inset-0 flex items-center justify-center w-full h-full z-0;
  }

  .image-section > figure {
    @apply max-w-[94px] max-h-[94px] z-10;
  }

  .image-section img {
    image-rendering: pixelated;
  }

  .info-section {
    @apply flex-col justify-center w-full items-start gap-1 inline-flex p-4 pl-6;
  }

  .pokepill {
    background-color: rgb(var(--bg-color));
    color: rgb(var(--on-color));
    @apply px-1.5 py-1 rounded-full inline-flex w-1/2;
  }

  .pokepill > div {
    @apply items-center gap-1.5 inline-flex;
  }

  .pokepill figure {
    @apply rounded-full bg-inverse-surface inline-flex p-1;
  }

  .pokepill span {
    @apply text-label-small capitalize;
  }
</style>
