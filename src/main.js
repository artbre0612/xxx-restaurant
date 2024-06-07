import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index'
import '@/assets/css/tailwind.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia()).use(router).use(Antd).mount('#app')
