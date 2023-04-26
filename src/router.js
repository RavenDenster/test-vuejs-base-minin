import Vue from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from '@/views/Home'

// Vue.use(Router)

// export default new Router({
//     mode: 'history',
//     routes: [
//         {
//             path: '/',
//             component: Home
//         },
//         {
//             path: '/todos',
//             component: () => import('./views/Todos.vue')
//         }
//     ]
// })


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todos',
        component: () => import('./views/Todos.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;