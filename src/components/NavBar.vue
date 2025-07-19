<template>
  <nav class="navbar">
    <h1 class="logo">
      <router-link to="/">我的網站</router-link>
    </h1>
    <ul class="nav-links">
      <li><router-link to="/">首頁</router-link></li>
      <li><router-link to="/about">關於我</router-link></li>
      <li><router-link to="/contact">聯絡我</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: #fff;
  position: sticky;
  top: 0;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* 取消 router-link 預設底線 + 動畫 */
:deep(.nav-links a) {
  color: #fff;
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s ease;
}

/* Hover 效果 */
:deep(.nav-links a:hover) {
  color: #00d4ff;
}

/* 底線動畫 */
:deep(.nav-links a::after) {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #00d4ff;
  transition: width 0.3s ease;
}

/* Hover 時顯示底線 */
:deep(.nav-links a:hover::after) {
  width: 100%;
}

/* 當前選中狀態 (router-link-active) */
:deep(.nav-links a.router-link-active::after) {
  width: 100%;
}
</style>
