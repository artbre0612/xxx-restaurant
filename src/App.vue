<template>
  <div id="app">
    <LoginModal />
    <component :is="currentLayout" v-if="currentLayout">
      <router-view />
    </component>
  </div>
</template>

<script setup>
// imports
import DefaultLayout from './layouts/DefaultLayout.vue'
import LoginLayout from './layouts/LoginLayout.vue'
import PosLayout from './layouts/PosLayout.vue'
import LoginModal from './components/LoginModal.vue'

/* change layout base on route.meta.layout */
const route = useRoute()
const currentLayout = ref(null)

watchEffect(() => {
  switch (route.meta.layout) {
    case DefaultLayout:
      currentLayout.value = markRaw(DefaultLayout)
      break
    case LoginLayout:
      currentLayout.value = markRaw(LoginLayout)
      break
    case PosLayout:
      currentLayout.value = markRaw(PosLayout)
      break
  }

  if (route.meta.layout === DefaultLayout) {
    currentLayout.value = markRaw(DefaultLayout)
  }
})
</script>
