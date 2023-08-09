<script>
  import { Navbar } from "$lib/components/navigation";
  import "../app.css";
  import "@fontsource/poppins/400.css";
  import "@fontsource/poppins/500.css";
</script>

<main class="min-h-[100dvh]">
  <slot />
</main>

<footer class="fixed bottom-0 w-full left-0 z-50">
  <Navbar />
</footer>
