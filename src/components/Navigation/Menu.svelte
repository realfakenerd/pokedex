<script>
  import { url } from "@roxi/routify";
  export let links = [];
</script>

<div class="dropdown dropdown-top">
  <button tabindex="0" class="w-8" type="menu">
    <img
      style="width:24; height:24"
      src="pokeball-icon.svg"
      alt="Pokemon Ball logo"
    />
  </button>
  <ul
    tabindex="0"
    class="p-2 shadow menu dropdown-content bg-base-100 rounded-box"
  >
    {#each links as [path, name]}
      <li>
        <a href={$url(path)}>
          <span>{name}</span>
        </a>
      </li>
    {/each}
  </ul>
</div>
