import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import categories from "../views/categories";
import catalog from "../views/catalog";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Categories",
    name: "Categories",
    component: categories,
  },
  {
    path: "/Catalog",
    name: "Catalog",
    component: catalog,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
