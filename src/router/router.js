import Vue from "vue";
import Router from "vue-router";

import Login from '../view/Login'
import WelcomePage from '../view/WelcomePage'
import NotFoundComponent from '../view/NotFoundComponent'
import Registration from '../view/Registration'
import Companies from '../components/Сompanies'
import Purchases from '../components/Purchases'
Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: WelcomePage
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration
        },
        {
            path: '/companies',
            name: 'companies',
            component: Companies
        },
        {
            path: '/purchases',
            name: 'purchases',
            component: Purchases
        },
        {
            path: '/:catchAll(.*)',
            component: NotFoundComponent,
            name: 'NotFound'
        }
    ]
})

export default router;