<script>
  import {user} from '../stores/User'
  import {onMount} from 'svelte'
  import {navigate} from 'svelte-routing'
  import {auth} from '../firebase'

  onMount(() => {
    if(!$user){
      console.log("pp")
      navigate('/Login',{replace:true})
    }
    else{
      console.log("asdasd")
    }
  })

  let person = {
    name: 'Juan Alberto Gutierrez',
    age: 28,
    orientacion: 'Heterosexual',
    location: 'Medellin/Antioquia',
    hobbies: ['Cocinar', 'Leer', 'Viajar','Comer','Jugar Videojuegos','Perrear','Ver peliculas','Escuchar musica','Bailar tango','Salchipapa','Salsa choke'
              ,'Comer pescado','Jugar futbol'],
    descripcion: 'Hola me llamo juan y en realidad no existo pero es un buen test para la pagina :D',
    Hombre: true
  };
  var perfilimagen;
  var colores;
  if (person.Hombre == true){
    perfilimagen = "Images/PerfilHombre.png";
    colores = "";
  }
  else{
    perfilimagen = "Images/PerfilMujer.png";
    colores = "#";
  }
  
</script>


<div class = bck>
  <img src = "Images/BackgroundLogin.png" id = "Background" alt="Background">
</div>
{#if $user}
  <div class = "Contenedor">
    <img src={perfilimagen} id="PerfilImage" alt="Perfil">
    <div class="Datos">
      <p style="font-size: 25px;">{person.name}</p>
      <p style="font-size: 25px;">{person.orientacion}</p>
      <p style="font-size: 25px;">{person.location}</p>
      <p style="font-size: 25px;">{person.age}</p>
    </div>
    <div class="Gustos">
      {#each person.hobbies as hobbie}
        <div class = "Gusto">
          <p class="Gustoo {person.Hombre ? 'gusto_hombre' : 'gusto_mujer'}">{hobbie}</p>
        </div>
      {/each}
    </div>
    <a style="height: fit-content;margin-left: 2%;" href="/"><img style="height: 80px;" src="Images/Editar.png" alt="Editar"></a>
    <div class="Descripcion">
      <p style="font-size: 140%;margin: 2%;">
        {person.descripcion}
      </p>
    </div>
  </div>
  {/if}
  
  
  
  <style>
    .bck{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #Background{
        height: 34rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        backdrop-filter: blur(10px);
        filter: opacity(0.05);
    }
    .Descripcion{
      margin-left: 70px;
      height: 200px;
      width: 600px;
      background: rgba(131, 120, 79, 0.77);
      overflow-y: scroll;
      box-shadow: inset 4px 6px 4px rgba(0, 0, 0, 0.25);
    }
    .Gustoo{
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

    .Gustos{
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

    .Datos{
      margin-top: 70px;
      height: fit-content;
    }
    .Contenedor{
      display: flex;
      flex-flow: row wrap;
      
    }
    #PerfilImage{
      margin: 70px;
      margin-right: 40px;
      width: 245.5px;
      height: 245.5px;
    }
    :global(body){
      padding: 0px;
      background: rgba(218, 159, 70, 0.21);
    }
  </style>