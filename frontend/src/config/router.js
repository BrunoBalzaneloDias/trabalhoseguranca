import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Auth from '@/components/auth/Auth'
import Users from '@/components/users/Users'
import User from '@/components/users/User'

//import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'auth',
    path: '/auth',
    component: Auth
}, {
    name: 'user',
    path: '/users/:id',
    component: User
}, {
    name: 'users',
    path: '/users',
    component: Users
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

/*router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/' })
    } else {
        next()
    }
})*/

export default router
