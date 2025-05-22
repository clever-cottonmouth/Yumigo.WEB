<<<<<<< HEAD
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
=======


import { createApp } from 'vue'
import App from './App.vue'
import ContactUs from './components/ContactUs.vue'

const app = createApp(App)

app.component('contact-us', ContactUs)
>>>>>>> 1a48234752524a9f5ce3e6aa1e71dc36365dfc70

app.mount('#app')
