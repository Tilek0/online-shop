import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories";
import Catalog from "../views/Catalog";
import Items from "../views/Items";
import ShoppingBag from "../views/ShoppingBag";
import Gift from "../views/Gift";

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
    component: Categories,
  },
  {
    path: "/Catalog",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/Items",
    name: "Items",
    component: Items,
  },
  {
    path: "/Bag",
    name: "ShoppingBag",
    component: ShoppingBag,
  },
  {
    path: "/Gift",
    name: "Gift",
    component: Gift,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
