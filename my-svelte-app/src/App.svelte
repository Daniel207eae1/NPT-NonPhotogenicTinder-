<script>
  import { Router, Route, navigate } from "svelte-routing";
  import { user } from "./stores/User";
  import { onMount } from "svelte";
  import Home from "./views/Home.svelte";
  import Chats from "./views/Chats.svelte";
  import Perfil from "./views/Perfil.svelte";
  import Login from "./views/Login.svelte";
  import ConfigPerfil from "./views/ConfigPerfil.svelte";

  const storedUser = localStorage.getItem("user");
  onMount(async () => {
    await user.current();
  });

  if (storedUser) {
    user.setUser(storedUser);
    console.log("Usuario de local");
  }
</script>

<Router>
  <Route path="/Home">
    <Home />
  </Route>
  <Route path="/Chats">
    <Chats />
  </Route>
  <Route path="/Perfil">
    <Perfil />
  </Route>
  <Route path="/Login">
    <Login />
  </Route>
  <Route path="/ConfigPerfil">
    <ConfigPerfil />
  </Route>
</Router>

<style>
  :global(body) {
    padding: 0px;
    background: rgba(218, 159, 70, 0.21);
  }
</style>
