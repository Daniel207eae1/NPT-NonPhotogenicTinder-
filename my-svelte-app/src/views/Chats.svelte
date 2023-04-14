<script>
    import {user} from '../stores/User'
    import {navigate} from 'svelte-routing'
    import {onMount} from 'svelte'

    onMount(() => {
    if(!$user){
      navigate('/Login',{replace:true})
    }})

</script>
