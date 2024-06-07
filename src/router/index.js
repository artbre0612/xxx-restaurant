import { createWebHistory, createRouter } from 'vue-router'
// view components
import ViewLogin from '@/views/ViewLogin.vue'
import ViewMenu from '@/views/ViewMenu.vue'
import ViewCart from '@/views/ViewCart.vue'
import ViewCheckout from '@/views/ViewCheckout.vue'
import ViewMyOrder from '@/views/ViewMyOrder.vue'
import ViewPos from '@/views/ViewPos.vue'
import ViewOrders from '@/views/ViewOrders.vue'
import ViewManageMenu from '@/views/ViewManageMenu.vue'
// layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoginLayout from '@/layouts/LoginLayout.vue'
import PosLayout from '@/layouts/PosLayout.vue'

const routes = [
  // public routes
  {
    path: '/',
    name: 'home',
    component: ViewLogin,
    meta: { requiresAuth: false, layout: LoginLayout } //temp
  },
  {
    path: '/login',
    name: 'login',
    component: ViewLogin,
    meta: { requiresAuth: false, layout: LoginLayout }
  },
  {
    path: '/menu',
    name: 'menu',
    component: ViewMenu,
    meta: { requiresAuth: false, layout: DefaultLayout }
  },
  {
    path: '/cart',
    name: 'cart',
    component: ViewCart,
    meta: { requiresAuth: false, layout: DefaultLayout }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: ViewCheckout,
    meta: { requiresAuth: false, layout: DefaultLayout }
  },
  {
    path: '/my-order',
    name: 'my-order',
    component: ViewMyOrder,
    meta: { requiresAuth: false, layout: DefaultLayout }
  },
  // private routes
  {
    path: '/pos',
    name: 'pos',
    component: ViewPos,
    meta: { requiresAuth: true, layout: PosLayout }
  },
  {
    path: '/orders',
    name: 'orders',
    component: ViewOrders,
    meta: { requiresAuth: true, layout: PosLayout }
  },
  {
    path: '/manage-menu',
    name: 'manage-menu',
    component: ViewManageMenu,
    meta: { requiresAuth: true, layout: PosLayout }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
