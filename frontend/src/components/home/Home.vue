<template>
    <div class="home">  
        <div class="page-title">
            <h1><i class="fa fa-home"></i> Suas Fotos</h1>
            <hr>
        </div> 

        
                
            


        <form ectype="multipart/form-data">
            <b-form-file v-model="selectedFile" :state="Boolean(selectedFile)" placeholder="Choose a file..." 
            accept=".jpg, .png, .gif" name="file"  @change="onSelect($event)" >
            
            </b-form-file>  
            <b-button class="button" @click="onUpload($event)" variant="primary">Enviar</b-button>
        </form>

        

    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'
import { userKey } from '@/global'
import { mapState } from 'vuex'

export default {
    name: 'Home',
    components: { },
    data: function() {
        return {
            selectedFile: null,
        }   
    },
    methods: {
        onSelect(event){
            this.selectedFile = event.target.files[0]
        },
        onUpload(){
            const fd = new FormData();
            //fd.append('ectype', "multipart/form-data")
            fd.append('idDono', this.user.id)
            fd.append('file', this.selectedFile, Date.now()+'-'+this.selectedFile.name)
            fd.append('path', "uploads/" + this.user.id + "/" + Date.now()+'-'+this.selectedFile.name)
            axios.post(`${baseApiUrl}/image`, fd)
                .then(res => {
                    
                })
        }
        
    },
    computed: mapState(['user']),
    mounted() {
        
    }
}
</script>

<style>

    .page-title h1 {
        margin: 0px;
    }

    .button {
        margin: 10px 0px;
    }

</style>
