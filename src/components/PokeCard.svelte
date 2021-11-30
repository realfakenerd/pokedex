<script>
  export let name;
  export let url;
  export let id;
  export let image;
</script>

<div
  class="card md:card-side shadow-xl hover:shadow-md hover:bg-base-300 transition-shadow"
>
  <figure class="bg-red-200 md:pt-6 md:px-5">
    <img src={image} alt="Poke Mon" />
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
