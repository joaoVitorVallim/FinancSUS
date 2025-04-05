import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import MainHeader from './components/shared/MainHeader/index.vue'

const app = createApp(App)

add.components('MainHeader', MainHeader)
app.use(createPinia())
app.use(router)

app.mount('#app')
