<script>
    import {user} from '../stores/User'
    import {onMount} from 'svelte'
    import {navigate} from 'svelte-routing'

    onMount(() => {
    if(!$user){
      navigate('/Login',{replace:true})
    }})

</script>