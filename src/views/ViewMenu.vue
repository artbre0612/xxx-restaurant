<template>
  <div>menu</div>
  <a-button type="primary" v-show="!storeAuth.userData"
    ><RouterLink :to="{ name: 'login' }">Log in</RouterLink></a-button
  >
</template>

<script setup>
/* store */
import { useStoreAuth } from '@/stores/storeAuth'
const storeAuth = useStoreAuth()
</script>
