<script lang="ts">
  import Icon from "$lib/elements/Icon.svelte";
  import { onMount } from "svelte";
  export let id = 0;
  export let pokename: string | null = null;
  export let poketype: Type[];
  function gibberish(bg = true, hover = false, pokeslot = 0) {
    if (bg) {
      if (hover) return `var(--color-${poketype[pokeslot].type.name}-hover)`;
      return `var(--color-${poketype[pokeslot].type.name})`;
    }

    if (hover) return `var(--color-on-${poketype[pokeslot].type.name}-hover)`;
    return `var(--color-on-${poketype[pokeslot].type.name})`;
  }

  let icon: string = "";
  let iconTwo: string = "";

  onMount(async () => {
    const icontype = await import(
      `../../elements/small/${poketype[0].type.name}.svg`
    );
    icon = icontype.default;

    if (poketype.length > 1) {
      import(`../../elements/small/${poketype[1].type.name}.svg`).then(
        (module) => {
          iconTwo = module.default;
        }
      );
    }
  });

  let img = pokename
    ? `https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${pokename}.png`
    : "https://placehold.co/256x256";
</script>

<section class="poke-container">
  <section class="info-section">
    <hgroup class="flex-col justify-start items-start flex">
      <h2 class="text-title-small">Nº {id < 100 ? id < 10 ? `00${id}` : `0${id}` : id}</h2>
      <h1
        class="text-on-surface-variant capitalize text-[21px] text-title-large"
      >
        {pokename}
      </h1>
    </hgroup>
    <div class="justify-start items-start gap-1 inline-flex w-full">
      <section
        style:--bg-color={gibberish()}
        style:--bg-color-hover={gibberish(true, true)}
        style:--on-color={gibberish(false)}
        style:--on-color-hover={gibberish(false, true)}
        class="pokepill"
      >
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
  <section
    style:--bg-color={gibberish()}
    style:--bg-color-hover={gibberish(true, true)}
    style:--on-color={gibberish(false)}
    style:--on-color-hover={gibberish(false, true)}
    class="image-section"
  >
    <div>
      <Icon fill="red" class="w-[94px] h-[94px]" name={poketype[0].type.name}/>
    </div>
    <figure>
      <img width="256" height="256" loading="lazy" src={img} alt={pokename} />
    </figure>
  </section>

  <div class="w-8 h-8 left-[290px] top-[6px] absolute">
    <div
      class="w-8 h-8 left-0 top-0 absolute bg-black bg-opacity-30 rounded-full border border-white backdrop-blur-[7px]"
    />
    <div class="w-4 h-4 left-[8px] top-[8px] absolute" />
  </div>
</section>

<style>
  .poke-container {
    @apply min-w-[328px] min-h-[102px] relative bg-surface-variant rounded-2xl inline-flex;
  }

  .image-section {
    background-color: rgb(var(--bg-color));
    color: rgb(var(--on-color));

    @apply transition-colors min-w-[126px] min-h-[102px] rounded-xl flex justify-center relative items-center;
  }

  .image-section:hover {
    background-color: rgb(var(--bg-color-hover));
    color: rgb(var(--on-color-hover));
  }

  .image-section > div {
    @apply absolute inset-0 flex items-center justify-center w-full h-full z-0;
  }

  .image-section > figure {
    @apply max-w-[94px] max-h-[94px] z-10;
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
