<template>
  <div class="default-layout">
    <header>
      <div v-if="storeAuth.userData.email">🙌{{ storeAuth.userData.email }}</div>

      <a-button><router-link :to="{ name: 'menu' }">menu</router-link></a-button>
      <a-button><router-link :to="{ name: 'cart' }">cart</router-link></a-button>
      <a-button><router-link :to="{ name: 'checkout' }">checkout</router-link></a-button>
      <a-button><router-link :to="{ name: 'my-order' }">my order</router-link></a-button>
      <a-button danger><router-link :to="{ name: 'pos' }">Pos</router-link></a-button>
    </header>
    <main>
      <slot></slot>
      <!-- 內容插槽，讓子組件填充 -->
    </main>
    <footer>Default Footer</footer>
  </div>
</template>

<script setup>
/* store */
import { useStoreAuth } from '@/stores/storeAuth'
const storeAuth = useStoreAuth()
</script>

<style scoped>
.default-layout header,
.default-layout footer {
  background-color: #d0d0d0;
  padding: 20px;
  text-align: center;
}
main {
  background: #65a4e3;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
}
</style>
