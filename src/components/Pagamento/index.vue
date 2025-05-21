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
      <div class="area-escolha" :class="{ escondido: metodoSelecionado }">
        <div class="voltar">
        <button class="button__voltar" @click="exitPayment">← Voltar</button>
        </div>
          <div class="area-escolha-content">
          <h2>Quanto deseja doar?</h2>
          <input class="doacao" v-model="valor" type="number" placeholder="Valor em R$" min="0.01" step="0.01"/>

          <h3>Escolha a forma de pagamento</h3>
          <div class="botoes-pagamento">
            <button class="payment_method" @click="selecionarMetodo('cartao')"><img class="icon" src="../../assets/card.png" alt=""> Cartão</button>
            <button class="payment_method" @click="selecionarMetodo('pix')"><img class="icon" src="../../assets/pix.png" alt=""> PIX</button>
            <button class="payment_method" @click="selecionarMetodo('boleto')"><img class="icon" src="../../assets/boleto.png" alt=""> Boleto</button>
          </div>
        </div>
      </div>

     
      <div class="painel-detalhes" :class="{ visivel: metodoSelecionado }">
        <div class="voltar">
          <button class="button__voltar" @click="resetar">← Voltar</button>
        </div>
        <div class="painel-detalhes-content">
        <component
          :is="componenteAtual"
          :valor="valor"
          class="componente-forma-pagamento"
          @confirmar="resetar"
        />
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

.doacao{
  border-radius: 12px;
  border: transparent;
  border-bottom: black 2px solid;
  width: 20%;
}

.payment_method:hover{
  background: linear-gradient(315deg, #003973, #E5E5BE);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
}

.payment_method{
  background-color: #70705b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 100px;
  gap: 5px;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
}

.doacao:focus{
  outline: none;
  border: transparent;
  border-bottom: black 2px solid;
}

.doacao:focus::-webkit-inner-spin-button{
  appearance: none;
}

.doacao:hover::-webkit-inner-spin-button{
  appearance: none;
}

.button__voltar {
  background-color: transparent;
  color: #007bff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

div.voltar{
  padding-top:1.5vh;
  padding-left: 1vh;
  justify-self: flex-start;
  align-self: flex-start;
}



.icon {
  width: 32px;
  height: 32px;
}

.container-pagamento {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1ed;
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
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 100px), calc(100% - 100px) 100%, 0 100%);
  background-image: url('../../assets/raio.svg');
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  
  transition: all 0.6s ease;
}

.area-escolha{
  display:flex;
  flex-direction: column;
}

.area-escolha-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.painel-detalhes-content {
  flex-direction: column;
  align-self: center;
  justify-self: center;
  margin-top: auto;
  margin-bottom: auto;
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


.componente-forma-pagamento {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>
