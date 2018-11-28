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
        <hr>

        
        <div v-for="img in pathImg">
            <img src="teste.png" >
        </div>
            
    </div>
</template>

<script>
import crypto from 'crypto'
import axios from 'axios'
import { baseApiUrl } from '@/global'
import { userKey } from '@/global'
import { mapState } from 'vuex'
import Vue from 'vue';

export default {
    name: 'Home',
    components: { },
    data: function() {
        return {
            selectedFile: null,
            pathImg: {},
            image: File
        }   
    },
    methods: {
        onSelect(event){
            this.selectedFile = event.target.files[0]
        },
        onUpload(){
            const img
            const alg = 'aes-256-ctr'
            const passwd = this.userKey
            const iv = crypto.randomBytes(16)
            const read = fs.createReadStream(this.selectedFile)
            const write = fs.createWriteStream(img)
            const cipher = crypto.createCipheriv(alg, passwd, iv)
            read.pipe(cipher).pipe(write)
            const fd = new FormData();
            //fd.append('ectype', "multipart/form-data")
            fd.append('idDono', this.user.id)
            fd.append('file', img, Date.now()+'-'+this.selectedFile.name)
            fd.append('path', "uploads/" + this.user.id + "/" + Date.now()+'-'+this.selectedFile.name)
            axios.post(`${baseApiUrl}/image`, fd)
                .then(res => {
                    window.location.reload()

                })
        },
        loadImg(){
            const url = `${baseApiUrl}/image/${this.user.id}`
            axios.get(url).then(res => {
                this.pathImg = res.data
                console.log("ta indo")
                console.log(this.user.name)
                console.log(this.pathImg)
            })
        }
    
        
    },
    computed: mapState(['user']),
    mounted() {
        this.loadImg()
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
