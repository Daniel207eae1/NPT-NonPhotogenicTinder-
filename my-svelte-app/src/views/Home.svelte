<script>
  import { user } from "../stores/User";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";
  import LoadingContainer from "../components/LoadingContainer.svelte";

  let isLoading = true;

  let personas = {
    name: "",
    age: 0,
    hetero: true,
    id: "",
    location: "",
    hobbies: [],
    descripcion: "",
    Hombre: true,
  };
  let personHobbies = [];
  var perfilimagen;
  var colores;
  let orientacion = "";
  $: {
    if (personas.Hombre == true) {
      perfilimagen = "Images/PerfilHombre.png";
      colores = "#0998a588";
    } else {
      perfilimagen = "Images/PerfilMujer.png";
      colores = "#d0296688";
    }
  }

  const SiMatch = async () => {
    //FUNCION PARA PONERLO EN LOS USERS DEL USUARIO EN FIRESTORE
    const uid = localStorage.getItem("uid");
    const id = personas.id;
    const response = await fetch("http://localhost:3000/SiMatch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, id }),
    });
    const data = await response.text();
    //console.log("lll");
    //console.log(data);
    if (data == "true") {
      //ENVIAR A CHATS
      navigate("/Chats", { replace: true });
    } else {
      //REFRESCAR PERSONAS
      ObtenerUsuario();
    }
    console.log(data);
  };

  const NoMatch = async () => {
    const uid = localStorage.getItem("uid");
    const id = personas.id;
    const response = await fetch("http://localhost:3000/NoMatch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, id }),
    });
    const data = await response.text();
    //console.log("lll");
    //console.log(data);
    if (data == "true") {
      ObtenerUsuario();
    } else {
      //REFRESCAR PERSONAS
      alert("Ocurrio un error inesperado");
    }
  };

  onMount(() => {
    isLoading = true;
    if (!$user) {
      navigate("/Login", { replace: true });
    } else {
      ObtenerUsuario();
    }
    window.onload = () => {
      isLoading = false;
    };
  });

  const ObtenerUsuario = async () => {
    isLoading = true;
    const uid = localStorage.getItem("uid");
    const response = await fetch("http://localhost:3000/SearchUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid }),
    });
    const data = await response.json();
    if (data != null) {
      isLoading = false;
      personHobbies = data.personHobbies;
      personas = data;
      if (personas.hetero) {
        orientacion = "HETEROSEXUAL";
      } else {
        orientacion = "HOMOSEXUAL";
      }
    }
    console.log(data);
  };
</script>

