import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Products from "../views/Products.vue";
import Login from "../views/Login.vue";
import AdminLogin from "../views/admin/AdminLogin.vue";
import Overview from "../views/admin/Overview.vue";
import Restaurants from "../views/admin/Restaurants.vue";
import Foods from "../views/admin/Foods.vue";

import Orders from "../views/admin/Orders.vue";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/admin/login",
    name: "adminLogin",
    component: AdminLogin,
  },
  {
    path: "/admin/overview",
    name: "Overview",
    component: Overview,
  },
  {
    path: "/admin/restaurants",
    name: "Restaurants",
    component: Restaurants,
  },
  {
    path: "/admin/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/admin/foods",
    name: "Foods",
    component: Foods,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
