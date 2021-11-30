<script>
  export let name;
  export let url;
  export let id;
  export let image;
</script>

<div
  class="card m-5 md:card-side w-full bg-neutral text-neutral-content max-w-xs h-1/3 min-h-8 flex-grow"
>
  <figure>
    <img class="w-full h-auto drop-shadow-lg" src={image} alt="Poke Mon" />
  </figure>
  <div class="card-body">
    <div class="card-title">
      {id} : <span class="capitalize">{name}</span>
    </div>
    <div class="card-action">
      <a class="btn btn-ghost bg-red-400" href={url}><span>Catch him</span></a>
    </div>
  </div>
</div>