<LoadingContainer show={isLoading} />
<Navbar />
<div class="Contenedor">
  <div class="Perfil">
    <div class="ImagenDatos">
      <div class="ImagenPerfil">
        <img src={perfilimagen} alt="" />
      </div>
      <div class="Datos">
        <p>{personas.name}</p>
        <p>{orientacion}</p>
        <p>{personas.location}</p>
        <p>{personas.age}</p>
      </div>
    </div>
    <div class="Gustos">
      {#each personHobbies as hobbie}
        <div class="Gusto">
          <p class="Gustoo {personas.Hombre ? 'gusto_hombre' : 'gusto_mujer'}">
            {hobbie}
          </p>
        </div>
      {/each}
    </div>
  </div>
  <div class="MATCHSS">
    <button class="MATCH" on:click={SiMatch}>
      <img src="Images/Match1.png" alt="" />
    </button>
    <button class="NO_MATCH" on:click={NoMatch}>
      <img src="Images/UnMatch1.png" alt="" />
    </button>
  </div>
</div>

<style>
  @media (min-width: 768px) {
    .Contenedor {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      animation: aparecerDesdeArriba 1s ease forwards;
    }

    @keyframes aparecerDesdeArriba {
      0% {
        opacity: 0;
        transform: translateY(-10%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .MATCHSS > button {
      background-color: transparent;
      border-color: transparent;
      height: 12rem;
      width: 12rem;
    }

    .MATCHSS > button:hover {
      background-color: transparent;
      border-color: transparent;
      height: 12rem;
      width: 12rem;
      transform: scale(1.2);
      transition: 0.3s;
    }

    .MATCHSS > button:active {
      background-color: transparent;
      border-color: transparent;
      height: 12rem;
      width: 12rem;
      transform: scale(0.2);
      transition: 0.8s;
    }

    .MATCHSS {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin: 5rem;
      margin-right: 25rem;
      height: 40rem;
    }
    .MATCHSS > button > img {
      width: 100%;
      height: 100%;
    }
    .ImagenDatos {
      display: flex;
      flex-flow: row wrap;
      margin-bottom: 2rem;
    }
    .ImagenPerfil {
      height: 20rem;
      width: 20rem;
    }

    .Datos > p {
      font-size: 25px;
    }

    .ImagenPerfil > img {
      height: 100%;
      width: 100%;
    }
    .Perfil {
      display: flex;
      flex-flow: column nowrap;
      margin: 5rem;
      margin-left: 10rem;
      width: fit-content;
    }
    .Gustoo {
      font-size: 1.5rem;
      margin: 10px;
      margin-top: 0px;
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
      border-radius: 0.25rem;
      width: max-content;
      padding: 20px;
      padding-left: 3rem;
      padding-right: 3rem;
    }

    .Gustos {
      margin-top: 2rem;
      margin-right: 3rem;
      margin-left: 3rem;
      margin-bottom: 40px;
      display: flex;
      flex-flow: row wrap;
      width: 50rem;
      height: 21rem;
      overflow-y: auto;
    }
    .gusto_hombre {
      background-color: #0998a588;
    }
    .gusto_hombre:hover {
      background-color: #0da9b888;
    }
    .gusto_mujer {
      background-color: #d0296688;
    }
    .gusto_mujer:hover {
      background-color: #de2b6c88;
    }
  }

  @media (max-width: 767px) {
    .Contenedor {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      animation: aparecerDesdeArriba 1s ease forwards;
    }

    @keyframes aparecerDesdeArriba {
      0% {
        opacity: 0;
        transform: translateY(-10%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .MATCHSS > button {
      background-color: transparent;
      border-color: transparent;
      height: 12rem;
      width: 12rem;
    }

    .MATCHSS > button:hover {
      background-color: transparent;
      border-color: transparent;
      height: 12rem;
      width: 12rem;
      transform: scale(1.2);
      transition: 0.3s;
    }

    .MATCHSS > button:active {
      background-color: transparent;
      border-color: transparent;
      height: 12rem;
      width: 12rem;
      transform: scale(0.2);
      transition: 0.8s;
    }

    .MATCHSS {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin: 2rem;
      width: 100%;
    }
    .MATCHSS > button > img {
      width: 100%;
      height: 100%;
    }
    .ImagenDatos {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      margin: 0%;
    }
    .ImagenPerfil {
      height: 15rem;
      width: 15rem;
    }

    .Datos > p {
      font-size: 25px;
    }

    .ImagenPerfil > img {
      height: 100%;
      width: 100%;
    }
    .Perfil {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      margin: 3rem;
      width: fit-content;
    }
    .Gustoo {
      font-size: 1.5rem;
      margin: 10px;
      margin-top: 0px;
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
      border-radius: 0.25rem;
      width: max-content;
      padding: 20px;
      padding-left: 3rem;
      padding-right: 3rem;
    }

    .Gustos {
      margin-top: 2rem;
      margin-bottom: 40px;
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      height: 21rem;
      overflow-y: auto;
    }
    .gusto_hombre {
      background-color: #0998a588;
    }
    .gusto_hombre:hover {
      background-color: #0da9b888;
    }
    .gusto_mujer {
      background-color: #d0296688;
    }
    .gusto_mujer:hover {
      background-color: #de2b6c88;
    }
  }
</style>
