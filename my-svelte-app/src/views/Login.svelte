<script>
  import { user } from "../stores/User";
  import { navigate } from "svelte-routing";
  import { auth, provider } from "../firebase";
  import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { onMount } from "svelte";

  const procesarFormulario = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      localStorage.setItem("uid", res.user.uid);

      //BUSCAR SI EL USUARIO ESTA EN LA BASE DE DATOS
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uid: localStorage.getItem("uid") }),
          //body: JSON.stringify(localStorage.getItem("uid")),
        };
        const request = new Request(
          "http://localhost:3000/NewUser",
          requestOptions
        );
        const response = await fetch(request);
        const data = await response.text();
        //respuesta = JSON.stringify(data);
        //respuesta = data;

        console.log(data);
        if (data == "true") {
          //IF USUARIO ESTA REGISTRADO
          localStorage.setItem("user", user);
          navigate("/Perfil", { replace: true });
        } else {
          //ELSE LLEVARLO A CONFIG PERFIL
          navigate("/ConfigPerfil", { replace: true });
        }
      } catch (error) {}

      user.setUser(res.user);

      /*
      const credential = GoogleAuthProvider.credentialFromResult(res);
      localStorage.setItem("token", credential.accessToken);
      console.log(localStorage.getItem("token"));
      let response = await fetch("http://localhost:3000/", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`, // Reemplaza <token> con el token de autenticación válido
        },
        mode: "cors",
      });
      if (response.ok) {
        const data = await response.json();
        response = data.message;
        console.log(data.message);
      } else {
        response = "Error en la solicitud";
      }
      */
    } catch (error) {
      console.log(error);
    }
  };

  onMount(() => {
    if ($user) {
      navigate("/Perfil", { replace: true });
      console.log("Dirigiendo a perfil..");
    }
    localStorage.clear();
  });

  let Acceso = [
    {
      name: "Google",
      logo: "Images/GoogleLogo.png",
    },
    {
      name: "Facebook",
      logo: "Images/FacebookLogo.png",
    },
  ];
</script>

<div class="bck">
  <img src="Images/BackgroundLogin.png" id="Background" alt="Background" />
</div>
<div class="Contenedor">
  <img src="Images/Logo.png" id="LogoImage" alt="Logo" />
  <div class="AccesosProviders">
    {#each Acceso as acceso}
      <button class="Button" type="submit" on:click={procesarFormulario}>
        <div class="Acceso">
          <img src={acceso.logo} alt={acceso.name} />
          <p>
            Acceder con {acceso.name}
          </p>
        </div>
      </button>
    {/each}
  </div>
</div>

<style>
  @media (min-width: 768px) {
    .AccesosProviders {
      display: flex;
      flex-flow: column wrap;
    }
    .Button {
      border-radius: 2rem 2rem 2rem 2rem;
      padding: 0%;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
      z-index: 4;
      margin-top: 0%;
      margin-bottom: 20%;
    }
    .Acceso:hover {
      background: rgba(135, 121, 72, 0.28);
      border-radius: 2rem 2rem 2rem 2rem;
    }
    .Acceso {
      display: flex;
      flex-direction: row;
      align-items: center;
      background: rgba(98, 88, 51, 0.28);
      border-radius: 2rem 2rem 2rem 2rem;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 1px;
      padding-bottom: 1px;
    }
    .Acceso img {
      height: 3rem;
    }
    .Acceso p {
      padding-left: 0.5rem;
      font-size: 1rem;
      margin: 0%;
    }
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
      z-index: 1;
      backdrop-filter: blur(10px);
      filter: opacity(0.05);
    }
    .Contenedor {
      height: 100%;
      z-index: 2;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: space-around;
      margin: 6rem;
      margin-top: 1rem;
    }
    #LogoImage {
      z-index: 3;
      height: 10rem;
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
    }
  }

  @media (max-width: 767px) {
    .AccesosProviders {
      display: flex;
      flex-flow: column wrap;
    }
    .Button {
      border-radius: 2rem 2rem 2rem 2rem;
      padding: 0%;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
      z-index: 4;
      margin-top: 0%;
      margin-bottom: 20%;
    }
    .Acceso:hover {
      background: rgba(135, 121, 72, 0.28);
      border-radius: 2rem 2rem 2rem 2rem;
    }
    .Acceso {
      display: flex;
      flex-direction: row;
      align-items: center;
      background: rgba(98, 88, 51, 0.28);
      border-radius: 2rem 2rem 2rem 2rem;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 1px;
      padding-bottom: 1px;
    }
    .Acceso img {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      height: 4rem;
    }
    .Acceso p {
      padding-left: 0.5rem;
      font-size: 1.3rem;
      margin: 0%;
    }
    .bck {
      display: flex;
      size: 20%;
    }
    #Background {
      height: 34%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      backdrop-filter: blur(10px);
      filter: opacity(0.05);
    }
    .Contenedor {
      height: 100%;
      width: 100%;
      z-index: 2;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: space-around;
    }
    #LogoImage {
      z-index: 3;
      height: 15rem;
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
    }
    :global(body) {
      padding: 0px;
      background: rgba(218, 159, 70, 0.21);
    }
  }
</style>
