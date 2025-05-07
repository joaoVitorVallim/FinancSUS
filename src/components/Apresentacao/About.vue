<template>
    <section class="about">
      <div class="about-container">
        <h1 class="about-titulo">FinanSUS: energia limpa, financiada por todos.</h1>
        <div class="about-descricao-container">
          <h1 class="about-descricao">Uma plataforma de crowdfunding sustável que conecta pessoas a projetos de energia limpa. Incentive ideias inovadoras, fortaleça a consicência ambiental e ajude a construir r</h1>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  const about = ref(null);
  
  </script>
  
  <style scoped>

  </style>
  