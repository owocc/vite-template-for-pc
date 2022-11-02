import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 无权限路由:
const publicRoutes = ["/", "/login"];

router.beforeEach((to, from, next) => {
  if (publicRoutes.some((e) => e == to.path)) {
    next();
  }
});

export default router;
