import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/jobs/JobView.vue'
import JobDetails from '../views/jobs/JobDetailsView.vue'
import NotFound from "../views/NotFoundView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/jobs/JobView.vue')
  },
  {
    path: '/jobs2',
    name: 'jobs2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: JobDetails,
    props:true,
  },
  //redirect
  {path:'/all-jobs',
redirect:'/jobs'},
//catch all 404
{
  path:'/:catchAll(.*)',
  name:'notFound',
  component:NotFound,
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
