import { createWebHistory, createRouter } from 'vue-router'
import { useStoreAuth } from '@/stores/storeAuth'
import { useStoreModal } from '@/stores/storeModal'

// layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoginLayout from '@/layouts/LoginLayout.vue'
import PosLayout from '@/layouts/PosLayout.vue'

const routes = [
  // public routes

  {
    path: '/',
    name: 'menu',
    component: () => import('@/views/ViewMenu.vue'),
    meta: { requiresAuth: false, layout: DefaultLayout }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/ViewLogin.vue'),
    meta: { requiresAuth: false, layout: LoginLayout }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/ViewCart.vue'),
    meta: { requiresAuth: false, layout: DefaultLayout }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/views/ViewCheckout.vue'),
    meta: { requiresAuth: false, layout: DefaultLayout }
  },
  {
    path: '/my-order',
    name: 'my-order',
    component: () => import('@/views/ViewMyOrder.vue'),
    meta: { requiresAuth: false, layout: DefaultLayout }
  },
  // private routes
  {
    path: '/pos',
    name: 'pos',
    component: () => import('@/views/ViewPos.vue'),
    meta: { requiresAuth: true, layout: PosLayout }
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/views/ViewOrders.vue'),
    meta: { requiresAuth: true, layout: PosLayout }
  },
  {
    path: '/manage-menu',
    name: 'manage-menu',
    component: () => import('@/views/ViewManageMenu.vue'),
    meta: { requiresAuth: true, layout: PosLayout }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// check if user is Authed when router change
router.beforeEach((to) => {
  const storeAuth = useStoreAuth()
  const storeModal = useStoreModal()
  if (to.meta.requiresAuth && !storeAuth.userData.id) {
    // control modal open state
    storeModal.open = true
    return false
  } else if (storeAuth.userData.id && to.name === 'login') {
    router.push({ name: 'pos' })
  }
})

export default router
