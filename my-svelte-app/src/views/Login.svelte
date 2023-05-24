<script>
  import { user } from "../stores/User";
  import { navigate } from "svelte-routing";
  import { auth, provider } from "../firebase";
  import { signInWithPopup } from "firebase/auth";

  const procesarFormulario = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      user.setUser(res.user);
      localStorage.setItem("user", user);
      navigate("/Perfil", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

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
  :global(html) {
    width: 100%;
  }
</style>
