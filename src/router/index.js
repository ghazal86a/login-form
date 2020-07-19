import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Verify from "../components/Verify.vue";
import HomePage from "../components/HomePage.vue";
import NotVerified from "../components/NotVerified.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/verify",
    name: "Verify",
    component: Verify
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage
  },
  {
    path: "/not-verified",
    name: "NotVerified",
    component: NotVerified
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
