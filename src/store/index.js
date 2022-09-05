import Vuex from "vuex"
import Vue from "vue"
// 注册插件
Vue.use(Vuex)

import home from "./home"

export default new Vuex.Store({
    modules:{
        home
    }
})