<script lang="ts">
  import Icon from "$lib/elements/Icon.svelte";
  export let id = 0;
  export let pokemon: Pokemon;

  const pokemontype = pokemon.types;
  const pokename = pokemon.name;
  function gibberish(bg = true, hover = false, pokeslot = 0) {
    if (bg) {
      if (hover) return `var(--color-${pokemontype[pokeslot].type.name}-hover)`;
      return `var(--color-${pokemontype[pokeslot].type.name})`;
    }

    if (hover) {
      return `var(--color-on-${pokemontype[pokeslot].type.name}-hover)`;
    } else {
      return `var(--color-on-${pokemontype[pokeslot].type.name})`;
    }
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
      class="text-on-surface-variant flex flex-col items-start justify-start transition-colors group-hover:text-[rgb(var(--bg-color))]"
    >
      <a
        href={`/pokemon/${pokemon.name}`}
        class="text-title-small group-hover:underline"
      >
        Nº {id < 100 ? (id < 10 ? `00${id}` : `0${id}`) : id}
      </a>
      <h1 class="text-title-large capitalize">
        {pokename}
      </h1>
    </hgroup>
    <div class="inline-flex w-full items-start justify-start gap-1">
      <section class="pokepill">
        <div>
          <figure>
            <Icon name={pokemontype[0].type.name} />
          </figure>
          <span>
            {pokemontype[0].type.name}
          </span>
        </div>
      </section>
      {#if pokemontype.length > 1}
        <section
          style:--bg-color={gibberish(true, false, 1)}
          style:--bg-color-hover={gibberish(true, true, 1)}
          style:--on-color={gibberish(false, false, 1)}
          style:--on-color-hover={gibberish(false, true, 1)}
          class="pokepill"
        >
          <div>
            <figure>
              <Icon name={pokemontype[1].type.name} />
            </figure>
            <span>
              {pokemontype[1].type.name}
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
        class="h-[94px] w-[94px]"
        name={pokemontype[0].type.name}
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
    class="bg-surface/30 ring-on-surface absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full ring-2 backdrop-blur-sm"
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
    @apply bg-surface-variant relative inline-flex min-h-[118px] min-w-[403px] rounded-2xl;
  }

  .image-section {
    background-color: rgb(var(--bg-color));
    color: rgb(var(--on-color));

    @apply relative flex min-h-[102px] min-w-[126px] items-center justify-center rounded-xl transition-colors;
  }

  .image-section > div {
    @apply absolute inset-0 z-0 flex h-full w-full items-center justify-center;
  }

  .image-section > figure {
    @apply z-10 max-h-[94px] max-w-[94px];
  }

  .image-section img {
    image-rendering: pixelated;
  }

  .info-section {
    @apply inline-flex w-full flex-col items-start justify-center gap-1 p-4 pl-6;
  }

  .pokepill {
    background-color: rgb(var(--bg-color));
    color: rgb(var(--on-color));
    @apply inline-flex w-1/2 rounded-full px-1.5 py-1;
  }

  .pokepill > div {
    @apply inline-flex items-center gap-1.5;
  }

  .pokepill figure {
    @apply bg-inverse-surface inline-flex rounded-full p-1;
  }

  .pokepill span {
    @apply text-label-small capitalize;
  }
</style>
