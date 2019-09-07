import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue')
    },
    {
      path: '/lab',
      name: 'lab',
      component: () => import('./views/Lab.vue')
    },
    {
      path: '/khorakhane',
      name: 'khorakhane',
      component: () => import('./views/Khorakhane.vue')
    },
    {
      path: '/biocamini',
      name: 'biocamini',
      component: () => import('./views/Biocamini.vue')
    },
    {
      path: '/fairly',
      name: 'fairly',
      component: () => import('./views/Fairly.vue')
    },
  ]
})
