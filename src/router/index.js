import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Apresentacao from '../pages/Apresentacao.vue'
import ComoFunciona from '../pages/ComoFunciona.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/apresentacao',
      name: 'apresentacao',
      component: Apresentacao,
    },
    {
      path: '/como-funciona',
      name: 'como-funciona',
      component: ComoFunciona,
    },

  ],
})

export default router
