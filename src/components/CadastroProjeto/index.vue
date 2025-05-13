<template>
  <section class="cadastro-projeto">
    <div class="cadastro-projeto-container">
      <div class="cadastro-projeto-esquerda">
        <h1>Cadastre seu Projeto!</h1>
        <p>Compartilhe sua ideia sustentável</p>
        <p>e ajude a construir um futuro mais verde</p>
      </div>

      <div class="cadastro-projeto-direita">
        <img id="cadastro-projeto-img" src="../../assets/LogoPequenoEnergia.png" alt="">
        <h1>Novo Projeto</h1>
        <form class="formulario-cadastro-projeto">
          <input type="text" placeholder="Nome do Projeto" required />
          <select required>
            <option value="" disabled selected>Tipo de Energia</option>
            <option value="solar">Energia Solar</option>
            <option value="eolica">Energia Eólica</option>
            <option value="hidrica">Energia Hídrica</option>
            <option value="biogas">Biogás</option>
          </select>
          <input type="number" placeholder="Meta de Financiamento (R$)" required />
          <textarea placeholder="Descrição do Projeto" rows="4" required></textarea>
          <input type="file" accept="image/*" required />
          <button class="botao-cadastrar">CADASTRAR PROJETO</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.cadastro-projeto {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1f1ed;
  padding: clamp(1rem, 3vw, 2rem);
}

.cadastro-projeto-container {
  display: flex;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25);
  width: 100%;
  max-width: 1000px;
  min-height: 600px;
}

.cadastro-projeto-esquerda, .cadastro-projeto-direita {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 4vw, 3rem);
  width: 50%;
}

.cadastro-projeto-esquerda {
  background: linear-gradient(175deg, #b4b494, #70705b);
  color: white;
  border-radius: 10px 0 0 10px;
  text-align: center;
}

.cadastro-projeto-esquerda h1 {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}

.cadastro-projeto-esquerda p {
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  margin: 0.5rem 0;
}

.cadastro-projeto-direita {
  background-color: white;
  border-radius: 0 10px 10px 0;
}

#cadastro-projeto-img {
  width: clamp(100px, 15vw, 150px);
  margin-bottom: 2rem;
}

.cadastro-projeto-direita h1 {
  color: #70705b;
  font-size: clamp(1.5rem, 3vw, 2rem);
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

.formulario-cadastro-projeto textarea {
  resize: vertical;
  min-height: 100px;
}

.botao-cadastrar {
  background: linear-gradient(175deg, #b4b494, #70705b);
  color: white;
  border: none;
  padding: 12px 45px;
  border-radius: 20px;
  cursor: pointer;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  transition: background-color 0.3s ease;
}

.botao-cadastrar:hover {
  background: linear-gradient(175deg, #70705b, #b4b494);
}

@media (max-width: 768px) {
  .cadastro-projeto-container {
    flex-direction: column;
  }

  .cadastro-projeto-esquerda,
  .cadastro-projeto-direita {
    width: 100%;
    border-radius: 10px;
  }

  .cadastro-projeto-esquerda {
    padding: clamp(1.5rem, 3vw, 2rem);
  }

  .formulario-cadastro-projeto {
    padding: 0 clamp(1rem, 2vw, 1.5rem);
  }
}
</style>