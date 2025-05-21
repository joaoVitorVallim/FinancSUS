<template>
  <section class="project-details">
    <!-- ADICIONAR V-IF COM LOADING E ERROR AQUI -->

    <div   class="project-details-container"> <!--NÃO ESQUECER DE ADICIONAR V-ELSE AQUI-->
      <div class="project-header">
        <h1 class="project-title">{{ project.title }}</h1>
        <RouterLink to="/projetos" class="close-button">&times;</RouterLink>
      </div>

      <div class="project-content">
        <div class="project-image">
          <img :src="project.image" :alt="project.title">
        </div>

        <div class="project-info">
          <div class="project-progress">
            <div class="progress-stats">
              <div class="progress-amount">
                <h3>Arrecadado</h3>
                <p>R$ {{ project.received }}</p>
              </div>
              <div class="progress-goal">
                <h3>Meta</h3>
                <p>R$ {{ project.goal }}</p>
              </div>
            </div>
            
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
            </div>
            <p class="progress-percentage">{{ progressPercentage }}% completo</p>
          </div>

          <div class="project-description">
            <h2>Sobre o Projeto</h2>
            <p>{{ project.description }}</p>
          </div>

          <RouterLink to="/doar" class="donate-button">FAZER DOAÇÃO</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
//import axios from 'axios'

const route = useRoute()
const project = ref({
  title: 'Lorem Ipsum',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  image: '',
  goal: 100000,
  received: 20000
})
const loading = ref(true)
const error = ref(null)

const progressPercentage = computed(() => {
  return Math.round((project.value.received / project.value.goal) * 100)
})

/*const fetchProjectDetails = async () => {
  try {
    loading.value = true
    const response = await axios.get()//ADICIONAR A URL DO BACKEND AQUI CARALHO
    project.value = response.data
  } catch (err) {
    error.value = 'Erro ao carregar detalhes do projeto'
    console.error('Erro:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchProjectDetails()
})*/
</script>

<style scoped>
@font-face {
    font-family: 'Ancizar Sans';
    src: url(../../assets/AncizarSans.ttf) format('truetype'); 
    font-weight: normal;
    font-style: normal;
  }

.project-details {
  min-height: 100vh;
  background-color: #f1f1ed;
  padding: clamp(2rem, 4vw, 4rem);
}

.project-details-container {
  font-family: Ancizar Sans, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  padding: clamp(1.5rem, 3vw, 3rem);
  padding-block: clamp(1rem, 2vw, 2rem);
}

.project-header {
  position: relative;
  margin-bottom: 2rem;
}

.project-title {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: #70705b;
  margin-top: 0;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  color: #70705b;
  text-decoration: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-button:hover {
  background-color: #70705b;
  color: white;
}

.project-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);
}

.project-image img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.project-progress {
  background: #f8f8f8;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.progress-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.progress-amount, .progress-goal {
  text-align: center;
}

.progress-amount h3, .progress-goal h3 {
  color: #70705b;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.progress-amount p, .progress-goal p {
  font-size: 1.2rem;
  font-weight: bold;
  color: #70705b;
}

.progress-bar {
  height: 8px;
  background: #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: #70705b;
  transition: width 0.3s ease;
}

.progress-percentage {
  text-align: center;
  color: #70705b;
}

.project-description {
  margin-bottom: 2rem;
}

.project-description h2 {
  color: #70705b;
  margin-bottom: 1rem;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
}

.donate-button {
  display: inline-block;
  background: #70705b;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: bold;
  text-align: center;
  transition: opacity 0.3s ease;
}

.donate-button:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .project-content {
    grid-template-columns: 1fr;
  }
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: #70705b;
  font-size: 1.2rem;
}

.error {
  color: #dc3545;
}
</style>