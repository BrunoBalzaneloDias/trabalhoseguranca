<template>
    
    <b-table hover striped :items="users" :fields="fields" @row-clicked="clicked">
        

    </b-table>

</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {

    name: 'Users',
    data: function() {
        return {
            users: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'email', label: 'E-mail', sortable: true },
            ]
        }
    },
    methods: {
        loadUsers() {
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res => {
                this.users = res.data
            })
        },

        clicked(item) {
            this.$router.push({ path: '/users/' + item.id })
        }
    },
    mounted() {
        this.loadUsers()
    }


}
</script>

<style>

</style>
