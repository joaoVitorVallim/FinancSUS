<template>
  <button class="btn-voltar" @click="$emit('resetar')">← Voltar</button>
</template>

<style scoped>
.btn-voltar {
  background: transparent;
  color: #333;
  border: 2px solid #333;
  padding: 6px 12px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-voltar:hover {
  background: #333;
  color: white;
}
</style>
