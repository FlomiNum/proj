import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Travel from "../views/Travel.vue";
import Festival from "../views/Festival.vue";
import Events from "../views/Events.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/festival",
    name: "Festival",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Festival
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Festival.vue")
  },
  {
    path: "/travel",
    name: "Travel",
    component: Travel
  },
  {
    path: "/event",
    name: "Event",
    component: Events
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
