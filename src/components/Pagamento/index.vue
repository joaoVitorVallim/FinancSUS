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


      <section class="area-esquerda" v-if="!metodoSelecionado">
        <div class="texto-promocional">
          <h2>Cadastre sua Contribuição!</h2>
          <p>Escolha o valor da sua doação<br />
            e contribua para um futuro mais sustentável.</p>
        </div>
      </section>

      <!-- LADO DIREITO: Formulário -->
      <section v-if="!metodoSelecionado" class="area-direita">
        <div class="topo-form">
          <img class="logo__energia" src="../../assets/LogoPequenoEnergia.png" alt="Logo do projeto" />
          <h3>Doação</h3>
        </div>

        <div class="formulario">
          <input class="input-text" v-model="valor" type="number" placeholder="Valor em R$" min="0.01" step="0.01" />

          <div class="botoes-pagamento">
            <button class="payment_method cartao" @click="selecionarMetodo('cartao')">
              <img class="icon" src="../../assets/card.png" alt="Cartão" /> Cartão
            </button>
            <button class="payment_method pix" @click="selecionarMetodo('pix')">
              <img class="icon" src="../../assets/pix.png" alt="PIX" /> PIX
            </button>
            <button class="payment_method boleto" @click="selecionarMetodo('boleto')">
              <img class="icon" src="../../assets/boleto.png" alt="Boleto" /> Boleto
            </button>
          </div>
        </div>

        <!-- Componente Dinâmico -->
        
      </section>
      <div v-else class="formulario">

          <component :is="componenteAtual" :valor="valor" class="componente-forma-pagamento" @resetar="resetar" @confirmar="resetar" />
        </div>
    </div>
  </div>
</template>



<style scoped>


.container-pagamento {
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #f1f1ed;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.painel-principal {
  display: flex;
  max-width: 960px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  flex-direction: row;
  height: 80%;
  width: 80%;
  justify-content: center;
  align-items: center;
}

.area-esquerda {
  background-color: #66664b;
  color: white;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.area-direita {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.topo-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
}

.logo__energia {
  width: 64px;
  height: 64px;
  margin-bottom: 12px;
}

h3 {
  color: #444;
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.input-text {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.botoes-pagamento {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.payment_method {
  flex: 1;
  min-width: 100px;
  padding: 12px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.payment_method img.icon {
  width: 28px;
  height: 28px;
  margin-bottom: 4px;
}

.payment_method.cartao {
  background-color: #66664b;
  color: white;
}

.payment_method.pix {
  background-color: #66664b;
  color: white;
}

.payment_method.boleto {
  background-color: #66664b;
  color: white;
}

.button__voltar {
  align-self: flex-start;
  background-color: transparent;
  border: none;
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 16px;
}

.texto-promocional {
  text-align: center;
  max-width: 300px;
}

.texto-promocional h2 {
  font-size: 1.8rem;
  margin-bottom: 12px;
  font-weight: bold;
}

.texto-promocional p {
  font-size: 1rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .painel-principal {
    flex-direction: column;
  }

  .area-esquerda {
    padding: 20px;
    order: 2;
  }

  .area-direita {
    padding: 20px;
    order: 1;
  }
}
</style>
