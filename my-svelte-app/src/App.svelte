<script>
  let person = {
    name: 'Juan Alberto Gutierrez',
    age: 28,
    location: 'Buenos Aires',
    hobbies: ['Cocinar', 'Leer', 'Viajar'],
    descripcion: 'Hola me llamo juan y en realidad no existo pero es un buen test para la pagina :D'
  };
  let items = [
    { title: "Inicio", link: "/", imageurl: "Images/Home-removebg-preview.png"},
    { title: "Notificaciones", link: "/notificaciones", imageurl: "Images/Notificaciones.png" },
    { title: "Mensajes", link: "/mensajes", imageurl: "Images/Mensajes1.png" }
  ];
</script>



<nav>
  <ul>
    {#each items as item}
      <li>
        <a href={item.link} id={item.title}><img src={item.imageurl} alt={item.title}/></a>
      </li>
    {/each}
  </ul>
</nav>
<div class = "Contenedor">
  <div class="Contenido1">
    <img src="Images/Profile.png" alt="Profile" id="Prof">
    <div id="Datos">
      <p>
        {person.name}
      </p>
      <p>
        {person.age}
      </p>
    </div>
    <p id="Descripcion">
      {person.descripcion}
    </p>
  </div>
  <div class="Contenido2">
    <p>
      <a href="1" id = "Updelimg">Upload Image</a>
      <img src="Images/Necesario.png" alt="Necessary" id="Necess">
    </p>
    <br>
    <p><a href="2" id = "Updelimg">Delete Image</a></p>
  </div>
  <div class="Contenido3">
    
  </div>
</div>




<style>
  img{
    width: 30%;
    height: 30%;
    filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.25));
  }

  nav {
    background-color: #8D5B5B;
    border: black;
    border-bottom-style: solid;
    display: flex;
	  width: 100%;
  }

  ul {
	  list-style: none;
    border-radius: 10px;
    border-color: black;
    margin: 3;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
	  width: 100%;
  }

  li {

    margin: 0 10px;
	  padding-left: 2%;
	  padding-right: 2%;
  }

  #Inicio {
    display: flex;
    justify-content: start;
    color: #fff;
    text-decoration: none;
  }
  #Mensajes {
    display: flex;
    justify-content: end;
    color: #fff;
  }
  #Notificaciones {
    display: flex;
    justify-content: center;
    color: #fff;
    text-decoration: none;
  }

  .Contenedor {
    background-color: #8D5B5B;
	  height: 100%;
    padding: 4%;
  }

  .Contenido1 {
    display: flex;
    justify-content: flex-start;
	  height: 27%;
    margin-bottom: 2%;
    
  }
  .Contenido2 {
    display: contents;
    background-color: #cf4949;
	  height: 10%;
    padding-top: 1%;
  }
  .Contenido3 {
    background-color: #332929;
	  height: 13%;
  }

  #Updelimg{
    font-style: normal;
    font-weight: 350;
    font-size: 200%;
    line-height: 15px;
    text-decoration-line: underline;
    color: #FFFFFF;
  }

  #Necess{
    width: 2.5%;
    height: 2.5%;
  }

  #Prof{
    width: 18%;
    height: 100%;
    box-shadow: 1px 10px 8px rgba(0, 0, 0, 0.25);
  }

  #Datos{
    padding-left: 3%;
    padding-right: 2%;
    font-style: normal;
    font-weight: 350;
    font-size: 200%;
    line-height: 15px;
    color: #FFFFFF;
    width: 40%;
  }

  #Descripcion{
    width: 100%;
    height: 85%;
    padding: 2%;
    float:right;
    margin: 0%;
    margin-left: 10%;
    margin-right: 2%;
    background-color: #62333349;
    box-shadow: inset 6px 10px 20px rgba(0, 0, 0, 0.25);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 200%;
    color: #ffffff85;
  }

  #Datos > p{
    width: 100%;
    margin: 0%;
    margin-top: 1%;
    margin-bottom: 10%;
    line-height: 100%;
  }

</style>