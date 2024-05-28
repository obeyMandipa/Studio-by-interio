import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import Shop from '@/views/Shop.vue'
import Blog from '@/views/Blog.vue'
import About from '@/views/About.vue'
import Cart from '@/views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
  
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }

    
  ]
})

export default router
