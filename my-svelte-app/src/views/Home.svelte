<script>
  import { user } from "../stores/User";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";

  let personas = [
    {
      name: "Juan Alberto Gutierrez",
      age: 28,
      orientacion: "Heterosexual",
      location: "Medellin/Antioquia",
      hobbies: [
        "Cocinar",
        "Leer",
        "Viajar",
        "Comer",
        "Jugar Videojuegos",
        "Perrear",
        "Ver peliculas",
        "Escuchar musica",
        "Bailar tango",
        "Salchipapa",
        "Salsa choke",
        "Comer pescado",
        "Jugar futbol",
      ],
      descripcion:
        "Hola me llamo juan y en realidad no existo pero es un buen test para la pagina :D",
      Hombre: true,
    },
    {
      name: "Daniela Gutierrez",
      age: 22,
      orientacion: "Heterosexual",
      location: "Medellin/Antioquia",
      hobbies: ["Cocinar", "Leer", "Viajar"],
      descripcion:
        "Hola me llamo Daniela y en realidad no existo pero es un buen test para la pagina :D",
      Hombre: false,
    },
  ];

  let personHobbies = [
    "Cocinar",
    "Leer",
    "Viajar",
    "Comer",
    "Jugar Videojuegos",
    "Perrear",
    "Ver peliculas",
    "Escuchar musica",
    "Bailar tango",
    "Salchipapa",
    "Salsa choke",
    "Comer pescado",
    "Jugar futbol",
  ];
  var perfilimagen;
  var colores;
  let cuenta = 0;
  $: {
    if (personas[cuenta].Hombre == true) {
      perfilimagen = "Images/PerfilHombre.png";
      colores = "#0998a588";
    } else {
      perfilimagen = "Images/PerfilMujer.png";
      colores = "#d0296688";
    }
  }
  const SiMatch = () => {
    cuenta++;
    //FUNCION PARA PONERLO EN LOS USERS DEL USUARIO EN FIRESTORE
  };
  const NoMatch = () => {
    cuenta++;
  };
  onMount(() => {
    if (!$user) {
      navigate("/Login", { replace: true });
    }
  });
</script>

<Navbar />
<div class="Contenedor">
  <div class="Perfil">
    <div class="ImagenDatos">
      <div class="ImagenPerfil">
        <img src={perfilimagen} alt="" />
      </div>
      <div class="Datos">
        <p>{personas[cuenta].name}</p>
        <p>{personas[cuenta].orientacion}</p>
        <p>{personas[cuenta].location}</p>
        <p>{personas[cuenta].age}</p>
      </div>
    </div>
    <div class="Gustos">
      {#each personHobbies as hobbie}
        <div class="Gusto">
          <p
            class="Gustoo {personas[cuenta].Hombre
              ? 'gusto_hombre'
              : 'gusto_mujer'}"
          >
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
