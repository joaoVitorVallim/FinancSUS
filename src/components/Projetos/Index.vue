<template>
  <div class="projetos-container">
    <div class="projetos-grid">
      <div v-for="projeto in projetosVisiveis" :key="projeto.id" class="projeto-card">
        <img :src="projeto.imagem" alt="Imagem do Projeto" class="projeto-imagem"/>
        <h2 class="projeto-titulo">{{ projeto.titulo }}</h2>
        <p class="projeto-descricao">{{ projeto.descricao }}</p>
        <p class="projeto-valor">
        <span class="valor-arrecadado">R$ {{ projeto.valorArrecadado.toFixed(2) }}</span>
        de
        <span class="valor-meta">R$ {{ projeto.metaArrecadacao.toFixed(2) }}</span>
        </p>
        <div class="progresso-container">
            <div class="progresso-barra" :style="{ width: `${(projeto.valorArrecadado / projeto.metaArrecadacao) * 100}%` }"></div>
        </div>
        <p class="progresso-texto">
            {{ ((projeto.valorArrecadado / projeto.metaArrecadacao) * 100).toFixed(1) }}% arrecadado
        </p>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projetos = ref([])
const projetosVisiveis = ref([])

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
      metaArrecadacao: 20000,
    }))
  }

  projetosVisiveis.value = projetos.value.slice(0, 12)
})
</script>

<style scoped>
.projetos-container {
  padding: 7rem 10rem 2rem 10rem;
  background-color: #ffffff;
}

.projetos-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .projetos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projetos-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.projeto-card {
  background-color: #f7f7f5;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.projeto-card:hover {
  transform: translateY(-4px);
}

.projeto-imagem {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
}

.projeto-titulo {
  font-size: 1.2rem;
  font-family: 'Arial', sans-serif;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #70705b;
}

.projeto-descricao {
  color: #6b7280;
  font-family: 'Arial', sans-serif;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.valor-arrecadado {
  color: #16a34a;
  font-weight: 600;
  font-family: 'Arial', sans-serif;
}

.valor-meta {
  color: #464646;
  font-weight: 600;
  font-family: 'Arial', sans-serif;
}

.progresso-container {
  width: 100%;
  height: 10px;
  background-color: #f7f7f5;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 0.5rem;
}

.progresso-barra {
  height: 100%;
  background-color: #16a34a;
  transition: width 0.3s ease;
}

.progresso-texto {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.25rem;
  text-align: right;
}
</style>
