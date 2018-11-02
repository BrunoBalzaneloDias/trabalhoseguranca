<template>
    <div class="home">  
        <div class="page-title">
            <h1><i class="fa fa-home"></i> Dashboard</h1>
            <hr>
        </div> 
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: { },
    data: function() {
        return {}
    },
    methods: {
    },
    mounted() {
        
    }
}
</script>

<style>

    .page-title h1 {
        margin: 0px;
    }

</style>
