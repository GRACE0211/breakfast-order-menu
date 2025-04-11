<template>
  <div class="app-wrapper">
    <!-- Router View Content -->
    <router-view />
    <footer>© GRACE JHUO 聯絡信箱 關於我</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
footer {
  margin-top: auto;
  background-color: rgb(128, 49, 6);
  color: white;
  text-align: center;
  padding: 10px 0;
  border: none;
}
</style>
