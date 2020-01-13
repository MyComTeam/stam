import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{layout:'main'},
    component: ()=> import('../views/ContactBase.vue')
  },
  {
    path: '/contact-base',
    name: 'contact-base',
    meta:{layout:'main'},
    component: ()=> import('../views/ContactBase.vue')
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
