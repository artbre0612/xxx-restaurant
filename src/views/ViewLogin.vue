<template>
  <div class="h-screen flex flex-col justify-center items-center max-w-screen-lg">
    <div
      class="grid grid-cols-1 p-4 bg-white rounded-md shadow-md md:grid-cols-2 md:gap-4 md:items-center md:p-8"
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
          <a-input class="py-2" v-model:value="formState.email" />
        </a-form-item>

        <a-form-item
          label="用戶密碼"
          name="password"
          :rules="[{ required: true, message: '請輸入密碼!' }]"
        >
          <a-input-password class="py-2" v-model:value="formState.password" />
        </a-form-item>

        <div class="grid md:place-items-end">
          <button
            class="w-full mt-8 mb-4 py-4 rounded-lg shadow-md cursor-pointer bg-slate-500 text-white text-2xl hover:bg-slate-400 duration-300 active:shadow-inner disabled:opacity-30 disabled:cursor-not-allowed md:w-1/2"
            type="primary"
            html-type="submit"
            :disabled="disabled"
          >
            登入
          </button>
        </div>
        <div class="text-slate-500 text-lg mt-4">
          <router-link
            :to="{ name: 'menu' }"
            class="hover:text-slate-500 flex items-center justify-end gap-2"
          >
            回到菜單
            <ReadOutlined />
          </router-link>
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

<style>
.ant-form-item .ant-form-item-label > label {
  font-size: 18px;
  color: rgb(100, 116, 139);
}
</style>
