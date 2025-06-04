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
      meta: {title: 'Home'},
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {title: 'Login'},
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {title: 'Cadastro'},
    },
    {
      path: '/',
      name: 'apresentacao',
      component: Apresentacao,
      meta: {title: 'Seja bém-vindo(a)'},
    },
    {
      path: '/saibaMais',
      name: 'SaibaMais',
      component: ComoFunciona,
      meta: {title: 'Saiba mais'},
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: Projetos,
      meta: {title: 'Projetos'},
    },
    {
      path: '/cadastroProjeto',
      name: 'cadastroProjeto',
      component: CadastroProjeto,
      meta: {title: 'Cadastro de Projeto'},
    },
    {
      path: '/project-details/:id',
      name: 'project-details',
      component: () => import('../pages/ProjectDetails.vue'),
      meta: {title: 'Detalhes do Projeto'},
    },
    {
      path: '/termos',
      name: 'termos',
      component: Termos,
      meta: {title: 'Termos de Uso'},
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pagamento,
      meta: {title: 'Pagamento'},
    },
  ],
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Minha Aplicação'
  document.title = to.meta.title || defaultTitle
  next()
})

export default router
