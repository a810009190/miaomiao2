import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './Movie'
import CinemaRouter from './Cinema'
import MineRouter from './Mine'

Vue.use(VueRouter)

const routes = [
  MovieRouter,
  CinemaRouter,
  MineRouter,
  {
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
