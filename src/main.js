import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import MainHeader from './components/shared/MainHeader/index.vue'
import Login from './pages/Login.vue'
import HowItWorks from './components/HowItWorks/Index.vue'



const app = createApp(App)

app.component('MainHeader', MainHeader)
app.component('Login', Login)
app.component('HowItWorks', HowItWorks)
app.use(createPinia())
app.use(router)

app.mount('#app')
