import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/MainView.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/OrdersView.vue'),
          name: 'orders',
        },
        {
          path: '/incomes',
          component: () => import('./views/IncomesView.vue'),
          name: 'incomes',
        },
        {
          path: '/sales',
          component: () => import('./views/SalesView.vue'),
          name: 'sales',
        },
        {
          path: '/stocks',
          component: () => import('./views/StocksView.vue'),
          name: 'stocks',
        },
      ],
    },
  ],
})

export default router
