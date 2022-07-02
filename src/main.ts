import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// UI 框架及其样式
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

// 全局样式设置
import './style.css'

createApp(App).use(store).use(router).use(ArcoVue).use(ArcoVueIcon).mount('#app')
