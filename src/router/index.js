import Vue from 'vue'
import VueRouter from 'vue-router'
import formValidate from '../views/formValidate.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'formValidate',
    component: formValidate
  },
  {
    path: '/mixins',
    name: 'mixins',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/mixins.vue')
  },
  {
    path: '/table',
    name: 'Table',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/tableAxios.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vuex.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
