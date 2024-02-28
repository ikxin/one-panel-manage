import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import locales from '@/locales'

import 'virtual:uno.css'

const app = createApp(App)

app.use(locales)
app.use(router)
app.mount('#app')
