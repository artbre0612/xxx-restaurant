<template>
  <div>pos</div>

  <a-button @click="storeAuth.logoutUser" type="primary" danger>Log out</a-button>
  <a-button key="3">
    <router-link :to="{ name: 'menu' }"> menu</router-link>
  </a-button>
</template>

<script setup>
// imports
import { useStoreAuth } from '@/stores/storeAuth'

// store
const storeAuth = useStoreAuth()
</script>
