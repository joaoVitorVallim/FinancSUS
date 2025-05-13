import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Apresentacao from '../pages/Apresentacao.vue'
import ComoFunciona from '../pages/ComoFunciona.vue'
import Projetos from '../pages/Projetos.vue'
import CadastroProjeto from '../pages/CadastroProjeto.vue'

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
      path: '/',
      name: 'apresentacao',
      component: Apresentacao,
    },
    {
      path: '/SaibaMais',
      name: 'SaibaMais',
      component: ComoFunciona,
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: Projetos,
    },
    {
      path: '/cadastroProjeto',
      name: 'cadastroProjeto',
      component: CadastroProjeto,
    },

  ],
})

export default router
