<script>
  import Nav from "../components/Nav.svelte";
</script>

<Nav />

<main class="bg-base-100">
  <!-- routify:options preload="proximity" -->
  <slot />
</main>
