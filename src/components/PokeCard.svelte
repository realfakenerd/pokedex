<script>
  import { url } from "@roxi/routify";
  import { onMount } from "svelte";
  import { animate, stagger} from "motion";
  export let name;
  export let endereco;
  export let image;

  onMount(() => {
    animate(
      ".card",
      {
        opacity: [0,1],
        translateY: -20
      },
      {
        duration: 1.2,
        delay: stagger(.2,{
          start: 1
        }),
        easing: 'ease-in-out'
      }
    ).finished(()=>{

    });
  });
</script>

<div
  class="card md:card-side bg-base-100 hover:shadow-2xl hover:shadow-[#ee262c]/20  hover:bg-base-300 duration-300"
>
  <figure class="bg-red-200 md:pt-6 md:px-5">
    <img
      loading="lazy"
     style="width:96px;height:96px"
      class="image-full"
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
