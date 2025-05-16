<template>
  <div class="projetos-container" :class="{ 'empty-container': projetosFiltrados.length === 0 }">
    
    <div class="descricao">
      <h1 class="descricao-titulo">Pequenas Contribuições, Grandes Transformações</h1>
      <p class="paragrafo-1">O FinancSUS nasce com o propósito de impulsionar a transição para um futuro mais sustentável. Por meio dela, pessoas e organizações com ideias inovadoras podem apresentar seus projetos e receber apoio financeiro direto de doadores engajados com causas ambientais.</p>
      <p class="paragrafo-2">Acreditamos que, ao conectar quem tem ideias transformadoras com quem deseja contribuir para um mundo melhor, o FinancSUS pode acelerar o desenvolvimento de tecnologias limpas e acessíveis para todos.</p>
      <p class="paragrafo-3">Conheça agora os projetos já cadastrados na plataforma e escolha aqueles que você quer ajudar a transformar em realidade.<span class="destaque"> Seu apoio faz a diferença!</span></p>

    </div>
    
    <div class="barra-pesquisa">
      <input type="text" v-model="filtro" placeholder="Buscar projetos" class="input-pesquisa"/>
    </div>

    <div v-if="projetosFiltrados.length === 0" class="mensagem-vazio">
      <p>Nenhum projeto encontrado.</p>
    </div>

    <div v-else class="projetos-grid">
      <RouterLink v-for="projeto in projetosFiltrados" :key="projeto.id" to="/project-details" class="projeto-card">
        <img :src="projeto.imagem" alt="Imagem do Projeto" class="projeto-imagem"/>
        <h2 class="projeto-titulo">{{ projeto.titulo }}</h2>
        <p class="projeto-descricao">{{ projeto.descricao }}</p>
        <p class="projeto-valor">
          <span class="valor-arrecadado">R$ {{ projeto.valorArrecadado.toFixed(2) }}</span>
          
          <span class="valor-meta"> de R$ {{ projeto.metaArrecadacao.toFixed(2) }}</span>
        </p>
        <div class="progresso-container">
          <div 
            class="progresso-barra" 
            :style="{ width: `${(projeto.valorArrecadado / projeto.metaArrecadacao) * 100}%` }"
          ></div>
        </div>
        <p class="progresso-texto">
          {{ ((projeto.valorArrecadado / projeto.metaArrecadacao) * 100).toFixed(1) }}% arrecadado
        </p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const projetos = ref([])
const projetosVisiveis = ref([])
const filtro = ref('')

const api_url = 'link-api'

onMounted(async () => {
  try {
    const res = await fetch(api_url)
    if (!res.ok){ 
        throw new Error('Erro ao buscar projetos')
    }
    const data = await res.json()
    projetos.value = data
  } catch (error) {
    console.error('Erro ao carregar projetos:', error)

    projetos.value = Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      titulo: `Projeto Temporário ${i + 1}`,
      descricao: 'Descrição do projeto temporário.',
      imagem: 'https://placehold.co/400x200.png',
      valorArrecadado: Math.floor(Math.random() * 10000),
      metaArrecadacao: Math.floor(Math.random() * 100000),
      status: ['Concluído', 'Em andamento', 'Encerrado'][i % 3]
    }))
  }

  projetosVisiveis.value = projetos.value.slice(0, 12)
})

const projetosFiltrados = computed(() => {
  const projetosAtivos = projetosVisiveis.value.filter(projeto => projeto.status !== 'Encerrado')
  
  if (!filtro.value.trim()) {
    return projetosAtivos
  } 
  return projetosAtivos.filter(projeto => projeto.titulo.toLowerCase().includes(filtro.value.toLowerCase()))
})
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

.projetos-container {
  padding: 7rem 10rem 5rem 10rem;
  background-color: #f1f1ed;
}

.projetos-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

.projeto-card {
  background-color: #f7f7f5;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  text-decoration: none;
}

.projeto-card:hover {
  transform: translateY(-4px);
}

.projeto-imagem { /* mudou */
  width: 100%;
  aspect-ratio: 2 / 1;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  display: block;
  max-width: 100%;
  height: auto;
}

.projeto-titulo {
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: black;
}

.projeto-descricao {
  color: #2d2f31;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.valor-arrecadado {
  color: #16a34a;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
}

.valor-meta {
  color: #323131;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
}

.progresso-container {
  width: 100%;
  height: 10px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 0.5rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.progresso-barra {
  height: 100%;
  background-color: #16a34a;
  transition: width 0.3s ease;
  border-right: 1px solid black;
}

.progresso-texto {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
  text-align: right;
  font-family: 'Roboto', sans-serif;
}

.barra-pesquisa {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: flex-end;
}

.input-pesquisa {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 300px;
  outline: none;
  transition: border-color 0.2s ease;
}

.input-pesquisa:focus {
  border-color: #16a34a;
}

.mensagem-vazio {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #70705b;
  font-family: 'Roboto', sans-serif;
}

.empty-container {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
}

.descricao-titulo{
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(90deg, #b4b494, #70705b);
  background-size: 100% auto;
  color: transparent;
  -webkit-background-clip: text;
  margin-bottom: 1rem;
}

.paragrafo-1, .paragrafo-2, .paragrafo-3{
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-align: left;
  margin-bottom: 0.75rem;
}

.destaque{
  font-weight: 600;
  color: black;
}

@media (min-width: 768px) {
  .projetos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projetos-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1500px) {
  .projetos-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media(max-width: 1024px){
  .input-pesquisa{ 
    max-width: 100%;
  }
}

@media (min-width: 600px) {
  .descricao-titulo {
    font-size: 2.3rem;
  }
  .paragrafo-1, .paragrafo-2, .paragrafo-3 {
    font-size: 1.08rem;
    text-align: justify;
  }
}

@media (min-width: 900px) {
  .descricao-titulo {
    font-size: 2.7rem;
  }
  .paragrafo-1, .paragrafo-2, .paragrafo-3 {
    font-size: 1.13rem;
  }
}

@media (min-width: 1200px) {
  .descricao-titulo {
    font-size: 3rem;
  }
  .paragrafo-1, .paragrafo-2, .paragrafo-3 {
    font-size: 1.18rem;
  }
}

@media (max-width: 1200px) {
  .projetos-container {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

@media (max-width: 900px) {
  .projetos-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (max-width: 600px) {
  .projetos-container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
