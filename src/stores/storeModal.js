import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useStoreModal = defineStore('storeModal', () => {
  const router = useRouter()
  /* modal open state */
  const open = ref(false)

  function showModal() {
    open.value = true
  }

  function handleOk() {
    router.push({ name: 'login' })
    open.value = false
  }

  return {
    open,
    showModal,
    handleOk
  }
})
