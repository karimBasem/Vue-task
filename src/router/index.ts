import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Travel from '../components/travelBlog.vue';
import Partner from '../components/Partner.vue';
import Footer from '../components/Footer.vue';
import Recomend from '../components/recomend.vue';
import Promotions from '../components/Promotions.vue';
import Slider from '../components/slider.vue';
import Signup from '../components/signup.vue';
import Signin from '../components/signin.vue';
import pg2 from '../components/pg2.vue';
import Hotel from '../components/Hotel.vue';
import Navbar from '../components/Navbar.vue';
import Search from '../components/Search.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  }, 
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  
  {
    path: "/nav",
    name: "Navbar",
    component: Navbar
  },
  {
    path: "/hotel",
    name: "Hotel",
    component: Hotel
  }, 
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  }, 
  {
    path: "/pg2",
    name: "pg2",
    component: pg2
  }, 
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  }, 
  {
    path: "/slider",
    name: "Slider",
    component: Slider
  }, 
  {
    path: "/promotions",
    name: "Promotions",
    component: Promotions
  },
  {
    path: "/travel",
    name: "Travel",
    component: Travel
  },
  {
    path: "/recomend",
    name: "Recomend",
    component: Recomend
  },
  {
    path: "/partner",
    name: "Partner",
    component: Partner
  },
  {
    path: "/footer",
    name: "Footer",
    component: Footer
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
