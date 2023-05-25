<script>
  import { user } from "../stores/User";
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";

  onMount(() => {
    if ($user == null) {
      navigate("/Login", { replace: true });
    }
  });

  let nuevoHobbie = "";
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
  let person = {
    name: "",
    age: 0,
    orientacion: "",
    location: "",
    descripcion: "",
    Hombre: true,
  };

  function GuardarCambios() {
    navigate("/Perfil", { replace: true });
  }

  function changeSwitch() {
    var switchLabel = document.getElementById("switchLabel");
    var isChecked = document.querySelector(".switch input").checked;
    if (isChecked) {
      switchLabel.textContent = "FEMENINO";
    } else {
      switchLabel.textContent = "MASCULINO";
    }
    console.log(switchLabel.textContent);
  }

  function AñadirGusto() {
    if (nuevoHobbie.trim() !== "") {
      personHobbies = [...personHobbies, nuevoHobbie];
      nuevoHobbie = "";
    }
  }

  function EliminarGusto(index) {
    const hobbieEliminado = personHobbies[index];

    // Realizar cualquier acción necesaria con el elemento eliminado
    console.log("Elemento eliminado:", hobbieEliminado);
    if (personHobbies.length > 10) {
      personHobbies = personHobbies.filter((_, i) => i !== index);
    } else {
      alert("¡No seas timido!: La cantidad minima de Hobbies es 10.");
    }
  }

  function changeSwitchHH() {
    var switchLabel = document.getElementById("switchLabelHH");
    var isChecked = document.querySelector(".switchHH input").checked;
    if (isChecked) {
      switchLabel.textContent = "HOMOSEXUAL";
    } else {
      switchLabel.textContent = "HETEROSEXUAL";
    }
    console.log(switchLabel.textContent);
  }

  //Si esta configurado ya hacer algo

  //Si no esta configurado hacer otra cosa
</script>

<p id="Title">Configuracion de Perfil</p>
<div class="bck">
  <img src="Images/BackgroundLogin.png" id="Background" alt="Background" />
