import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const routes = [
    {
        name: 'Jimkro_Portfolio',
        path: '/',
        meta: {
            title: 'Jimkro_Portfolio'
        },
        component: App
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to) => {
    document.title = to.meta.title || 'Jimkro Portfolio'
})

export default router