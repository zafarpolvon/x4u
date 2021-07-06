import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import AllUsers from "../views/AllUsers.vue";
import Settings from "../views/Settings.vue";
import NotFound from "../views/NotFound.vue";

import store from "../store/user";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { navBarColor: "Home", auth: false }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { auth: false }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { navBarColor: "Profile", auth: true }
  },
  {
    path: "/allusers",
    name: "AllUsers",
    component: AllUsers,
    meta: { navBarColor: "AllUsers", auth: true }
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    meta: { navBarColor: "Settings", auth: true }
  },
  {
    path: "/404",
    name: "404",
    component: NotFound
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  store,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

router.beforeEach((to, from, next) => {
  console.log(store.state.token);
  if (to.matched.some(route => route.meta.auth)) {
    if (store.state.token) return next();
    return next({ path: "/login" });
  }

  next();
});

export default router;
