<template>
    <div class="user">  
        
        <h1><i class="fa fa-user">  </i>  {{ user.name }}</h1>
        <hr>

    </div>
</template>

<script>

import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {

    name: "User",
    data: function() {
        
        return {
            user: {}
            
        }
    },
    methods: {
        loadUser() {
            const url = `${baseApiUrl}${window.location.pathname}`
            axios.get(url).then(res => {
                this.user = res.data
            })
        }

    },
    mounted() {
        this.loadUser()
    }

}
</script>

<style>

</style>
