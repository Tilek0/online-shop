import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories";
import Catalog from "../views/Catalog";
import Items from "../views/Items";
import ShoppingBag from "../views/ShoppingBag";
import Gift from "../views/Gift";
import Payment from "../views/Payment";
import mobileCart from "../mobile/mobileCart";
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
    props: true,
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
    props: true,
  },
  {
    path: "/Bag",
    name: "ShoppingBag",
    component: ShoppingBag,
  },
  {
    path: "/MobileCart",
    name: "mobileCart",
    component: mobileCart,
  },
  {
    path: "/Gift",
    name: "Gift",
    component: Gift,
  },
  {
    path: "/Payment",
    name: "Payment",
    component: Payment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
