<template>
  <div class="container-pagamento">
    <div class="painel-principal">
      
      <div class="area-escolha" :class="{ escondido: metodoSelecionado }">
        <h2>Quanto deseja doar?</h2>
        <input v-model="valor" type="number" placeholder="Valor em R$" min="1" step="0.01" />

        <h3>Escolha a forma de pagamento</h3>
        <div class="botoes-pagamento">
          <button @click="selecionarMetodo('cartao')">💳 Cartão</button>
          <button @click="selecionarMetodo('pix')">⚡ PIX</button>
          <button @click="selecionarMetodo('boleto')">📄 Boleto</button>
        </div>
      </div>

     
      <div class="painel-detalhes" :class="{ visivel: metodoSelecionado }">
        <button class="voltar" @click="resetar">← Voltar</button>
        <component
          :is="componenteAtual"
          :valor="valor"
          class="componente-forma-pagamento"
          @confirmar="resetar"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CartaoPagamento from './CartaoPagamento.vue'
import PixPagamento from './PixPagamento.vue'
import BoletoPagamento from './BoletoPagamento.vue'

const valor = ref('')
const metodoSelecionado = ref(null)

function selecionarMetodo(metodo) {
  metodoSelecionado.value = metodo
}

function resetar() {
  metodoSelecionado.value = null
}

const componenteAtual = computed(() => {
  switch (metodoSelecionado.value) {
    case 'cartao': return CartaoPagamento
    case 'pix': return PixPagamento
    case 'boleto': return BoletoPagamento
    default: return null
  }
})
</script>

<style scoped>
.container-pagamento {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
  font-family: sans-serif;
}

.painel-principal {
  display: flex;
  width: 900px;
  height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.6s ease;
}

.area-escolha,
.painel-detalhes {
  width: 50%;
  padding: 32px;
  transition: all 0.5s ease;
  opacity: 1;
  transform: translateX(0);
  height: 100%;
  box-sizing: border-box;
}

.area-escolha.escondido {
  opacity: 0;
  transform: translateX(-30px);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}

.painel-detalhes {
  opacity: 0;
  transform: translateX(30px);
  pointer-events: none;
}

.painel-detalhes.visivel {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
  z-index: 2;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 60%;
  margin: 12px 0;
}

.botoes-pagamento {
  display: flex;
  justify-content: center;
  gap: 16px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}

button.voltar {
  background: none;
  border: none;
  font-size: 16px;
  color: #007bff;
  margin-bottom: 10px;
  cursor: pointer;
}

.componente-forma-pagamento {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>
