<template>
    <section class="about">
      <div class="about-container">
        <h1 class="about-titulo">Energia limpa, financiada por todos.</h1>
        <div class="about-descricao-container">
          <h1 class="about-descricao">Uma plataforma de crowdfunding sustentável que conecta pessoas a projetos de energia limpa.
Incentive ideias inovadoras, fortaleça a consciência ambiental e ajude a construir um futuro mais verde — um projeto por vez.</h1>
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
    @font-face {
      font-family: 'CgAthenaeum';
      src: url(../../assets/CgAthenaeum.ttf) format('truetype'); 
      font-weight: normal;
      font-style: normal;
    }

    .about{
      height: 100vh;
      display: flex;
      justify-content: start;
      align-items: center;
      background-color: #f1f1ed;
      flex-direction: column;
    }

    .about-titulo{
      font-family: CgAthenaeum;
      font-size: clamp(3rem, 5vw, 10rem);
      background: linear-gradient(175deg, #b4b494, #70705b);
      background-size: 200% auto;
      color: transparent;
      -webkit-background-clip: text; 
      animation: fade 4s ease-in-out infinite; 
      margin: 0;
      display: flex;
      align-items: center;
      display: flex;
      justify-content: center;
    }
  </style>
  