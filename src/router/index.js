import { createRouter, createWebHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/menu',
    },
    {
      path: '/menu',
      component: MenuView,
      children: [
        {
          path: 'sandwiches',
          component: () => import('../views/menu/SandwichesView.vue'),
        },
        {
          path: 'hamburgers',
          component: () => import('../views/menu/HamburgersView.vue'),
        },
        {
          path: 'pancakes',
          component: () => import('../views/menu/PancakesView.vue'),
        },
        {
          path: 'omelettes',
          component: () => import('../views/menu/OmelettesView.vue'),
        },
        {
          path: 'drinks',
          component: () => import('../views/menu/DrinksView.vue'),
        },
        {
          path: '',
          redirect: 'sandwiches',
        },
        {
          path: '/cart',
          component: () => import('../views/cart/CartView.vue'),
        },
      ],
    },
  ],
})

export default router
