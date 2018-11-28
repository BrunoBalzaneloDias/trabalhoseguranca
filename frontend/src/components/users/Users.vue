<template>
    
    <b-table hover striped :items="users" :fields="fields" @row-clicked="clicked">
        <template slot="actions" slot-scope="data">
                <b-button @click.stop="share($event, data.item)" >
                    <i class="fa fa-square"></i>
                </b-button>
        </template>

    </b-table>

</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import { userKey } from '@/global'
import { mapState } from 'vuex'

export default {

    name: 'Users',
    data: function() {
        return {
            users: [],
            fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'name', label: 'Nome', sortable: true },
                { key: 'email', label: 'E-mail', sortable: true },
                { key: 'actions', label: 'Compartilhar' },
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
        },

        share($event, item){
            const fd = new FormData();
            fd.append('idDono', this.user.id)
            fd.append('idCompartilhado', item.id)
            axios.post(`${baseApiUrl}/compartilha`, fd)
                .then(res => {
                    
                })
        }
    },
    computed: mapState(['user']),
    mounted() {
        this.loadUsers()
    }


}
</script>

<style>

</style>
