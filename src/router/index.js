import { createRouter, createWebHashHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/menu/sandwiches',
    },
    {
      path: '/',
      component: MenuView,
      children: [
        {
          path: 'menu/sandwiches',
          component: () => import('../views/menu/SandwichesView.vue'),
        },
        {
          path: 'menu/hamburgers',
          component: () => import('../views/menu/HamburgersView.vue'),
        },
        {
          path: 'menu/pancakes',
          component: () => import('../views/menu/PancakesView.vue'),
        },
        {
          path: 'menu/omelettes',
          component: () => import('../views/menu/OmelettesView.vue'),
        },
        {
          path: 'menu/drinks',
          component: () => import('../views/menu/DrinksView.vue'),
        },
        {
          path: 'cart', // ✅ ⬅ 移進 MenuView 裡面
          component: () => import('../views/cart/CartView.vue'),
        },
        {
          path: '',
          redirect: 'menu/sandwiches',
        },
      ],
    },
  ],
})

export default router
