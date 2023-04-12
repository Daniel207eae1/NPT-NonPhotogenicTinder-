import {writable} from 'svelte/store'
import {auth} from '../firebase'

const createUser = () => {
    const {subscribe, set} = writable(false)
    return {
        subscribe,
        setUser: (user) => {
            set(user)
        },
        current: async () => {
            const user = await auth.getCurrentUser()
            set(user)
        }
    }
}

export const user = createUser()