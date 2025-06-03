import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Apresentacao from '../pages/Apresentacao.vue'
import ComoFunciona from '../pages/ComoFunciona.vue'
import Projetos from '../pages/Projetos.vue'
import CadastroProjeto from '../pages/CadastroProjeto.vue'
import ProjectDetails from '../pages/ProjectDetails.vue'
import Termos from '../pages/Termos.vue'
import Pagamento from '../pages/Pagamento.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
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
      path: '/saibaMais',
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
    {
      path: '/project-details/:id',
      name: 'project-details',
      component: () => import('../pages/ProjectDetails.vue'),
    },
    {
      path: '/termos',
      name: 'termos',
      component: Termos,
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pagamento,
    },
  ],
})

export default router
