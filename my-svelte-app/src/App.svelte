<script>
  let person = {
    name: 'Juan',
    age: 28,
    location: 'Buenos Aires',
    hobbies: ['Cocinar', 'Leer', 'Viajar'],
    bio: 'Hola xd'
  };
  let items = [
    { title: "Inicio", link: "/", imageurl: "src\assets\Images\Home-removebg-preview.png"},
    { title: "Notificaciones", link: "/notificaciones", imageurl: "src\assets\Images\Notificaciones.png" },
    { title: "Mensajes", link: "/mensajes", imageurl: "src\assets\Images\Mensajes.png" }
  ];
</script>



<html lang="es">
  <nav>
    <ul>
      {#each items as item}
        <li>
          <a href={item.link}><img src="..\src\assets\Images\Notificaciones.png" alt={item.title}/></a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="ContenedorRaiz">
	<main>
		<h1>{person.name}</h1>
		<p>Edad: {person.age}</p>
		<p>Ubicación: {person.location}</p>
		<p>Hobbies: {person.hobbies.join(', ')}</p>
		<p>Biografía: {person.bio}</p>
	  </main>
  </div>
</html>



<style>
  img{
    size: 200px;
  }

  nav {
    background-color: #884c4c;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0%;
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
    margin: 0 50px;
	padding-left: 5%;
	padding-right: 5%;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
  main {
    background-color: #884c4c;
    width: 90%;
	height: 40%;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }
</style>