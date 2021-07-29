import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import SentenceView from "@/components/templates/SentenceView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SentenceView",
    component: SentenceView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
