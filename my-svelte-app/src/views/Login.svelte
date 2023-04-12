<script>
    import {user} from '../stores/User'
    import {navigate} from 'svelte-routing'
    import {auth, provider} from '../firebase' 
    import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

    const procesarFormulario = async() => {
        try {
            const res = await signInWithPopup(auth, provider)
            console.log(res)
            user.setUser(res.user)
            navigate('/Perfil', {replace:true})
        } catch (error) {
            console.log(error)
        }
        
        
        
        
    }
</script>

<div>
   <h1>Acceso</h1>
   <button type="submit" on:click={procesarFormulario} >Acceder Google</button>
</div>