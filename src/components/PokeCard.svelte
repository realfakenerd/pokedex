<script>
  import { url } from "@roxi/routify";
  import axios from "axios";
  export let name;
  export let endereco;
  export let id;
  export let image;

  async function loadTypes() {
    try {
      const typeUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await axios.get(typeUrl);
      const dataTypes = await res.data.types;
      return dataTypes.map(({ type }) => {
        return type.name;
      });
    } catch (err) {
      console.error(err);
    }
  }
</script>

<div
  class="card md:card-side shadow-xl hover:shadow-md hover:bg-base-300 transition-shadow"
>
  <figure class="bg-red-200 md:pt-6 md:px-5">
    <img src={image} alt={name} />
  </figure>
  <div class="card-body">
    <div class="card-title">
      {id} : <span class="capitalize">{name}</span>
    </div>
    <div class="card-action">
      <a
        class="btn btn-ghost bg-red-400"
        href="/pokemon/:id"
        use:$url={{ id: endereco }}><span>Catch him</span></a
      >
    </div>
  </div>
</div>
