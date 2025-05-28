<script setup>
import { ref } from 'vue'
import BotaoVoltar from './botaoVoltar.vue'

const estadosBR = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

const nome = ref('')
const email = ref('')
const cep = ref('')
const logradouro = ref('')
const numero = ref('')
const complemento = ref('')
const bairro = ref('')
const cidade = ref('')
const estado = ref('')
const valor = ref('')
const loading = ref(false)
const boletoData = ref(null)

function formatarCEP() {
  let cepLimpo = cep.value.replace(/\D/g, '')
  if (cepLimpo.length > 5) {
    cep.value = `${cepLimpo.slice(0, 5)}-${cepLimpo.slice(5, 8)}`
  } else {
    cep.value = cepLimpo
  }
}

const gerarBoleto = async () => {
  loading.value = true
  try {
    const response = await fetch('http://localhost:3000/pay/payment', {
      method: 'POST',
      body: JSON.stringify({ 
        payer:{
          first_name: 'vinicius',
          last_name:"butrico",
          email: 'butrico0@gmail.com',
          identification:{
            type: "CPF",
            number:"12345678909"
          },
          address: {
            zip_code: "13844060",
            street_name: "princesa isabel",
            street_number: "590",
            neighborhood: "vila ricci",
            city: "Mogi guacu",
            federal_unit: "SP"
          }
        },
        transaction_amount: 10,
        payment_method_id:'bolbradesco'
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await response.json()
    boletoData.value = {
      url: data.url,
      linhaDigitavel: data.linhaDigitavel
    }
  } catch (e) {
    alert('Erro ao gerar boleto.')
  } finally {
    loading.value = false
  }
}

const copiarLinhaDigitavel = async () => {
  await navigator.clipboard.writeText(boletoData.value.linhaDigitavel)
  alert('Linha digitável copiada!')
}
</script>

<template>
  <div class="boleto-container">
    <div class="left-section">
      <BotaoVoltar class="btn-voltar" @resetar="$emit('resetar')" />
      <div class="texto-promocional">
        <h2>Doe via Boleto!</h2>
        <p>Gere um boleto bancário<br />e apoie um projeto sustentável</p>
      </div>
    </div>
    <div class="right-section">
      <div class="form-container" v-if="!boletoData && !loading">
        <h2>Pagamento Boleto</h2>

        <form @submit.prevent="gerarBoleto">
          <input type="text" v-model="nome" placeholder="Nome completo" required />
          <input type="email" v-model="email" placeholder="E-mail" required />
          
          
          <div class="endereco-grid">
            <input type="text" v-model="cep" placeholder="CEP" @input="formatarCEP" maxlength="9" required />
            <input type="text" v-model="logradouro" placeholder="Rua/Avenida" required />
            <div class="endereco-row">
              <input type="text" v-model="numero" placeholder="Número" required class="numero-input" />
              <input type="text" v-model="complemento" placeholder="Complemento" class="complemento-input" />
            </div>
            <input type="text" v-model="bairro" placeholder="Bairro" required />
            <div class="endereco-row">
              <input type="text" v-model="cidade" placeholder="Cidade" required class="cidade-input" />
              <select v-model="estado" required class="estado-input">
                <option value="">UF</option>
                <option v-for="uf in estadosBR" :value="uf" :key="uf">{{ uf }}</option>
              </select>
            </div>
          </div>

          <button type="submit">GERAR BOLETO</button>
        </form>
      </div>

      <div v-else-if="loading" class="carregando">
        Gerando boleto...
      </div>

      <div v-else class="boleto-gerado">
        <p class="titulo">Boleto gerado com sucesso!</p>
        <a :href="boletoData.url" target="_blank" class="link-boleto">Visualizar Boleto</a>
        <p class="linha-digitavel">{{ boletoData.linhaDigitavel }}</p>
        <button @click="copiarLinhaDigitavel">Copiar Linha Digitável</button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.boleto-container {
  display: flex;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  background: #f9f9f9;
  min-height: 500px;
  width: 100%;
  height: 100%;
}

/* Lado esquerdo */
.left-section {
  background-color: #6b6f56;
  color: white;
  padding: 2rem;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  width: 40vw;
  height: 80vh;
  box-sizing: border-box;
}

.texto-promocional {
  text-align: center;
}

.texto-promocional h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.texto-promocional p {
  font-size: 1rem;
  line-height: 1.5;
}

/* Botão voltar no canto superior esquerdo */
.btn-voltar {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 20%;
}

/* Lado direito */
.right-section {
  background: white;
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
}

/* Formulário */
.form-container {
  max-width: 320px;
  width: 100%;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 1rem;
}

input, select {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
}

.endereco-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.endereco-row {
  display: flex;
  gap: 12px;
}

.numero-input {
  flex: 1;
}

.complemento-input {
  flex: 2;
}

.cidade-input {
  flex: 2;
}

.estado-input {
  flex: 1;
}

button {
  background-color: #6b6f56;
  color: white;
  padding: 12px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
}

button:hover {
  background-color: #5a5d4a;
}

/* Carregando */
.carregando {
  font-size: 1.2rem;
  font-weight: bold;
  color: #6b6f56;
}

/* Resultado do boleto */
.boleto-gerado {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  width: 100%;
  max-width: 320px;
}

.titulo {
  font-weight: bold;
  color: #6b6f56;
  font-size: 1.2rem;
}

.link-boleto {
  color: #6b6f56;
  text-decoration: underline;
  font-weight: bold;
}

.linha-digitavel {
  background: #f0f0f0;
  padding: 8px 12px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 0.9rem;
  width: 100%;
  word-break: break-all;
}

/* Responsividade */
@media (max-width: 768px) {
  .boleto-container {
    flex-direction: column;
    min-height: auto;
  }
  
  .left-section, .right-section {
    padding: 1.5rem;
    min-height: 300px;
  }
  
  .form-container, .boleto-gerado {
    max-width: 100%;
  }

  .endereco-row {
    flex-direction: column;
    gap: 12px;
  }
  .btn-voltar{
    position: static;
    width: 100%;
    margin-bottom: 16px;
    width: 30%;
  }
}
</style>