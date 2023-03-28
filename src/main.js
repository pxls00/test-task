import { createApp } from 'vue'
import App from './App.vue'
import AppMessage from 'test-vue-message-plugin'
import 'test-vue-message-plugin/dist/style.css'

import '@/assets/style/main.scss'

createApp(App).use(AppMessage).mount('#app')
