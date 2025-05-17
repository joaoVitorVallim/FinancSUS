<template>
  <div class="cartao-wrapper">
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
    <input v-model="numero" placeholder="Número do Cartão" @focus="mostrarVerso = false" />
    <input v-model="nome" placeholder="Nome no Cartão" @focus="mostrarVerso = false" />
    <div class="linha">
      <input v-model="validade" placeholder="Validade (MM/AA)" />
      <input v-model="cvv" placeholder="CVV" @focus="mostrarVerso = true" />
    </div>
    <button @click="confirmar">Pagar R$ {{ valor }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
</script>

<style scoped>
.cartao-wrapper {
  max-width: 400px;
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
.frente, .verso {
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
  gap: 8px;
}
</style>