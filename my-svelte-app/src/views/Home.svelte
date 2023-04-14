<script>
    import { loop_guard } from "svelte/internal";
    import {user} from '../stores/User'
    import {onMount} from 'svelte'
    import {navigate} from 'svelte-routing'

    let personas = [
        {
        name: 'Juan Alberto Gutierrez',
        age: 28,
        orientacion: 'Heterosexual',
        location: 'Medellin/Antioquia',
        hobbies: ['Cocinar', 'Leer', 'Viajar','Comer','Jugar Videojuegos','Perrear','Ver peliculas','Escuchar musica','Bailar tango','Salchipapa','Salsa choke'
                    ,'Comer pescado','Jugar futbol'],
        descripcion: 'Hola me llamo juan y en realidad no existo pero es un buen test para la pagina :D',
        Hombre: true
        },
        {
        name: 'Daniela Gutierrez',
        age: 22,
        orientacion: 'Heterosexual',
        location: 'Medellin/Antioquia',
        hobbies: ['Cocinar', 'Leer', 'Viajar'],
        descripcion: 'Hola me llamo Daniela y en realidad no existo pero es un buen test para la pagina :D',
        Hombre: false
        }
    ]
    var perfilimagen;
    var colores;
    let cuenta = 0;
    $:{
        if (personas[cuenta].Hombre == true){
            perfilimagen = "Images/PerfilHombre.png";
            colores = "#0998a588";
        }
        else{
            perfilimagen = "Images/PerfilMujer.png";
            colores = "#d0296688";
        }
    }
    const contadormas = () => cuenta++;
    onMount(() => {
    if(!$user){
      navigate('/Login',{replace:true})
    }
    })
</script>

<div class="Contenedor">
    <div class="Izquierda">
        <div class = "Subizquierda">
            <div class="ImagenPerfil">
                <img id="Perfil" src={perfilimagen} alt="PerfilImagen">
            </div>
            <div class="Datos">
                <p style="font-size: 25px;">{personas[cuenta].name}</p>
                <p style="font-size: 25px;">{personas[cuenta].orientacion}</p>
                <p style="font-size: 25px;">{personas[cuenta].location}</p>
                <p style="font-size: 25px;">{personas[cuenta].age}</p>
              </div>
        </div>
        <div class="Gustos">
            {#each personas[cuenta].hobbies as hobbie}
              <div style="height: fit-content;" class = "Gusto">
                <p style="background-color: {colores};" class="Gustoo">{hobbie}</p>
              </div>
            {/each}
          </div>
    </div>
    <div class = "Derecha">
        <div class="Match">
            <button on:click={contadormas} style="background-color: transparent;margin-bottom: 50px;border: 0px;"><img class="Matchimg" id="Matchimg" alt="Matchimg" src="Images/Match.png"></button>
        </div>
        <div class="NoMatch">
            <button style="background-color: transparent;margin-top: 50px;border: 0px;"><img class="Matchimg" id="UnMatchimg" alt="Unmatchimg" src="Images/UnMatch.png"></button>
        </div>
    </div>
</div>

<style>
    #Matchimg:hover{
        background-color: rgb(23, 173, 86);
        border-radius: 30%;
    }
    #UnMatchimg:hover{
        background-color: rgb(173, 23, 23);
        border-radius: 30%;
    }
    .Derecha{
        margin: 200px;
        margin-top: 70px;
    }
    .Matchimg{
        height: 200px;
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
      margin: 10px;
      margin-left: 100px;
      display: flex;
      flex-flow: row wrap;
      width: 700px;
      height: 310px;
      overflow-y: scroll;
    }
    .Datos{
        margin-top: 70px;  
    }
    #Perfil{
        margin: 70px;
        margin-top: 70px;
        margin-left: 100px;
        height: 240px;
    }
    .Subizquierda{
        display: flex;
        flex-flow: row wrap;
    }
    .Contenedor{
        display: flex;
        flex-flow: row wrap;
    }
    
</style>