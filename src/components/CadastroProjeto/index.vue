<template>
  <section class="cadastro-projeto">
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
            required 
          />
          <textarea 
            v-model="projectData.description"
            placeholder="Descrição detalhada do projeto" 
            rows="4" 
            required
          ></textarea>
          <label for="number" id="label-number">Meta de Financiamento:</label>
          <input 
            v-model.number="projectData.goal"
            type="number" 
            placeholder="Meta de Financiamento (R$)" 
            min="0"
            step="0.01"
            required 
          />
          <input 
            type="file" 
            accept="image/*" 
            @change="handleImageUpload"
            required 
          />
          <button type="submit" class="botao-cadastrar">CADASTRAR PROJETO</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

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

const submitProject = async () => {
  //faz a porra do envio aqui caralho
}
</script>

<style scoped>
.cadastro-projeto {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1f1ed;
  width: 100%;
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