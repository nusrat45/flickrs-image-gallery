import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImageDetailsView from '../views/ImageDetailsView.vue'
import FavoriteImageView from '../views/FavoriteImageView.vue'
import NotFoundPageView from '../views/NotFoundPageView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/image/:id',
    name: 'imageDetails',
    component: ImageDetailsView,
    //If id doesn't in route
    beforeEnter(to, from, next) {
      const exists = store.state.imageList.find(
        image => image.id == to.params.id
      )
      if (!exists) {
        next({ name: 'NotFoundPageView' });
      }
      next();
    },  
    props: true
  },

  {
    path: '/images/favorite',
    name: 'FavoriteImageView',
    component: FavoriteImageView,
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
  
  //404 page
  {
    path: '/:catchAll(.*)*',
    name: 'NotFoundPageView',
    component: NotFoundPageView,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
