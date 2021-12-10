<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import Serviceworker from "./serviceworker.svelte";
</script>

<Serviceworker />
<Router {routes} />
