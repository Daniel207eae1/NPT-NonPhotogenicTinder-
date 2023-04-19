<script>
  import { Router, Link, Route, navigate } from "svelte-routing";
  import {user} from './stores/User'
  import {onMount} from 'svelte'
  import {auth} from './firebase'
  import Home from './views/Home.svelte'
  import Chats from './views/Chats.svelte'
  import Notificacion from './views/Notificacion.svelte'
  import Perfil from './views/Perfil.svelte'
  import Login from './views/Login.svelte'
  import Navbar from "./components/Navbar.svelte";

  onMount(async() => {
    await user.current()
  });

</script>


{#if $user === false}
<Router>
  <Route path="/Login">
    <Login></Login>
  </Route>
</Router>
{navigate('/Login', {replace: true})}

{:else}
<Router>
  <Navbar></Navbar>
  <Route path="/Home">
    <Home></Home>
  </Route>
  <Route path="/Chats">
    <Chats></Chats>
  </Route>
  <Route path="/Notificacion">
    <Notificacion></Notificacion>
  </Route>
  <Route path="/Perfil">
    <Perfil></Perfil>
  </Route>
  <Route path="/Login">
    <Login></Login>
  </Route>
</Router>
{/if}


<style>
    :global(body){
      padding: 0px;
      background: rgba(218, 159, 70, 0.21);
    }
</style>