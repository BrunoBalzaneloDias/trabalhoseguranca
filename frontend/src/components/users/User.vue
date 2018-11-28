<template>
    <div class="user">  
        
        <h1><i class="fa fa-user">  </i>  {{ userPage.name }}</h1>
        <hr>

        <div v-for="img in pathImg">
            <img :src='img.path'>
        </div>
    </div>
</template>

<script>

import { baseApiUrl } from '@/global'
import axios from 'axios'
import { userKey } from '@/global'
import { mapState } from 'vuex'

export default {

    name: "User",
    data: function() {
        
        return {
            userPage: {},
            pathImg: {},
            compartilhado: {}

            
        }
    },
    methods: {
        loadUser() {
            const url = `${baseApiUrl}${window.location.pathname}`
            axios.get(url).then(res => {
                this.userPage = res.data
                console.log("idDono: " + this.user.id) 
                console.log("idPAge: " + this.userPage.id)   
                console.log(`${baseApiUrl}/compartilha/${this.user.id}/${this.userPage.id}`)
                axios.get(`${baseApiUrl}/compartilha/${this.user.id}/${this.userPage.id}`).then( res =>{
                        this.compartilhado = res.data,
                        console.log("id da bagaça " + this.compartilhado.id),
                        this.loadImg(this.compartilhado)
                    }
                    
                )
            })
        },

        loadCompartilhado(){
            console.log(this.userPage.id)  
            
        },

        loadImg(compartilhado){
            
            if(compartilhado){
                const urlPage = window.location.pathname
                const urlDiv = urlPage.replace('/users/', '')
                const url = `${baseApiUrl}/image/${urlDiv}`
                console.log(url)
                axios.get(url).then(res => {
                    this.pathImg = res.data
                })
            }
            
        }

    },
    computed: mapState(['user']),
    mounted() {
        
        this.loadUser()
        //this.loadCompartilhado()
       // this.loadImg()
    }

}
</script>

<style>

</style>
