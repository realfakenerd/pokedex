<script>
  import Nav from "../components/Navigation/Nav.svelte";
</script>

<header>
  <Nav />
</header>

<main class="min-h-screen">
  <slot />
</main>

<footer class="p-6 footer bg-base-300 text-base-content">
  <div>
    <p>
      Copyright © 2021 - All right reserved by Pokemon Company and made with
      Svelte/Routify/Vercel and Daisyui
    </p>
  </div>
</footer>
