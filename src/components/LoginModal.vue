<template>
  <div>
    <a-modal
      v-model:open="storeModal.open"
      cancelText="取消"
      okText="前往登入"
      @ok="storeModal.handleOk"
    >
      <p>您沒有瀏覽此頁面的權限，請先登入</p>
    </a-modal>
  </div>
</template>
<script setup>
import { useStoreModal } from '@/stores/storeModal'
const storeModal = useStoreModal()
</script>
