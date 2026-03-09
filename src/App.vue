<script setup>
// 读取环境变量
const appTitle = import.meta.env.VITE_APP_TITLE;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const nodeEnv = import.meta.env.MODE;
</script>

<template>
  <div class="app">
    <h1>{{ appTitle }}</h1>
    
    <div class="env-config">
      <h2>环境配置</h2>
      <div class="config-item">
        <span class="label">环境模式:</span>
        <span class="value">{{ nodeEnv }}</span>
      </div>
      <div class="config-item">
        <span class="label">应用标题:</span>
        <span class="value">{{ appTitle }}</span>
      </div>
      <div class="config-item">
        <span class="label">API基础地址:</span>
        <span class="value">{{ apiBaseUrl }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  margin-bottom: 2rem;
}

.env-config {
  background-color: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #555;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.config-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.config-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: bold;
  color: #666;
}

.value {
  color: #333;
  font-family: monospace;
  background-color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>
