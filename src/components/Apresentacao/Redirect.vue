<template>
    <section class="redirect">
      <div class="redirect-container" ref="redirectContainer">
        <h1 class="redirect-titulo">Deseja contribuir com o mundo?</h1>
        <a href="home" class="redirect-anchor">CONTRIBUIR</a>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  const redirectContainer = ref(null);
  
  onMounted(() => {
    gsap.from(redirectContainer.value, {
      scrollTrigger: {
        trigger: redirectContainer.value,
        start: 'top 90%',
      },
      opacity: 0,
      y: 100,
      duration: 1,
    });
  });
  </script>
  
  <style scoped>
    .redirect{
      display: flex;
      justify-content: center;
      background-color: #f1f1ed; 
      align-items: start;
      text-align: center;
      min-height: 40vh;
    }

    .redirect-titulo{
      font-size: clamp(1.5rem, 3vw, 5rem);
      font-family: CgAthenaeum;
      margin-bottom: 5rem;
      margin-top: 1.5rem;
      background: linear-gradient(90deg, #b4b494, #70705b);
      background-size: 100% auto;
      color: transparent;
      -webkit-background-clip: text; 
      
    }

    .redirect-anchor{
      font-size: clamp(1.5rem, 2.5vw, 5rem);
      font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-weight: 300;
      background: linear-gradient(90deg, #b4b494, #70705b);
      background-size: 100% auto;
      color: transparent;
      -webkit-background-clip: text;
      border: 1px solid #70705b;
      border-radius: 20px;
      padding-inline: clamp(2rem, 20vw, 10rem);
      padding-block: .8rem;
      margin-top: 2rem;
    }

    .redirect-anchor:hover{
      color: #f1f1ed;
      background: #70705b;
    }
  </style>
  