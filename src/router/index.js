import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import Home from '../views/HomeView.vue'
const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
      },
  {
    path:'/about',
    name: 'about',
    component: AboutView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
