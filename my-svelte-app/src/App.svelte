<script>
  import { Router, Link, Route, navigate } from "svelte-routing";
  import { user } from "./stores/User";
  import { onMount } from "svelte";
  import Home from "./views/Home.svelte";
  import Chats from "./views/Chats.svelte";
  import Notificacion from "./views/Notificacion.svelte";
  import Perfil from "./views/Perfil.svelte";
  import Login from "./views/Login.svelte";
  import Navbar from "./components/Navbar.svelte";

  const storedUser = localStorage.getItem("user");

  onMount(async () => {
    await user.current();
  });
  if (storedUser) {
    user.setUser(storedUser);
    console.log("Usuario de local");
  }
</script>

{#if $user == false}
  <Router>
    <Route path="/Login">
      <Login />
    </Route>
  </Router>
  {console.log("Estas siendo dirigido al Login...")}
  {navigate("/Login", { replace: true })}
{:else}
  <Router>
    <Navbar />
    <Route path="/Home">
      <Home />
    </Route>
    <Route path="/Chats">
      <Chats />
    </Route>
    <Route path="/Notificacion">
      <Notificacion />
    </Route>
    <Route path="/Perfil">
      <Perfil />
    </Route>
    <Route path="/Login">
      <Login />
    </Route>
  </Router>
{/if}

<style>
  :global(body) {
    padding: 0px;
    background: rgba(218, 159, 70, 0.21);
  }
</style>
