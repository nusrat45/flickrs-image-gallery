import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImageDetailsView from '../views/ImageDetailsView.vue'
import NotFoundPageView from '../views/NotFoundPageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/images/:title',
    name: 'ImageDetails',
    component: ImageDetailsView,
    props: true
  },

  //Redirect to Home page
  {
    path: '/images',
    redirect: '/'
  },

  {
    path: '/all-images',
    redirect: '/'
  },
  
  // 404 page
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPageView',
    component: NotFoundPageView,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
