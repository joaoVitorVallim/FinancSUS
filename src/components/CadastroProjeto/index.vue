<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const projectData = ref({
  title: '',
  description: '',
  goal: 0,
  image: null,
  owner: null
})

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    projectData.value.image = file
  }
}

const registro = async () =>{
  const res = await axios.get('https://financsus-backend.onrender.com/oauth/link', {
     headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      } 
    })

    window.open(res.data.url, 'blank');
}

const submitProject = async () => {
  try {
    const formData = new FormData()
    formData.append('title', projectData.value.title)
    formData.append('description', projectData.value.description)
    formData.append('goal', projectData.value.goal)
    formData.append('image', projectData.value.image)

    const response = await axios.post('https://financsus-backend.onrender.com/vakinha/', formData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data'
      }
    })

    alert('Projeto cadastrado com sucesso!')
    console.log(response.data)
    
  } catch (error) {
    console.error('Erro:', error)
    const message = error.response?.data?.message || 'Erro ao cadastrar o projeto.'
    alert(`Erro: ${message}`)
  }
}

const user = ref({ data: {} });

const getUser = async () => {

  try {
    const email = localStorage.getItem('email')

    const response = await axios.get('http://localhost:3000/users/email/find', {
      params: { email },
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })

    user.value.data = response.data;

  } catch (error) {
    console.error('Erro ao obter usuário:', error)
  }
}

onMounted(() => {
  getUser();
});

    
</script>

<template>
  <section>
    <div v-if="!user.data.refresh_token" class="cadastro-projeto">
      <div class="mensagem-cadastro">
        <h1>Ops! Você ainda não possui cadastro no Mercado Pago.</h1>
        <p>Para prosseguir, é necessário concluir seu cadastro.</p>
        <button @click="registro" class="botao-cadastrar">Cadastrar-se</button>
      </div>
    </div>
    <div v-else class="cadastro-projeto">
      <div class="cadastro-projeto-container">
        <div class="cadastro-projeto-esquerda">
          <h1>Cadastre seu Projeto!</h1>
          <p>Compartilhe sua ideia sustentável</p>
          <p>e ajude a construir um futuro mais verde</p>
        </div>

        <div class="cadastro-projeto-direita">
          <router-link to="/projetos" class="fechar-button">&times;</router-link>
          <img id="cadastro-projeto-img" src="../../assets/LogoPequenoEnergia.png" alt="">
          <h1>Novo Projeto</h1>
          <form class="formulario-cadastro-projeto" @submit.prevent="submitProject">
            <input 
              v-model="projectData.title"
              type="text" 
              placeholder="Título do Projeto" 
              
            />
            <textarea 
              v-model="projectData.description"
              placeholder="Descrição detalhada do projeto" 
              rows="4" 
              
            ></textarea>
            <label for="number" id="label-number">Meta de Financiamento:</label>
            <input 
              v-model.number="projectData.goal"
              type="number" 
              placeholder="Meta de Financiamento (R$)" 
              min="0"
              step="0.01"
              
            />
            <input 
              type="file" 
              accept="image/*" 
              @change="handleImageUpload"
              
            />
            <button type="submit" class="botao-cadastrar">CADASTRAR PROJETO</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@font-face {
    font-family: 'Ancizar Sans';
    src: url(../../../public/fonts/AncizarSans-VariableFont_wght-v2.ttf) format('truetype'); 
    font-weight: normal;
    font-style: normal;
  }

.cadastro-projeto {
  font-family: Ancizar Sans, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1f1ed;
  width: 100%;
}

.cadastro{
  color: #70705b;
  text-decoration-line: none;
}

.cadastro-projeto-container {
  display: flex;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25);
  width: 80%;
  margin: 0 auto;
  max-width: 1000px;;
  max-height: fit-content;
}

.cadastro-projeto-esquerda, .cadastro-projeto-direita {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 4vw, 2.5rem);
  width: 50%;
}

.cadastro-projeto-esquerda {
  background: #70705b;
  color: white;
  border-radius: 10px 0 0 10px;
  text-align: center;
}

.cadastro-projeto-esquerda h1 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.cadastro-projeto-esquerda p {
  font-size: clamp(0.9rem, 3vw, 1.3rem);
  margin: 0.5rem 0;
}

.cadastro-projeto-direita {
  background-color: white;
  border-radius: 0 10px 10px 0;
  position: relative;
}

#cadastro-projeto-img {
  width: clamp(100px, 15vw, 150px);
  margin-bottom: 2rem;
}

.cadastro-projeto-direita h1 {
  color: #70705b;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 2rem;
}

.formulario-cadastro-projeto {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
}

.formulario-cadastro-projeto input,
.formulario-cadastro-projeto select,
.formulario-cadastro-projeto textarea {
  font-family: Ancizar Sans, sans-serif;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  width: 100%;
}

#label-number {
  font-size: clamp(0.9rem, 2vw, 1..5rem);
  font-family: 'Times New Roman', Times, serif;
}

.formulario-cadastro-projeto textarea {
  resize: vertical;
  min-height: 100px;
}

.botao-cadastrar {
  background: #70705b;
  color: white;
  border: none;
  padding: 12px 45px;
  border-radius: 20px;
  cursor: pointer;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  transition: background-color 0.3s ease;
}

.botao-cadastrar:hover {
  opacity: 0.9;
}

.fechar-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: #70705b;
  text-decoration: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.fechar-button:hover {
  background-color: #70705b;
  color: white;
}

.mensagem-cadastro {
  background-color: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  margin: auto;
  margin: 1rem;
}

.mensagem-cadastro h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 16px;
}

.mensagem-cadastro p {
  color: #555;
  font-size: 18px;
  margin-bottom: 24px;
}

.botao-cadastrar {
  background-color: #6d6d57;
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botao-cadastrar:hover {
  background-color: #4d4d3f;
}


@media (max-width: 768px) {
  .cadastro-projeto-container {
    flex-direction: column;
  }

  .cadastro-projeto-esquerda {
    display: none;
  }

  .cadastro-projeto-direita {
    justify-self: center;
    align-self: center;
    border-radius: 10px;
    width: 100%;
  }

  .formulario-cadastro-projeto {
    width: 80%
  }
}
</style>