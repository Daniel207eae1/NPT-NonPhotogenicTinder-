<script>
  import { user } from "../stores/User";
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import Navbar from "../components/Navbar.svelte";

  onMount(() => {
    if (!$user) {
      navigate("/Login", { replace: true });
    }
  });
</script>

<Navbar />

<style>
</style>
