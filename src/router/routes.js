export default [
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
    meta: {},
  },
  {
    path: "/main",
    component: () => import("@/views/Main.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home.vue"),
        meta: { show: true }, // 路由元
        /* beforeEnter: (to, from, next) => {
                    // ...
                } */
      },
      {
        path: "/monitor",
        component: () => import("@/views/Monitor.vue"),
        meta: { show: true }, // 路由元
      },
      {
        path: "/analysis",
        component: () => import("@/views/Analysis/Analysis.vue"),
        meta: { show: true }, // 路由元
        redirect: "/analysis/overall",
        children: [
          {
            path: "/analysis/overall",
            component: () => import("@/views/Overall.vue"),
          },
          {
            path: "/analysis/peak",
            component: () => import("@/views/Peak.vue"),
          },
        ],
      },
      {
        path: "/decision",
        component: () => import("@/views/Decision.vue"),
        meta: { show: true }, // 路由元
      },
      {
        path: "/system",
        component: () => import("@/views/System.vue"),
        meta: { show: true }, // 路由元
      },
    ],
  },

  /*     {
        path: "*",
        redirect: "./home"
    }, */
];
