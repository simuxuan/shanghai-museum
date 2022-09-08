import Vue from 'vue'
import App from './App.vue'
// 路由
import router from "@/router"
import store from "@/store"
/* 
// 引入全局组件
import Typenav from './components/Typenav'
// 配置全局组件
Vue.component('Typenav',Typenav) 
*/
// 导入全局样式
import './assets/css/global.css'

// 引入封装的axios 挂载到全局
import request from '@/api/request.js'
Vue.prototype.$request = request

import axios from 'axios'
Vue.prototype.$http = axios
// axios.defaults.baseURL = 'https://lushengtao0115.github.io' 
import * as API from "@/api"

// Vue.prototype.$echarts = window.echarts // 挂载echarts到全局 不支持svg
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

// iconfont
import "@/assets/iconfont/iconfont.css";


// 插件
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: function() {
    return {
      indexName: '默认值',
    }
  },
  beforeCreate(){
    Vue.prototype.$bus = this // 全局事件总线
    Vue.prototype.$API = API;  // 全局API
  },
  router,
  store
}).$mount('#app')


