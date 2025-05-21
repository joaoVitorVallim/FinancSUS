<script setup>
import { ref, computed } from 'vue'
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



const numeroFormatado = computed(() => {
  return numero.value.replace(/\D/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
})


</script>

<template>
  <div class="cartao-wrapper">
    <div class="cartao" :class="{ virado: mostrarVerso }" @click="mostrarVerso = !mostrarVerso">
      <div class="frente">
        <div class="chip"></div>
        <div class="numero">{{ numeroFormatado || '**** **** **** ****' }}</div>
        <div class="nome">{{ nome || 'SEU NOME AQUI' }}</div>
      </div>
      <div class="verso">
        <div class="faixa"></div>
        <div class="cvv">CVV: {{ cvv || '***' }}</div>
      </div>
    </div>
    <div class="input__container">
      <div class="linha">
        <input v-model="numero" class="input" type="number" placeholder="Número do Cartão" maxlength="16"
          @focus="mostrarVerso = false" />
        <input v-model="nome" class="input" placeholder="Nome no Cartão" @focus="mostrarVerso = false" />
      </div>
      <div class="linha">
        <input v-model="validade" class="input" type="number" maxlength="5" placeholder="Validade (MM/AA)"
          @focus="mostrarVerso = false" />
        <input v-model="cvv" class="input cvv" type="number" maxlength="3" placeholder="CVV"
          @focus="mostrarVerso = true" />
      </div>
    </div>
    <button @click="confirmar">Pagar R$ {{ valor }}</button>
  </div>
</template>



<style scoped>
.cartao-wrapper {
  max-width: 400px;
}

.cvv {
  width: 50px;
}

.input__container {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.input {
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input:focus::-webkit-inner-spin-button {
  appearance: none;
}

.input:hover::-webkit-inner-spin-button {
  appearance: none;
}

.cartao {
  width: 320px;
  height: 190px;
  margin: 20px auto;
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
}

.frente {
  background: linear-gradient(135deg, #003973, #E5E5BE);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.verso {
  background: #444;
  transform: rotateY(180deg);
}

.chip {
  width: 50px;
  height: 35px;
  background: gold;
  border-radius: 6px;
}

.numero {
  font-size: 18px;
}

.nome {
  text-transform: uppercase;
}

.faixa {
  height: 40px;
  background: black;
  margin: 10px 0;
}

.linha {
  display: flex;
  gap: 3px;
}
</style>