import { createWebHistory, createRouter } from 'vue-router'

import Formulario from '../components/Formulario.vue'
import Tabla from '../components/Tabla.vue'
import Choice from '../components/Choice.vue'

const routes = [
    /* Se cargar todos los routers */
    { path: '/', name: 'Home', component: Formulario },
    { path: '/formulario', name: 'Formulario', component: Formulario },
    { path: '/tabla', name: 'Tabla', component: Tabla },
    { path: '/choice', name: 'Choice', component: Choice }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
