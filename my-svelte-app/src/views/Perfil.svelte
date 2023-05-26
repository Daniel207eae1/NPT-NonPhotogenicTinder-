<script>
  import { user } from "../stores/User";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import Navbar from "../components/Navbar.svelte";

  let person = [];
  let personHobbies = [];
  let orientacion = "";
  var imghombre = "Images/PerfilHombre.png";
  var imgmujer = "Images/PerfilMujer.png";

  onMount(() => {
    if (!$user) {
      console.log("Estas siendo dirigido al Login desde perfil.");
      navigate("/Login", { replace: true });
    } else {
      ObtenerUsuario();
    }
  });

  const ObtenerUsuario = async () => {
    const uid = localStorage.getItem("uid");
    const response = await fetch("http://localhost:3000/GetUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid }),
    });
    const data = await response.json();
    if (data != null) {
      personHobbies = data.personHobbies;
      person = data;
      if (person.hetero) {
        orientacion = "HETEROSEXUAL";
      } else {
        orientacion = "HOMOSEXUAL";
      }
    }
    console.log(data.Hombre);
  };

  function EditarPerfil() {
    navigate("/ConfigPerfil", { replace: true });
  }
</script>

<Navbar />
<div class="bck">
  <img src="Images/BackgroundLogin.png" id="Background" alt="Background" />
</div>
{#if $user}
  <div class="Contenedor">
    <img
      src={person.Hombre ? imghombre : imgmujer}
      id="PerfilImage"
      alt="Perfil"
    />
    <div class="Datos">
      <p>{person.name}</p>
      <p>{orientacion}</p>
      <p>{person.location}</p>
      <p>{person.age}</p>
    </div>
    <div class="Gustos">
      {#each personHobbies as hobbie}
        <div class="Gusto">
          <p class="Gustoo {person.Hombre ? 'gusto_hombre' : 'gusto_mujer'}">
            {hobbie}
          </p>
        </div>
      {/each}
    </div>
    <a class="editar_btn" href="/ConfigPerfil" on:click={EditarPerfil}
      ><img class="Editar" src="Images/Editar.png" alt="Editar" /></a
    >
    <div
      class="Descripcion {person.Hombre
        ? 'Descripcion_hombre'
        : 'Descripcion_mujer'}"
    >
      <p style="font-size: 140%;margin: 2%;">
        {person.descripcion}
      </p>
    </div>
  </div>
{/if}

<style>
  .bck {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 768px) {
    #Background {
      height: 34rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      backdrop-filter: blur(10px);
      filter: opacity(0.05);
    }
    .Descripcion_hombre {
      margin-left: 7rem;
      margin-top: 3rem;
      height: 13rem;
      width: 45%;
      /* background: hsla(22, 47%, 35%, 0.707); */
      background: linear-gradient(#0998a588, rgb(51, 130, 161));
      overflow-y: scroll;
      overflow-wrap: break-word;
      box-shadow: inset 4px 6px 4px rgba(0, 0, 0, 0.25);
    }
    .Descripcion_mujer {
      margin-left: 7rem;
      margin-top: 3rem;
      height: 13rem;
      width: 45%;
      /* background: hsla(22, 47%, 35%, 0.707); */
      background: linear-gradient(#d0296688, rgb(185, 59, 118));
      overflow-y: scroll;
      overflow-wrap: break-word;
      box-shadow: inset 4px 6px 4px rgba(0, 0, 0, 0.25);
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
      margin: 7rem;
      margin-right: 3rem;
      margin-left: 7rem;
      margin-bottom: 40px;
      display: flex;
      flex-flow: row wrap;
      width: 43%;
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

    .Datos {
      margin-top: 7rem;
      height: fit-content;
      margin-right: 7rem;
      margin-left: 2rem;
    }

    .Datos > p {
      font-size: 25px;
    }
    .Contenedor {
      display: flex;
      flex-flow: row wrap;
    }

    #PerfilImage {
      margin: 7rem;
      margin-right: 2rem;
      width: 245.5px;
      height: 245.5px;
    }
    :global(body) {
      padding: 0px;
      background: rgba(218, 159, 70, 0.21);
    }
    .editar_btn {
      height: fit-content;
      margin-left: 2%;
      position: absolute;
      top: 10%;
      right: 2%;
    }
    .Editar {
      height: 80px;
    }
    .Editar:hover {
      transform: scale(1.1);
      transition: 0.2s;
    }
  }

  @media (max-width: 767px) {
    #Background {
      height: 50%;
      position: absolute;
      top: 80%;
      transform: translate(-50%, -50%);
      z-index: -1;
      backdrop-filter: blur(10px);
      filter: opacity(0.05);
    }
    .Descripcion_hombre {
      margin-top: 3rem;
      margin-bottom: 3rem;
      height: 13rem;
      width: 90%;
      /* background: hsla(22, 47%, 35%, 0.707); */
      background: linear-gradient(#0998a588, rgb(51, 130, 161));
      overflow-y: scroll;
      box-shadow: inset 4px 6px 4px rgba(0, 0, 0, 0.25);
    }
    .Descripcion_mujer {
      margin-top: 3rem;
      margin-bottom: 3rem;
      height: 13rem;
      width: 90%;
      /* background: hsla(22, 47%, 35%, 0.707); */
      background: linear-gradient(#d0296688, rgb(185, 59, 118));
      overflow-y: scroll;
      box-shadow: inset 4px 6px 4px rgba(0, 0, 0, 0.25);
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
      margin: 2rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      width: 90%;
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

    .Datos {
      margin-top: 1rem;
      height: fit-content;
    }

    .Datos > p {
      font-size: 2rem;
    }
    .Contenedor {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }

    #PerfilImage {
      margin: 7rem;
      margin-bottom: 4rem;
      width: 245.5px;
      height: 245.5px;
    }
    :global(body) {
      padding: 0px;
      background: rgba(218, 159, 70, 0.21);
    }
    .editar_btn {
      height: fit-content;
      margin-left: 2%;
      position: absolute;
      top: 12%;
      left: 2%;
    }
    .Editar {
      height: 80px;
    }
  }
</style>
