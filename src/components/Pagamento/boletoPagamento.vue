<template>
  <div class="boleto-wrapper">
    <div v-if="dados">
      <p><strong>Linha Digitável:</strong> {{ dados.numero }}</p>
      <p><strong>Código de Barras:</strong> {{ dados.codigoBarras }}</p>
      <a :href="dados.linkDownload" target="_blank">
        <button>Baixar Boleto</button>
      </a>
      <button @click="confirmar">Confirmar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({ valor: String })
const emit = defineEmits(['confirmar'])
const dados = ref(null)

onMounted(() => {
    dados.value = {
      numero: '23790.50401 60000.000301 21000.093014 8 77770000002000',
      codigoBarras: '23793381286000000030121000930140877770000002000',
      linkDownload: 'https://exemplo.com/boleto.pdf'
    }
})

function confirmar() {
  alert('Boleto gerado e aguardando pagamento!')
  emit('confirmar')
}
</script>

<style scoped>
.boleto-wrapper {
  max-width: 400px;
}
</style>
