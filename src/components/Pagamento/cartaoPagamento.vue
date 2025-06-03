<script setup>
import { ref } from 'vue'
import BotaoVoltar from './botaoVoltar.vue'
import axios from 'axios'

const props = defineProps({
  valor: String,
  id: String
})
const emit = defineEmits(['confirmar'])

const numero = ref('')
const nome = ref('')
const email = ref('')
const validade = ref('')
const cvv = ref('')
const mostrarVerso = ref(false)


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



async function confirmar() {
  const oauth = await axios.get('http://localhost:3000/oauth/token?id=' + props.id);

  const bin = numero.value.replace(/\s/g, '').slice(0, 6);
  const metodoResponse = await axios.get(
    `https://api.mercadopago.com/v1/payment_methods/search?public_key=${oauth.data.public_key}&bin=${bin}`
  );

  


  const metodo = metodoResponse.data.results[0];
  const paymentMethodId = metodo.id;

  console.log(paymentMethodId)



  const tokenResponse = await axios.post(
    `https://api.mercadopago.com/v1/card_tokens?public_key=${oauth.data.public_key}`,
    {
      card_number: numero.value.replace(/\s/g, ''),
      security_code: cvv.value,
      expiration_month: validade.value.split('/')[0],
      expiration_year: '20' + validade.value.split('/')[1],
      cardholder: {
        name: "VINICIUS B FR",
        identification: {
          type: "CPF",
          number: "44963326809"
        }
      } 

    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  const token = tokenResponse.data.id;

  await new Promise(resolve => setTimeout(resolve, 1000))

  const paymentResponse = await axios.post(
    'https://financsus-backend.onrender.com/pay/payment?id=' + props.id,
    {
      transaction_amount: parseFloat(props.valor),
      token: token,
      payment_method_id: 'visa',
      payer: {
        first_name: 'Vinicius',
        last_name: 'Freitas',
        identification: {
          type: 'CPF',
          number: '44963326809'
        },
        email: email.value
      }
    }
  );


}


</script>

<template>
  <div class="container-principal">
    <BotaoVoltar @resetar="$emit('resetar')" />
    <h1>Cadastre sua Contribuição!</h1>
    <p>Escolha o valor da sua doação e contribua para um futuro mais sustentável.</p>

    <h2>Doação</h2>

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
            <input v-model="email" class="input" placeholder="Email" />
          </div>
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
            <input v-model="cvv" @input="formatarCvv" maxlength="3" placeholder="CVV" class="input input-cvv"
              @focus="mostrarVerso = true" />
          </div>
        </div>
        <button class="confirm" @click="confirmar">Pagar R$ {{ valor }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Ancizar Sans';
  src: url(../../../public/fonts/AncizarSans-VariableFont_wght-v2.ttf) format('truetype');
  font-weight: normal;
  font-style: normal;
}

.container-principal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2vw;
}

.container-cartao {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 50vw;
  height: 35vh;
  justify-content: center;
  align-self: center;
}

.lado-cartao {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6b6f56;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  height: 100%;
  width: 50%;
}

.lado-formulario {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 100%;
  width: 50%;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.input-cvv {
  width: 30%;
}

.linha {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
}

.confirm {
  background-color: #6b6f56;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
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
  background: linear-gradient(135deg, rgba(123, 227, 168, 1) 0%, rgba(42, 153, 155, 1) 50%, rgba(83, 237, 227, 1) 100%);
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

@media (min-width: 1024px) {
  .container-cartao {
    flex-direction: row;
    width: 50vw;
    height: 35vh;
  }

  .lado-cartao,
  .lado-formulario {
    width: 50%;
    height: 100%;
  }

  .lado-cartao {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .lado-formulario {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}



@media (max-width: 1023px) and (min-width: 768px) {
  .container-cartao {
    flex-direction: column;
    width: 80vw;
    height: auto;
  }

  .lado-cartao,
  .lado-formulario {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }

  .lado-cartao {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .lado-formulario {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .cartao {
    width: 280px;
    height: 170px;
  }

  .input {
    width: 90%;
  }

  .linha {
    flex-direction: row;
    gap: 10px;
  }

  .input-cvv {
    width: 35%;
  }

  .confirm {
    width: 90%;
  }
}


@media (max-width: 767px) {
  .container-cartao {
    flex-direction: column;
    width: 90vw;
    height: auto;
  }

  .lado-cartao,
  .lado-formulario {
    width: 100%;
    height: auto;
    border-radius: 15px;
  }

  .lado-cartao {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .lado-formulario {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .cartao {
    width: 260px;
    height: 160px;
  }

  .input {
    width: 100%;
  }

  .linha {
    flex-direction: column;
    gap: 8px;
  }

  .input-cvv {
    width: 100%;
  }

  .confirm {
    width: 100%;
  }
}
</style>