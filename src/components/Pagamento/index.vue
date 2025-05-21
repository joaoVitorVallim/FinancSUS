<template>
  <div class="container-pagamento">
    <div class="painel-principal">
      <div class="area-escolha" :class="{ escondido: metodoSelecionado }">
        <div class="voltar">
          <button class="button__voltar" @click="exitPayment">← Voltar</button>
        </div>
        <div class="area-escolha-content">
          <h2>Quanto deseja doar?</h2>
          <input class="doacao" v-model="valor" type="number" placeholder="Valor em R$" min="0.01" step="0.01" />

          <h3>Escolha a forma de pagamento</h3>
          <div class="botoes-pagamento">
            <button class="payment_method cartao" @click="selecionarMetodo('cartao')">
              <img class="icon" src="../../assets/card.png" alt=""> Cartão
            </button>
            <button class="payment_method pix" @click="selecionarMetodo('pix')">
              <img class="icon" src="../../assets/pix.png" alt=""> PIX
            </button>
            <button class="payment_method boleto" @click="selecionarMetodo('boleto')">
              <img class="icon" src="../../assets/boleto.png" alt=""> Boleto
            </button>
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

<style scoped>
.container-pagamento {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(225deg, #f1f1ed, #a8a899);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
}

.painel-principal {
display: flex;
flex-direction: column;
width: 100%;
max-width: 900px;
height: 100%;
max-height: 550px;
background: white;
border-radius: 12px;
clip-path: polygon(0 0, 100% 0, 100% calc(100% - 100px), calc(100% - 100px) 100%, 0 100%);
transition: all 0.6s ease;
overflow: hidden;
}

.area-escolha,
.painel-detalhes {
  padding: 24px;
  height: 100%;
  box-sizing: border-box;
}

.area-escolha-content,
.painel-detalhes-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 16px;
}

.doacao {
  border-radius: 12px;
  border: 2px solid transparent;
  border-bottom: 2px solid black;
  width: 60%;
  padding: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 25%;
  text-align: center;
}

.doacao:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 8px rgba(76, 175, 80, 0.3);
}

.payment_method {
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
  transition: background 0.3s ease;
}

.payment_method:hover {
  background: linear-gradient(315deg, #003973, #E5E5BE);
}

.payment_method.cartao { background-color: #3b82f6; }
.payment_method.pix { background-color: #10b981; }
.payment_method.boleto { background-color: #6b7280; }

.icon {
  width: 32px;
  height: 32px;
}

.botoes-pagamento {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.button__voltar {
  background-color: transparent;
  color: #007bff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.voltar {
  padding-top: 1.5vh;
  padding-left: 1vh;
  align-self: flex-start;
}

.area-escolha.escondido {
  display: none;
  transform: translateX(-30px);
  pointer-events: none;
  position: absolute;
  z-index: 1;
}

.painel-detalhes {
  display: none;
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

.componente-forma-pagamento {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .doacao {
    width: 80%;
  }

  .payment_method {
    width: 90px;
    height: 70px;
  }
}

@media (max-width: 480px) {
  .painel-principal {
    max-height: none;
    height: auto;
  }

  .doacao {
    width: 90%;
  }

  .payment_method {
    width: 80px;
    height: 65px;
  }
}
</style>