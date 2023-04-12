<script>
    import {user} from '../stores/User'
    import {onMount} from 'svelte'

    onMount(() => {
    if(!$user){
      navigate('/Login',{replace:true})
    }})

</script>
