<script setup>
import { ref, computed } from 'vue'
import CartaoPagamento from './cartaoPagamento.vue'
import PixPagamento from './pixPagamento.vue'
import BoletoPagamento from './boletoPagamento.vue'

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


<template>
  <div class="container-pagamento">
    <div class="painel-principal">
      <div class="voltar">
          <button  @click="exitPayment">← Voltar</button>
        </div>
      <div class="area-escolha" :class="{ escondido: metodoSelecionado }">
        <h2>Quanto deseja doar?</h2>
        <input v-model="valor" type="number" placeholder="Valor em R$" min="1" step="0.01" />

        <h3>Escolha a forma de pagamento</h3>
        <div class="botoes-pagamento">
          <button @click="selecionarMetodo('cartao')"><img id="card_icon" src="../../assets/contactless.png" alt=""> Cartão</button>
          <button @click="selecionarMetodo('pix')"><img id="card-icon" src="../../assets/pix.png" alt=""> PIX</button>
          <button @click="selecionarMetodo('boleto')"><img id="card_icon" src="../../assets/icons8-boleto-64.png" alt=""> Boleto</button>
        </div>
      </div>

     
      <div class="painel-detalhes" :class="{ visivel: metodoSelecionado }">
        <div class="voltar">
          <button  @click="resetar">← Voltar</button>
        </div>
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



<style scoped>

div.voltar{
  padding-top:1.5vh;
  padding-left: 1vh;
  justify-self: flex-start;
  align-self: flex-start;
}

#card_icon {
  width: 30px;
  height: 30px;
}

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
  flex-direction: column;
  width: 900px;
  height: 500px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.6s ease;
}

.area-escolha{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.botoes-pagamento {
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 16px;
}

.area-escolha,
.painel-detalhes {
  padding: 32px;
  transition: all 0.5s ease;
  opacity: 1;
  transform: translateX(0);
  height: 100%;
  box-sizing: border-box;
}

.area-escolha.escondido {
  display: none;
  transform: translateX(-30px);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}

.painel-detalhes {
  display:none;
  justify-content: center;
  align-items: center;
  transform: translateX(30px);
  pointer-events: none;
}

.painel-detalhes.visivel {
  display: flex;
  flex-direction: column;
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

.componente-forma-pagamento {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>
