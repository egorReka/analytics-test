import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Chart, registerables } from 'chart.js'

import App from './App.vue'
import { router } from './routes'

const app = createApp(App)

Chart.register(...registerables)

app.use(createPinia())
app.use(router)

app.mount('#app')
