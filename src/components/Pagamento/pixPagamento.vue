<script setup>
import { ref } from 'vue'
import BotaoVoltar from './botaoVoltar.vue'

const estado = ref('formulario')
const nome = ref('')
const email = ref('')
const qrCode = ref('')
const mensagemErro = ref('')

const props = defineProps({
  valor: {
    type: Number,
  }
})

async function gerarQRCode() {
  if ( !nome.value || !email.value) {
    mensagemErro.value = 'Preencha todos os campos'
    return
  }

  estado.value = 'carregando'
  mensagemErro.value = ''

  try {

    const data = await fetch('http://localhost:3000/pay/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        transaction_amount: props.valor,
        payment_method_id:'pix',
        payer:{
          email: email.value,
        }
      })
    })

    const res = await data.json();
    
    qrCode.value = `data:image/png;base64,${res.qr_code_base64}`
    estado.value = 'qrcode'
  } catch (error) {
    mensagemErro.value = 'Erro ao gerar QR Code. Tente novamente.'
    estado.value = 'erro'
    console.log(error.message)
  }
}

function novoPagamento() {
  estado.value = 'formulario'
  valor.value = ''
  nome.value = ''
  email.value = ''
  qrCode.value = ''
}
</script>

<template>
  <div class="container-principal">
    
    <div class="lado-esquerdo">
      <BotaoVoltar class="btn-voltar" @resetar="$emit('resetar')" />
      <div class="conteudo-esquerdo">
        <h1>Cadastre sua Contribuição!</h1>
        <p class="subtitulo">Escolha o valor da sua doação e contribua para um futuro mais sustentável.</p>
        
        <h2>Doação via PIX</h2>
        
        <div v-if="estado === 'carregando'" class="loader-container">
          <div class="loader"></div>
          <p>Gerando QR Code...</p>
        </div>
        
        <div v-else-if="estado === 'qrcode'" class="qr-code-container">
          <img :src="qrCode" alt="QR Code PIX" class="qr-code-image">
          <p>Escaneie este QR Code com seu app bancário</p>
          <button @click="novoPagamento" class="btn-novo">Nova Doação</button>
        </div>
        
        <div v-else-if="estado === 'erro'" class="erro-container">
          <div class="erro-icon">!</div>
          <p>{{ mensagemErro }}</p>
          <button @click="estado = 'formulario'" class="btn-tentar-novamente">Tentar Novamente</button>
        </div>
        
        <div v-else class="ilustracao-pix">
          <div class="icone-pix">PIX</div>
          <p>Preencha os dados ao lado para gerar seu QR Code</p>
        </div>
      </div>
    </div>
    
    
    <div class="lado-direito">
      <div class="formulario-container">
        <h3>Informações para Pagamento</h3>
        
        <div v-if="mensagemErro && estado === 'formulario'" class="mensagem-erro">
          {{ mensagemErro }}
        </div>
        
        <div class="campo-formulario">
          <input 
            id="nome" 
            v-model="nome" 
            type="text" 
            placeholder="Nome Completo"
          >
        </div>
        
        <div class="campo-formulario">
          <input 
            id="email" 
            v-model="email" 
            type="email" 
            placeholder="Email"
          >
        </div>
        
        <button @click="gerarQRCode" class="btn-gerar">
          Gerar QR Code
        </button>
        
        <div class="info-pix">
          <h4>Como funciona?</h4>
          <ol>
            <li>Preencha os dados acima</li>
            <li>Geraremos um QR Code exclusivo</li>
            <li>Escaneie com seu app bancário</li>
            <li>Confirme o pagamento</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container-principal {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

.lado-esquerdo {
  display: flex;
  flex-direction: column;
  background-color: #66664b;
  width: 50%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  
}

.lado-direito{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}

.loader {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #66664b;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  to{
    transform: rotate(360deg);
  }
}
</style>