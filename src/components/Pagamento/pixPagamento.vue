<template>
  <div class="conteudo-pix">
    <div v-if="carregando" class="loading">
      <p>Gerando QR Code...</p>
    </div>

    <div v-else class="qr-code">
      <img :src="dados.qrCodeBase64" alt="QR Code PIX" />
      <p>{{ dados.copiaECola }}</p>
      <button @click="$emit('confirmar')">Confirmar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({ valor: String })
const dados = ref(null)
const carregando = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('/api/gerar-pix', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ valor: props.valor })
    })

    dados.value = await res.json()
  } catch (e) {
    console.error('Erro ao gerar PIX:', e)
  } finally {
    carregando.value = false
  }
})
</script>

<style scoped>
.loading {
  text-align: center;
  padding: 30px;
  font-size: 16px;
  color: #555;
}

.qr-code {
  text-align: center;
  animation: fadeIn 0.5s ease;
}

.qr-code img {
  width: 200px;
  margin-bottom: 12px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
