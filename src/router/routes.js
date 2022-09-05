export default [
    {
        path:"/login",
        component:() => import("@/views/Login.vue"),
        meta:{}
    },
    {
        path:'/main',
        component: ()=> import("@/views/Main.vue"),
        redirect:'/home',
        children:[
            {
                path:"/home",
                component:()=> import('@/views/Home.vue'),
                meta:{show:true},// 路由元
                /* beforeEnter: (to, from, next) => {
                    // ...
                } */
            },
            {
                path:"/monitor",
                component:()=> import('@/views/Monitor.vue'),
                meta:{show:true},// 路由元
            },
            {
                path:"/analysis",
                component:()=> import('@/views/Analysis.vue'),
                meta:{show:true},// 路由元
            },
            {
                path:"/statistics",
                component:()=> import('@/views/Statistics.vue'),
                meta:{show:true},// 路由元
            },
            {
                path:"/system",
                component:()=> import('@/views/System.vue'),
                meta:{show:true},// 路由元
            },
        ]
    },
    
/*     {
        path: "*",
        redirect: "./home"
    }, */
]