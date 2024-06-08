<template>
  <a-form
    :model="formState"
    name="horizontal_login"
    layout="inline"
    autocomplete="off"
    @submit="storeAuth.loginUser(formState)"
  >
    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true, message: '請輸入電子郵件' }]"
    >
      <a-input v-model:value="formState.email">
        <template #prefix>
          <MailOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: '請輸入密碼' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit">Log in</a-button>
    </a-form-item>
  </a-form>
  <a-button type="primary" danger
    ><RouterLink :to="{ name: 'menu' }">Back to menu</RouterLink></a-button
  >
</template>

<script setup>
// imports
import { LockOutlined, MailOutlined } from '@ant-design/icons-vue'
import { useStoreAuth } from '@/stores/storeAuth'
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
