import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/stores/index'
// import { createPinia } from 'pinia'

import '@/assets/main.scss'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.use(pinia)
app.use(router)

// createApp(App).use(createPinia()).use(router).mount('#app')


app.mount('#app')
