<script>
  import { Link } from "svelte-routing";
  import { user } from "../stores/User";
  import { auth } from "../firebase";

  let items = [
    { title: "Home", link: "/Home", imageurl: "Images/Home.png" },
    { title: "Mensajes", link: "/Chats", imageurl: "Images/Mensajes.png" },
    { title: "Perfil", link: "/Perfil", imageurl: "Images/Perfil.png" },
    { title: "SignOut", link: "/Login", imageurl: "Images/SignOut.png" },
  ];

  const cerrarSesion = async () => {
    console.log("Hola");
    try {
      await auth.signOut(auth);
      user.setUser(null);
      localStorage.removeItem("user");
      console.log("listo");
      localStorage.removeItem("render");
      localStorage.removeItem("token");
      navigate("/Login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
</script>

<nav style="position: relative;">
  {#if $user}
    <ul class="Navegador">
      {#each items as item}
        {#if item.title == "SignOut"}
          <li class="Navelement">
            <Link to={item.link} on:click={cerrarSesion}>
              <img class="Navicons" src={item.imageurl} alt={item.title} />
            </Link>
          </li>
        {:else}
          <li class="Navelement">
            <Link to={item.link}>
              <img class="Navicons" src={item.imageurl} alt={item.title} />
            </Link>
          </li>
        {/if}
      {/each}
    </ul>
  {/if}
</nav>

<style>
  @media (min-width: 768px) {
    .Navegador {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      border-bottom: rgba(186, 130, 47, 0.241);
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
      margin: 0px;
      padding: 1.5%;
      padding-top: 1.5%;
      background: rgba(186, 130, 47, 0.241);
    }
    .Navelement {
      width: auto;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1%;
      margin-left: 1%;
    }
    .Nava {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Navicons {
      width: auto;
      height: 2.5rem;
      display: flex;
      justify-content: center;
    }
    .Navicons:hover {
      width: auto;
      height: 2.5rem;
      transform: scale(1.2);
      transition: 0.2s;
      display: flex;
      justify-content: center;
      background: rgba(185, 135, 59, 0.366);
      border-radius: 20%;
      padding: 12%;
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 767px) {
    .Navegador {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      border-bottom: rgba(186, 130, 47, 0.241);
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
      margin: 0px;
      padding: 1.5%;
      padding-top: 1.5%;
      background: rgba(186, 130, 47, 0.241);
    }
    .Navelement {
      width: auto;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 3%;
      margin-left: 3%;
    }
    .Nava {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Navicons {
      width: auto;
      height: 3rem;
      display: flex;
      justify-content: center;
    }
    .Navicons:hover {
      width: auto;
      height: 3rem;
      transform: scale(1.2);
      display: flex;
      justify-content: center;
      background: rgba(185, 135, 59, 0.366);
      border-radius: 20%;
      padding: 12%;
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
    }
  }
</style>
