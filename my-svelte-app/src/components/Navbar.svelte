<script>
    import {Link} from 'svelte-routing'
    import {user} from '../stores/User'
    import {auth} from '../firebase'

    let items = [
      { title: "Home", link: "/Home", imageurl: "Images/Home.png"},
      { title: "Notificaciones", link: "/Notificacion", imageurl: "Images/Notificaciones.png"},
      { title: "Mensajes", link: "/Chats", imageurl: "Images/Mensajes.png"},
      { title: "Perfil", link: "/Perfil" , imageurl: "Images/Perfil.png"},
      { title: "SignOut", link: "/Login", imageurl: "Images/SignOut.png"}
    ];

    const cerrarSesion = async() => {
    try {
      await auth.signOut(auth)
      user.setUser(null)
      navigate('/Login', {replace: true})
      console.log("Hola")
    } catch (error) {
      console.log(error)
    }
  }
</script>

<nav>
    {#if $user}
    <ul class="Navegador">
    {#each items as item}
        {#if item.title == "SignOut"}
            <li class="Navelement">
                <a on:click={cerrarSesion} class = "Nava" href={item.link} id={item.title}>
                    <Link to={item.link}>
                        <img class="Navicons" src={item.imageurl} alt={item.title}/>
                    </Link>
                </a>
            </li>
        {:else}
        <li class="Navelement">
            <a class = "Nava" href={item.link} id={item.title}>
                <Link to={item.link}>
                <img class="Navicons" src={item.imageurl} alt={item.title}/>
                </Link>
            </a>
        </li>
        {/if}
    {/each}
    </ul>
    {/if}
  </nav>

<style>
    .Navegador{
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
    .Navelement{
      width: auto;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1%;
      margin-left: 1%;
    }
    .Nava{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Navicons{
      width: auto;
      height: 40px;
      display: flex;
      justify-content: center;
    }
    .Navicons:hover{
      width: auto;
      height: 60px;
      display: flex;
      justify-content: center;
      background: rgba(185, 135, 59, 0.366);
      border-radius: 20%;
      padding: 12%;
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
    }
</style>