</div>
<div class="Contenedor">
  <div class="DatosPerfil">
    <p style="margin-top: 0%;">¿Con cual te identificas mas?</p>
    <label class="switch">
      <input type="checkbox" on:change={changeSwitch} />
      <span class="slider" />
      <span id="switchLabel">MASCULINO</span>
    </label>
    <p>Nombre</p>
    <div class="textbox-container">
      <input
        type="text"
        id="textboxNombre"
        value={person.name}
        minlength="3"
        required
      />
      <div class="base-line" />
    </div>
    <p>¿Que orientacion te identifica mas?</p>
    <label class="switchHH">
      <input type="checkbox" on:change={changeSwitchHH} />
      <span class="sliderHH" />
      <span id="switchLabelHH">HETEROSEXUAL</span>
    </label>
    <p>Ciudad</p>
    <div class="textbox-container">
      <input
        type="text"
        id="textboxCiudad"
        value={person.location}
        minlength="2"
        required
      />
      <div class="base-line" />
    </div>
    <p>Edad</p>
    <div class="textbox-container">
      <input
        type="text"
        id="textboxEdad"
        maxlength="2"
        minlength="1"
        pattern="[0-9]{(1, 2)}"
        value={person.age}
        required
      />
      <div class="base-line" />
    </div>
  </div>
  <div class="SupGustos">
    <div class="AñadirGustos">
      <div class="textbox-container">
        <input
          type="text"
          bind:value={nuevoHobbie}
          id="textboxGusto"
          placeholder="Agregar Gusto"
        />
        <div class="base-line" />
      </div>
      <button on:click={AñadirGusto} class="AñaditGustoBoton">
        <img src="Images/Añadir.png" alt="Añadir" />
      </button>
    </div>
    <div class="Gustos">
      {#each personHobbies as hobbie, index}
        <div class="Gusto">
          <p class="Gustoo {person.Hombre ? 'gusto_hombre' : 'gusto_mujer'}">
            {hobbie}
          </p>
          <button on:click={() => EliminarGusto(index)} class="EliminarGusto">
            <img src="Images/Eliminar.png" alt="Eliminar" />
          </button>
        </div>
      {/each}
    </div>
  </div>
  <div class="Descripcion">
    <p>Cuentanos sobre ti y describe un poco mas tus gustos</p>
    <textarea
      type="text"
      class="DescripcionText"
      value={person.descripcion}
      minlength="192"
      required
    />
    <button on:click={GuardarCambios} class="GuardarCambios">
      <p>Guardar cambios</p>
      <img src="Images/GuardarCambios.png" alt="Guardar" />
    </button>
  </div>
</div>
<div class="ContenedorSave">
  <p />
</div>

<style>
  @media (min-width: 768px) {
    .GuardarCambios {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      background-color: rgba(70, 184, 70, 0.527);
      border-radius: 1rem;
      height: 5rem;
      width: 20rem;
      justify-content: space-around;
    }

    .GuardarCambios:hover {
      transform: scale(1.1);
      transition: 0.1s;
    }

    .GuardarCambios > p {
      font-size: 1.5rem;
      color: #000;
    }

    .GuardarCambios > img {
      height: 4rem;
      width: 4rem;
    }

    .Descripcion {
      margin-right: 5%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .Descripcion > p {
      font-size: 1.6rem;
      margin-top: 0%;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: #533c11;
      width: 25rem;
    }

    .AñadirGustos {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-bottom: 3rem;
    }

    .DescripcionText {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #000;
      outline: none;
      overflow-y: auto;
      width: 25rem;
      height: 30rem;
      font-size: 1.5rem;
      box-shadow: inset 0px 6px 8px #684d1c88;
      border-radius: 5%;
      margin-bottom: 4rem;
    }

    .DescripcionText::placeholder {
      color: #999;
    }

    .DescripcionText:invalid {
      border-color: red;
      border-width: 5px;
    }

    .DescripcionText:valid {
      border-color: green;
      border-width: 5px;
    }
    .AñaditGustoBoton {
      background-color: white;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      padding: 0%;
      display: flex;
      margin-left: 2rem;
    }

    .AñaditGustoBoton:hover {
      background-color: white;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      padding: 0%;
      display: flex;
      margin-left: 2rem;
      transform: rotate(90deg) scale(1.1);
      transition: 0.3s;
    }

    .AñaditGustoBoton > img {
      margin: 0%;
      height: 100%;
      width: 100%;
    }

    .DatosPerfil > p {
      font-size: 1.6rem;
      margin-top: 4rem;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: #533c11;
    }
    .DatosPerfil {
      margin-left: 5%;
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
    .Contenedor {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 1rem;
    }
    #Title {
      display: flex;
      justify-content: center;
      font-size: 4rem;
      left: 10%;
      right: 10%;
      top: 1px;
      margin: 1rem;
      margin-bottom: 3rem;
      color: #533c11;
    }
    .Gusto {
      position: relative;
      overflow: visible;
      transition: opacity 0.3s ease;
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

    .EliminarGusto {
      position: absolute;
      top: 0%;
      right: 0%;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      padding: 0%;
      margin: 0%;
    }

    .EliminarGusto:hover {
      transform: rotate(90deg);
      transition: 0.4s;
    }

    .EliminarGusto > img {
      margin: 0%;
      height: 100%;
      width: 100%;
    }

    .Gustos {
      margin-right: 10%;
      margin-left: 0%;
      display: flex;
      flex-flow: row wrap;
      width: 35rem;
      height: 40rem;
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
    :global(body) {
      padding: 0px;
      background: rgba(218, 159, 70, 0.21);
    }
  }

  @media (max-width: 767px) {
    .GuardarCambios {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      background-color: rgba(70, 184, 70, 0.527);
      border-radius: 1rem;
      height: 5rem;
      width: 20rem;
      justify-content: space-around;
      margin-bottom: 3rem;
    }

    .GuardarCambios:hover {
      transform: scale(1.1);
      transition: 0.1s;
    }

    .GuardarCambios > p {
      font-size: 1.5rem;
      color: #000;
    }

    .GuardarCambios > img {
      height: 4rem;
      width: 4rem;
    }

    .Descripcion {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .Descripcion > p {
      font-size: 1.6rem;
      margin-top: 0%;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: #533c11;
      width: 25rem;
    }

    .AñadirGustos {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-bottom: 3rem;
    }

    .DescripcionText {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #000;
      outline: none;
      overflow-y: auto;
      width: 25rem;
      height: 30rem;
      font-size: 1.5rem;
      box-shadow: inset 0px 6px 8px #684d1c88;
      border-radius: 5%;
      margin-bottom: 4rem;
    }

    .DescripcionText::placeholder {
      color: #999;
    }

    .DescripcionText:invalid {
      border-color: red;
      border-width: 5px;
    }

    .DescripcionText:valid {
      border-color: green;
      border-width: 5px;
    }
    .AñaditGustoBoton {
      background-color: white;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      padding: 0%;
      display: flex;
      margin-left: 2rem;
    }

    .AñaditGustoBoton:hover {
      background-color: white;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      padding: 0%;
      display: flex;
      margin-left: 2rem;
      transform: rotate(90deg) scale(1.1);
      transition: 0.3s;
    }

    .AñaditGustoBoton > img {
      margin: 0%;
      height: 100%;
      width: 100%;
    }

    .DatosPerfil > p {
      font-size: 1.6rem;
      margin-top: 4rem;
      margin-bottom: 0.5rem;
      font-weight: bold;
      color: #533c11;
    }
    .DatosPerfil {
      margin-bottom: 10rem;
    }
    .Contenedor {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 1rem;
    }
    #Title {
      display: flex;
      justify-content: center;
      font-size: 3.5rem;
      left: 10%;
      right: 10%;
      top: 1px;
      margin: 2rem;
      margin-bottom: 4rem;
      color: #533c11;
    }
    .Gusto {
      position: relative;
      overflow: visible;
      transition: opacity 0.3s ease;
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

    .EliminarGusto {
      position: absolute;
      top: 0%;
      right: 0%;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      padding: 0%;
      margin: 0%;
    }

    .EliminarGusto:hover {
      transform: rotate(90deg);
      transition: 0.4s;
    }

    .EliminarGusto > img {
      margin: 0%;
      height: 100%;
      width: 100%;
    }

    .Gustos {
      margin-left: 5%;
      margin-right: 5%;
      margin-bottom: 10rem;
      display: flex;
      flex-flow: row wrap;
      width: 90%;
      height: 40rem;
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
    #Background {
      height: 40%;
      position: absolute;
      top: 80%;
      transform: translate(-50%, -50%);
      z-index: -1;
      backdrop-filter: blur(10px);
      filter: opacity(0.05);
    }
    :global(body) {
      padding: 0px;
      background: rgba(218, 159, 70, 0.21);
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 12.8rem;
    height: 3rem;
  }
  .switch input {
    display: none;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0998a588;
    transition: 0.4s;
    border-radius: 3rem;
    box-shadow: 0px 6px 8px #05677088;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 2.5rem;
    width: 2.5rem;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: all 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #ff69b4;
    box-shadow: 0px 6px 8px #eb14c788;
  }

  input:checked + .slider:before {
    transform: translateX(9.8rem);
  }

  #switchLabel {
    position: absolute;
    top: 45%;
    left: 3.8rem;
    transform: translateY(-50%);
    color: #003561;
    font-style: italic;
    font-weight: bold;
    font-size: 1.4rem;
  }

  input:checked + .slider ~ #switchLabel {
    position: absolute;
    left: 1.5rem;
    color: #5c0233;
    font-style: italic;
    font-weight: bold;
    font-size: 1.4rem;
    top: 45%;
  }
  .textbox-container {
    position: relative;
    display: inline-block;
  }

  #textboxNombre {
    width: 200px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    margin: 0%;
    border: none;
    outline: none;
    font-size: 1.5rem;
    background-color: rgba(218, 159, 70, 0);
  }

  #textboxNombre:invalid + .base-line {
    background-color: black;
  }

  #textboxCiudad:invalid + .base-line {
    background-color: black;
  }

  #textboxGusto:invalid + .base-line {
    background-color: black;
  }

  #textboxEdad:invalid + .base-line {
    background-color: black;
  }

  #textboxCiudad {
    width: 200px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    margin: 0%;
    border: none;
    outline: none;
    font-size: 1.5rem;
    background-color: rgba(218, 159, 70, 0);
  }
  #textboxGusto {
    width: 20rem;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    margin: 0%;
    border: none;
    outline: none;
    font-size: 1.5rem;
    background-color: rgba(218, 159, 70, 0);
  }

  #textboxEdad {
    width: 70px;
    height: 40px;
    padding: 10px;
    border-radius: 20px;
    margin: 0%;
    border: none;
    outline: none;
    font-size: 1.5rem;
    background-color: rgba(218, 159, 70, 0);
  }

  .base-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: green;
  }
  .switchHH {
    position: relative;
    display: inline-block;
    width: 12.8rem;
    height: 3rem;
  }
  .switchHH input {
    display: none;
  }
  .sliderHH {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #684d1c88;
    transition: 0.4s;
    border-radius: 3rem;
    box-shadow: 0px 6px 8px #684d1c88;
  }

  .sliderHH:before {
    position: absolute;
    content: "";
    height: 2.5rem;
    width: 2.5rem;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: all 0.4s;
    border-radius: 50%;
  }

  input:checked + .sliderHH {
    background-color: #684d1c88;
  }

  input:checked + .sliderHH:before {
    transform: translateX(9.8rem);
    background-color: black;
  }

  #switchLabelHH {
    position: absolute;
    top: 45%;
    left: 3.2rem;
    transform: translateY(-50%);
    color: #ffffff;
    font-style: italic;
    font-weight: bold;
    font-size: 1.25rem;
  }

  input:checked + .sliderHH ~ #switchLabelHH {
    position: absolute;
    left: 0.6rem;
    color: #000000c2;
    font-style: italic;
    font-weight: bold;
    font-size: 1.3rem;
    top: 45%;
  }
</style>
