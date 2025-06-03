<script setup>
import { ref, computed, onMounted } from 'vue'
import CartaoPagamento from './cartaoPagamento.vue'
import PixPagamento from './pixPagamento.vue'
import BoletoPagamento from './boletoPagamento.vue'
import { useRoute } from 'vue-router';

const valor = ref('');
const metodoSelecionado = ref(null);
const route = useRoute();
const id = ref('');

onMounted(async () => {
  id.value = route.query.param;
})


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

      <section v-if="!metodoSelecionado" class="area-direita">
        <div class="topo-form">
          <img class="logo__energia" src="../../assets/LogoPequenoEnergia.png" alt="Logo do projeto" />
          <h3>Doação</h3>
        </div>

        <div class="formulario">
          <input class="input-text" v-model="valor" type="number" placeholder="Valor em R$" min="0.01" step="0.01" />

          <div class="botoes-pagamento">
            <button class="payment_method" @click="selecionarMetodo('cartao')">
              <img class="icon" src="../../assets/card.png" alt="Cartão" /> Cartão
            </button>
            <button class="payment_method" @click="selecionarMetodo('pix')">
              <img class="icon" src="../../assets/pix.png" alt="PIX" /> PIX
            </button>
            <button class="payment_method" @click="selecionarMetodo('boleto')">
              <img class="icon" src="../../assets/boleto.png" alt="Boleto" /> Boleto
            </button>
          </div>
        </div>

      </section>
      <div v-else class="painel-principal">

        <component :is="componenteAtual" :valor="valor" :id="id" class="componente-forma-pagamento" @resetar="resetar"
          @confirmar="resetar" />
      </div>
    </div>
  </div>
</template>



<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}




.container-pagamento {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f1f1ed;
  
}

.painel-principal {
  width: 60vw;
  height: 80vh;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.area-esquerda {
  width: 50%;
  background-color: #666e5f;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: white;
}

.area-direita {
  width: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  gap: 10vh;
}

.logo__energia {
  width: 90px;
}

.formulario {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-text {
  margin-bottom: 15%;
  width: 50%;
  height: 40px;
  border: transparent;
  border-bottom: black 2px solid;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
}

.input-text:focus {
  outline: none;

}

.input-text::-webkit-inner-spin-button,
.input-text::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.botoes-pagamento {
  display: flex;
  gap: 2.5%;
}

.payment_method {
  padding: 1vh 1vw;
  border-radius: 5px;
  background-color: #666e5f;
  border: transparent;
  cursor: pointer;
  color: white;
}

.icon {
  width: 30px;
}

.componente-forma-pagamento{
  height: 100%;
  width: 100%;
  justify-content: center;
}

@media (max-width: 1024px) {
  .painel-principal {
    width: 80vw;
    height: 85vh;
  }

  .input-text {
    width: 60%;
  }

  .logo__energia {
    width: 70px;
  }

  .icon {
    width: 25px;
  }
}

@media (max-width: 768px) {
  .painel-principal {
    width: 90vw;
    height: auto;
    flex-direction: column;
  }

  .area-esquerda, .area-direita {
    width: 100%;
    height: auto;
    border-radius: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .area-esquerda {
    padding: 40px 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .area-direita {
    gap: 5vh;
    padding: 30px 20px;
  }

  .input-text {
    width: 70%;
    margin-bottom: 10%;
  }

  .botoes-pagamento {
    gap: 15px;
  }

  .payment_method {
    width: 60%;
  }

  .logo__energia {
    width: 60px;
  }

  .icon {
    width: 25px;
  }
}

@media (max-width: 480px) {
  .painel-principal {
    width: 95vw;
  }

  .input-text {
    width: 80%;
  }

  .payment_method {
    width: 70%;
    font-size: 14px;
  }

  .logo__energia {
    width: 50px;
  }

  .icon {
    width: 20px;
  }
}

</style>
