export default [
  {
    path: "/",
    component: () => import("@/views/Home/index.vue"),
    meta: {
      isSearch: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/index.vue"),
    meta: {
      isNav: true,
    },
  },
];
