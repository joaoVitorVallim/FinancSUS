<script setup>
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  const heroTitulo = ref(null);
  const heroDescricao = ref(null);
  
  onMounted(() => {
    gsap.from(heroTitulo.value, {
      opacity: 0,
      x: -300,
      duration: 1,
    });

    gsap.from(heroDescricao.value,{
      opacity: 0,
      x: 300,
      duration: 1,
    });
  });
  </script>

<template>
    <section class="hero">
      <div class="hero-container">
        <div class="hero-titulo-container" ref="heroTitulo">
          <h1 class="hero-titulo"><img src="../../assets/LogoPequenoEnergia.png" class="hero-logo" alt="Logo Financsus">FinancSUS</h1>
        </div>
        <div class="hero-descricao-container" ref="heroDescricao">
          <h1>Uma doação para o mundo</h1>
        </div>
      </div>
    </section>
  </template>
  
  <style>
  @font-face {
    font-family: 'CgAthenaeum';
    src: url(../../assets/CgAthenaeum.ttf) format('truetype'); 
    font-weight: normal;
    font-style: normal;
  }

  .hero{
    height: 100vh;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #f1f1ed;
  }

  .hero-titulo-container{
    display: flex;
    justify-content: start;
  }

  .hero-titulo{
    font-family: CgAthenaeum;
    font-size: 10rem;
    background: linear-gradient(175deg, #b4b494, #70705b);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text; 
    animation: fade 4s ease-in-out infinite; 
    margin: 0;
    display: flex;
    margin-left: 8rem;
  }

  .hero-descricao-container{
    display: flex;
    justify-content: center;
    width: 95%;
    margin-top: 0;
    background: linear-gradient(300deg, #b4b494, #70705b);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text; 
    
  }

  .hero-logo{
    max-width: 200px;
  }
  </style>
  