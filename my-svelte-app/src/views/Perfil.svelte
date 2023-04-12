<script>
  import {user} from '../stores/User'
  import {onMount} from 'svelte'
  import {navigate} from 'svelte-routing'

  onMount(() => {
    if(!$user){
      navigate('/Login',{replace:true})
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
    colores = "#0998a588";
  }
  else{
    perfilimagen = "Images/PerfilMujer.png";
    colores = "#d0296688";
  }
</script>
  
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
            <p style="background-color: {colores};" class="Gustoo">{hobbie}</p>
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
      border-radius: 45%;
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
    .Navegador{
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      border-bottom: black 3px solid;
      margin: 0px;
      padding: 2%;
      background: rgba(186, 130, 47, 0.241);
    }
    .Navelement{
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      margin-right: 0.5%;
      margin-left: 0.5%;
    }
    .Nava{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Navicons{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
    }
    .Navicons:hover{
      width: 170%;
      height: 170%;
      display: flex;
      justify-content: center;
      background: rgba(185, 135, 59, 0.366);
      border-radius: 20%;
      padding: 20%;
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
    }
    #Perfil{
      background: rgba(185, 135, 59, 0.366);
      border-radius: 50%;
    }
    :global(body){
      padding: 0px;
      background: rgba(218, 159, 70, 0.21);
    }
  </style>