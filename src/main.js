import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index'
import '@/assets/css/tailwind.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'

///////////////////////////////////////////////////
/*add these line so storeAuth.js can access $router*/
const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
///////////////////////////////////////////////////

const app = createApp(App)

app.use(pinia).use(router).use(Antd).mount('#app')
