<script>
  import { user } from "../stores/User";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  let person = [];
  let personHobbies = [];
  var imghombre = "Images/PerfilHombre.png";
  var imgmujer = "Images/PerfilMujer.png";

  onMount(() => {
    if ($user == null) {
      console.log("Estas siendo dirigido al Login desde perfil.");
      console.log(user);
      navigate("/Login", { replace: true });
    }

    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => {
        person = data;
        personHobbies = data.hobbies;
      });
  });
</script>

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
      <p style="font-size: 25px;">{person.name}</p>
      <p style="font-size: 25px;">{person.orientacion}</p>
      <p style="font-size: 25px;">{person.location}</p>
      <p style="font-size: 25px;">{person.age}</p>
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
    <a style="height: fit-content;margin-left: 2%;" href="/"
      ><img style="height: 80px;" src="Images/Editar.png" alt="Editar" /></a
    >
    <div class="Descripcion">
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
  .Descripcion {
    margin-left: 70px;
    height: 200px;
    width: 600px;
    /* background: hsla(22, 47%, 35%, 0.707); */
    background: linear-gradient(hsl(186, 56%, 44%), rgb(218, 106, 184));
    overflow-y: scroll;
    box-shadow: inset 4px 6px 4px rgba(0, 0, 0, 0.25);
  }
  .Gustoo {
    font-size: 20px;
    margin: 10px;
    margin-top: 0px;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
    border-radius: 0.25rem;
    width: max-content;
    padding: 20px;
    padding-left: 28px;
    padding-right: 28px;
  }

  .Gustos {
    margin: 70px;
    margin-right: 20px;
    margin-left: 150px;
    margin-bottom: 40px;
    display: flex;
    flex-flow: row wrap;
    width: 41%;
    height: 310px;
    overflow-y: scroll;
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
    margin-top: 70px;
    height: fit-content;
  }
  .Contenedor {
    display: flex;
    flex-flow: row wrap;
  }
  #PerfilImage {
    margin: 70px;
    margin-right: 40px;
    width: 245.5px;
    height: 245.5px;
  }
  :global(body) {
    padding: 0px;
    background: rgba(218, 159, 70, 0.21);
  }
</style>
