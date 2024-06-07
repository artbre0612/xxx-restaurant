<template>
  <div class="login-layout">
    <header>Login Header</header>
    <main>
      <slot></slot>
      <!-- 內容插槽，讓子組件填充 -->
    </main>
    <footer>Login Footer</footer>
  </div>
</template>

<script setup>
// 可以在這裡添加佈局相關的邏輯
</script>

<style scoped>
.login-layout header,
.login-layout footer {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}
main {
  background: #e36565;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
}
</style>
