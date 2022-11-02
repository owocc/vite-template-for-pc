import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import router from '@/router'
import {createPinia} from 'pinia'

//全局配置
import goableSet from './goable'

//导入提示框样式
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'
import 'element-plus/theme-chalk/src/loading.scss'

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.use(goableSet)
.mount('#app')
