<template>
  <div class="h-screen flex flex-col justify-center items-center max-w-screen-lg">
    <div
      class="grid grid-cols-1 px-6 pt-10 bg-white rounded-md shadow-md md:grid-cols-2 md:gap-4 md:items-center md:p-8"
    >
      <div>
        <img
          src="/public/image/order-image.jpg"
          alt="服務生在櫃檯輸入餐點資訊"
          class="w-full object-cover rounded-md"
        />
      </div>
      <a-form
        class="py-6"
        :model="formState"
        name="basic"
        autocomplete="off"
        @submit="storeAuth.loginUser(formState)"
      >
        <a-form-item
          label="電子郵件"
          name="email"
          :rules="[
            {
              required: true,
              pattern: /^[^\s][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}[^\s]$/,
              message: '請輸入有效的電子郵件地址 me@example.com'
            }
          ]"
        >
          <a-input v-model:value="formState.email" size="large" class="md:h-8" />
        </a-form-item>

        <a-form-item
          label="用戶密碼"
          name="password"
          :rules="[{ required: true, message: '請輸入密碼!' }]"
        >
          <a-input-password v-model:value="formState.password" size="large" class="md:h-8" />
        </a-form-item>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <a-button
            class="flex items-center justify-center text-lg text-white bg-slate-500 py-6 disabled:cursor-not-allowed disabled:opacity-30 md:col-span-2 hover:bg-slate-400 md:order-2 md:py-5 md:text-base"
            type="submit"
            :disabled="disabled"
          >
            登入
          </a-button>

          <a-button
            type="link"
            @click="$router.push({ name: 'menu' })"
            class="flex items-center justify-center text-lg text-white bg-slate-500 py-6 hover:bg-slate-400 md:order-1 md:py-5 md:text-base"
          >
            回到菜單<ReadOutlined />
          </a-button>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup>
// imports
import { useStoreAuth } from '@/stores/storeAuth'
import { ReadOutlined } from '@ant-design/icons-vue'

// store
const storeAuth = useStoreAuth()

const formState = reactive({
  email: '',
  password: ''
})
const disabled = computed(() => {
  return !(formState.email && formState.password)
})
</script>

<style scoped>
.ant-form-item-label label {
  font-size: 30px;
}
.ant-btn-link:hover {
  color: white !important;
}
</style>
