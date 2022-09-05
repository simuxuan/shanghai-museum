// 路由器配置
import Vue from "vue"
import VueRouter from "vue-router"
// import store from "@/store"
import routes from "./routes"

// 注册router 插件
Vue.use(VueRouter)

// 重写,push|replace
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location,resolve,reject) {
  if(resolve && reject) { //判断是否调用resolve，reject
    originPush.call(this,location,resolve,reject)
  } else {
    originPush.call(this,location,()=>{},()=>{})
  }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
      originReplace.call(this, location, resolve, reject);
    } else {
      originReplace.call(
        this,
        location,
        () => {},
        () => {}
      );
    }
  };

let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        //返回的这个y=0，代表的滚动条在最上方
        return { y: 0 };
      },
})

/* router.beforeEach(async (to,from,next)=>{

}) */

export default router