<script>
  import Nav from "../components/Nav.svelte";
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/240px-Pok%C3%A9_Ball_icon.svg.png";
</script>

<svelte:head>
  <link rel="shortcut icon" href={url} type="image/x-icon" />
</svelte:head>

<Nav />

<main class="bg-base-100">
  <!-- routify:options preload="proximity" -->
  <slot />
</main>
