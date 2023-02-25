<script>
  let person = {
    name: 'Juan',
    age: 28,
    location: 'Buenos Aires',
    hobbies: ['Cocinar', 'Leer', 'Viajar'],
    bio: 'Hola xd'
  };
  let items = [
    { title: "Inicio", link: "/", imageurl: "Images/Home-removebg-preview.png"},
    { title: "Notificaciones", link: "/notificaciones", imageurl: "Images/Notificaciones.png" },
    { title: "Mensajes", link: "/mensajes", imageurl: "Images/Mensajes.png" }
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
    text-decoration: none;
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
    padding: 6%;
  }

  .Contenido1 {
    background-color: #aa8989;
	  height: 25%;
    
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
</style>