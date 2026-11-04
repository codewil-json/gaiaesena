import { createApp, nextTick } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
  nextTick(() => document.dispatchEvent(new Event('app-rendered')))
})
