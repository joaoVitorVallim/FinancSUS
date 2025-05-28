<script setup>
import { ref } from 'vue'
import BotaoVoltar from './botaoVoltar.vue'
const props = defineProps({ valor: String })
const emit = defineEmits(['confirmar'])

const numero = ref('')
const nome = ref('')
const validade = ref('')
const cvv = ref('')
const mostrarVerso = ref(false)

function confirmar() {
  alert('Pagamento com cartão confirmado!')
  emit('confirmar')
}

function formatarNumeroCartao() {
  const apenasDigitos = numero.value.replace(/\D/g, '').slice(0, 16)
  const comEspacos = apenasDigitos.replace(/(\d{4})(?=\d)/g, '$1 ')
  numero.value = comEspacos.trim()
}

function formatarCvv() {
  cvv.value = cvv.value.replace(/\D/g, '').slice(0, 3)
}

function formatarValidade() {
  const apenasDigitos = validade.value.replace(/\D/g, '').slice(0, 4)
  validade.value = apenasDigitos.replace(/(\d{2})(\d{1,2})/, '$1/$2')
}


</script>

<template>
  <div class="container-principal">
    <BotaoVoltar @resetar="$emit('resetar')" />
    <h1>Cadastre sua Contribuição!</h1>
    <p>Escolha o valor da sua doação e contribua para um futuro mais sustentável.</p>
    
    <h2>Doação</h2>
    <div class="metodos-pagamento">
      <button class="metodo ativo">Cartão</button>
      <button class="metodo">PIX</button>
      <button class="metodo">Boleto</button>
    </div>
    
    <div class="container-cartao">
      <div class="lado-cartao">
        <div class="cartao" :class="{ virado: mostrarVerso }" @click="mostrarVerso = !mostrarVerso">
          <div class="frente">
            <div class="chip"></div>
            <div class="numero">{{ numero || '**** **** **** ****' }}</div>
            <div class="nome">{{ nome || 'SEU NOME AQUI' }}</div>
          </div>
          <div class="verso">
            <div class="faixa"></div>
            <div class="cvv">CVV: {{ cvv || '***' }}</div>
          </div>
        </div>
      </div>
      <div class="lado-formulario">
        <div class="input__container">
          <div class="linha">
            <input v-model="numero" @input="formatarNumeroCartao" maxlength="19" inputmode="numeric"
              placeholder="Número do Cartão" class="input" @focus="mostrarVerso = false" />
          </div>
          <div class="linha">
            <input v-model="nome" placeholder="Nome no Cartão" class="input" @focus="mostrarVerso = false" />
          </div>
          <div class="linha">
            <input v-model="validade" @input="formatarValidade" maxlength="5" placeholder="Validade (MM/AA)"
              class="input" @focus="mostrarVerso = false" />
            <input v-model="cvv" @input="formatarCvv" maxlength="3" placeholder="CVV" class="input cvv"
              @focus="mostrarVerso = true" />
          </div>
        </div>
        <button class="confirm" @click="confirmar">Pagar R$ {{ valor }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.btn-voltar {
  display: flex;
  width: 20%;
  top: 16px;
  left: 16px;
  width: 20%;
}

.container-principal {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
}

h1 {
  color: #66664b;
  font-size: 24px;
  margin-bottom: 10px;
}

h2 {
  color: #66664b;
  font-size: 20px;
  margin: 20px 0 15px 0;
}

.metodos-pagamento {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.metodo {
  padding: 10px 15px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.metodo.ativo {
  background-color: #66664b;
  color: white;
}

.container-cartao {
  display: flex;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-height: 420px;
  height: 100%;
}

.lado-cartao {
  flex: 1;
  background-color: #66664b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

.lado-formulario {
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
}

.cartao {
  width: 320px;
  height: 190px;
  perspective: 1000px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  border-radius: 12px;
}

.cartao.virado {
  transform: rotateY(180deg);
}

.frente,
.verso {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 12px;
  backface-visibility: hidden;
  color: white;
  box-sizing: border-box;
  background: linear-gradient(135deg,rgba(123, 227, 168, 1) 0%, rgba(42, 153, 155, 1) 50%, rgba(83, 237, 227, 1) 100%);
}

.frente {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.verso {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}

.chip {
  width: 40px;
  height: 30px;
  background: linear-gradient(135deg, #ddddbb, #bbbb99);
  border-radius: 5px;
}

.numero {
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  margin: 20px 0;
}

.nome {
  font-size: 14px;
  text-transform: uppercase;
}

.faixa {
  width: 100%;
  height: 40px;
  background-color: #000;
  margin: 20px 0;
}

.cvv {
  background-color: white;
  color: #333;
  padding: 5px;
  border-radius: 3px;
  width: 80%;
  text-align: right;
}

.input__container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.linha {
  display: flex;
  gap: 15px;
}

.input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  flex: 1;
}

.input.cvv {
  flex: 0.5;
}

.confirm {
  margin-top: 20px;
  padding: 12px;
  background-color: #66664b;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.confirm:hover {
  background-color: #4a4a3a;
}

@media (max-width: 768px) {
  .container-cartao {
    flex-direction: column;
    max-height: none;
  }

  .lado-cartao {
    padding: 30px;
  }

  .cartao {
    width: 280px;
    height: 170px;
  }

  .lado-formulario {
    padding: 25px;
  }
}

@media (max-width: 480px) {
  .container-principal {
    padding: 15px;
  }

  .metodos-pagamento {
    flex-wrap: wrap;
    justify-content: center;
  }

  .linha {
    flex-direction: column;
    gap: 15px;
  }

  .input.cvv {
    flex: 1;
  }

  .cartao {
    width: 260px;
    height: 160px;
  }

  .numero {
    font-size: 16px;
    margin: 15px 0;
  }

  .nome {
    font-size: 13px;
  }
}
</style>