<script>
  import { url } from "@roxi/routify";
  import { fade, fly } from "svelte/transition";
  import { cubicOut, cubicInOut } from "svelte/easing";
  export let name;
  export let endereco;
  // export let id;
  export let image;
</script>

<div
  in:fade={{ duration: 2000, easing: cubicOut }}
  out:fly={{ x: 200, duration: 2000, easing: cubicInOut }}
  class="card md:card-side shadow-lg shadow-red-200 hover:shadow-2xl hover:shadow-blue-200 hover:bg-base-300 duration-700"
>
  <figure class="bg-red-200 md:pt-6 md:px-5">
    <img
      loading="lazy"
      width="96"
      height="96"
      class="image-full md:w-[96px] md:h-[96px]"
      src={image}
      alt={name}
    />
  </figure>
  <div class="card-body">
    <div class="card-title">
      <span class="capitalize">{name}</span>
    </div>
    <div class="card-action">
      <a class="btn btn-primary" href={$url("/pokemon/:id", { id: endereco })}
        ><span>Catch him</span></a
      >
    </div>
  </div>
</div>
