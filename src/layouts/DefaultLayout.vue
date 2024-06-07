<template>
  <div class="default-layout">
    <header>Default Header</header>
    <main>
      <slot></slot>
      <!-- 內容插槽，讓子組件填充 -->
    </main>
    <footer>Default Footer</footer>
  </div>
</template>

<script setup>
// 可以在這裡添加佈局相關的邏輯
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
