<script setup>
import { ref } from 'vue'
import BotaoVoltar from './BotaoVoltar.vue'

const estado = ref('formulario') // formulario | carregando | qrcode | erro
const valor = ref('')
const nome = ref('')
const email = ref('')
const qrCode = ref('')
const mensagemErro = ref('')

async function gerarQRCode() {
  if (!valor.value || !nome.value || !email.value) {
    mensagemErro.value = 'Preencha todos os campos'
    return
  }

  estado.value = 'carregando'
  mensagemErro.value = ''

  try {
    // Simulação de requisição ao backend
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulando retorno do backend
    qrCode.value = 'data:image/svg+xml;base64,...'
    estado.value = 'qrcode'
  } catch (error) {
    mensagemErro.value = 'Erro ao gerar QR Code. Tente novamente.'
    estado.value = 'erro'
    console.error(error)
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
    <!-- Lado Esquerdo (Verde Oliva) -->
    <div class="lado-esquerdo">
      <BotaoVoltar @resetar="$emit('resetar')" />
      <div class="conteudo-esquerdo">
        <h1>Cadastre sua Contribuição!</h1>
        <p class="subtitulo">Escolha o valor da sua doação e contribua para um futuro mais sustentável.</p>
        
        <h2>Doação via PIX</h2>
        
        <!-- Estado: Carregando -->
        <div v-if="estado === 'carregando'" class="loader-container">
          <div class="loader"></div>
          <p>Gerando QR Code...</p>
        </div>
        
        <!-- Estado: QR Code Gerado -->
        <div v-else-if="estado === 'qrcode'" class="qr-code-container">
          <img :src="qrCode" alt="QR Code PIX" class="qr-code-image">
          <p>Escaneie este QR Code com seu app bancário</p>
          <button @click="novoPagamento" class="btn-novo">Nova Doação</button>
        </div>
        
        <!-- Estado: Erro -->
        <div v-else-if="estado === 'erro'" class="erro-container">
          <div class="erro-icon">!</div>
          <p>{{ mensagemErro }}</p>
          <button @click="estado = 'formulario'" class="btn-tentar-novamente">Tentar Novamente</button>
        </div>
        
        <!-- Estado: Formulário (Padrão) -->
        <div v-else class="ilustracao-pix">
          <div class="icone-pix">PIX</div>
          <p>Preencha os dados ao lado para gerar seu QR Code</p>
        </div>
      </div>
    </div>
    
    <!-- Lado Direito (Branco) -->
    <div class="lado-direito">
      <div class="formulario-container">
        <h3>Informações para Pagamento</h3>
        
        <div v-if="mensagemErro && estado === 'formulario'" class="mensagem-erro">
          {{ mensagemErro }}
        </div>
        
        <div class="campo-formulario">
          <label for="valor">Valor (R$)</label>
          <input 
            id="valor" 
            v-model="valor" 
            type="number" 
            placeholder="Ex: 50,00" 
            min="1"
            step="0.01"
          >
        </div>
        
        <div class="campo-formulario">
          <label for="nome">Seu Nome</label>
          <input 
            id="nome" 
            v-model="nome" 
            type="text" 
            placeholder="Como deve aparecer no comprovante"
          >
        </div>
        
        <div class="campo-formulario">
          <label for="email">E-mail</label>
          <input 
            id="email" 
            v-model="email" 
            type="email" 
            placeholder="Para envio do comprovante"
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
/* Reset básico */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}

.container-principal {
  display: flex;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  flex-direction: row;
}

/* Lado Esquerdo - Verde Oliva */
.lado-esquerdo {
  flex: 1;
  background-color: #66664b;
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lado-esquerdo h1 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  text-align: center;
}

.lado-esquerdo .subtitulo {
  font-size: 1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-align: center;
}

.lado-esquerdo h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.conteudo-esquerdo {
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  padding: 1rem;
}

/* Loader */
.loader-container {
  text-align: center;
  padding: 2rem;
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
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* QR Code */
.qr-code-container {
  text-align: center;
  padding: 1rem;
}

.qr-code-image {
  width: 200px;
  height: 200px;
  background: #f0f0f0;
  margin: 0 auto 1rem;
  border: 10px solid white;
  display: block;
}

/* Ilustração Pix */
.ilustracao-pix {
  text-align: center;
  padding: 1rem;
}

.icone-pix {
  width: 120px;
  height: 120px;
  background-color: white;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #66664b;
  font-size: 2rem;
  font-weight: bold;
}

/* Erro */
.erro-container {
  text-align: center;
  padding: 1rem;
}

.erro-icon {
  width: 60px;
  height: 60px;
  background-color: #ff6b6b;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Lado Direito - Branco */
.lado-direito {
  flex: 1;
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.formulario-container {
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
  padding: 1rem;
}

.formulario-container h3 {
  font-size: 1.375rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
}

.campo-formulario {
  margin-bottom: 1.25rem;
}

.campo-formulario label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

.campo-formulario input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

.mensagem-erro {
  color: #ff6b6b;
  margin-bottom: 1.25rem;
  padding: 0.625rem;
  background: #ffeeee;
  border-radius: 6px;
  text-align: center;
}

.btn-gerar {
  width: 100%;
  padding: 0.9375rem;
  background-color: #66664b;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.625rem;
  transition: background-color 0.3s;
}

.btn-gerar:hover {
  background-color: #4a4a3a;
}

.btn-novo, .btn-tentar-novamente {
  padding: 0.625rem 1.25rem;
  background-color: white;
  color: #66664b;
  border: 2px solid #66664b;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  margin-top: 1.25rem;
  transition: all 0.3s;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.btn-novo:hover, .btn-tentar-novamente:hover {
  background-color: #66664b;
  color: white;
}

.info-pix {
  margin-top: 2.5rem;
  padding: 1.25rem;
  background-color: #f9f9f9;
  border-radius: 6px;
}

.info-pix h4 {
  margin-bottom: 0.9375rem;
  color: #66664b;
  text-align: center;
}

.info-pix ol {
  padding-left: 1.25rem;
}

.info-pix li {
  margin-bottom: 0.625rem;
  color: #555;
}

/* Responsividade */
@media (max-width: 768px) {
  .container-principal {
    flex-direction: column;
    min-height: auto;
  }
  
  .lado-esquerdo, .lado-direito {
    padding: 1.5rem;
    flex: none;
    width: 100%;
  }
  
  .lado-esquerdo {
    order: -1;
    padding-bottom: 2rem;
  }
  
  .conteudo-esquerdo, .formulario-container {
    max-width: 100%;
  }
  
  .qr-code-image {
    width: 180px;
    height: 180px;
  }
  
  .icone-pix {
    width: 100px;
    height: 100px;
    font-size: 1.5rem;
  }
  
  .info-pix {
    margin-top: 1.5rem;
  }
}

@media (max-width: 480px) {
  .lado-esquerdo h1 {
    font-size: 1.5rem;
  }
  
  .lado-esquerdo h2 {
    font-size: 1.25rem;
  }
  
  .formulario-container h3 {
    font-size: 1.25rem;
  }
  
  .campo-formulario input {
    padding: 0.625rem;
  }
  
  .btn-gerar {
    padding: 0.8125rem;
  }
}
</style>