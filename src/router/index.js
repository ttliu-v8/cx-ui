import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/demo1",
  },
  {
    path: "/demo1",
    name: "Demo1",
    component: () => import(/* webpackChunkName: "Demo" */ "../views/demo/Demo1.vue")
  },
  {
    path: "/demo2",
    name: "Demo2",
    component: () => import(/* webpackChunkName: "Demo" */ "../views/demo/FormDemo.vue")
  },
];

const router = new VueRouter({
  mode: "hash",
  //base: process.env.BASE_URL,
  scrollBehavior,
  routes
});

router.beforeEach((to,from,next) => {
  next()
});
router.afterEach(to => {
});

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }
  return {
    x: 0,
    y: 0
  };
};

export default router;
