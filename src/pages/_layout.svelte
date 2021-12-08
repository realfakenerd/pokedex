<script>
  import Nav from "../components/Nav.svelte";
</script>

<header>
  <Nav />
</header>

<main class="bg-base-100">
  <!-- routify:options preload="proximity" -->
  <slot />
</main>
