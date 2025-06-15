<template>
  <div class="navbar">
    Jimkro's Portfolio
  </div>
</template>

<script>
export default {
  name: 'NavbarComponet',
  props: {

  }
}
</script>

<style scoped>
.navbar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #ffffff;
  font-size: 2rem; /* 放大字體 */
  background-color: #2c3e50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* 使用固定高度比較安全 */
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center;     /* 垂直置中 */
  box-sizing: border-box;
}
</style>