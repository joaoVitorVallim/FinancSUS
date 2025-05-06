<script setup>
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  const hero = ref(null);
  
  onMounted(() => {
    gsap.from(hero.value, {
      opacity: 0,
      y: -300,
      duration: 1,
    });
  });
  </script>

<template>
    <section class="hero" ref="hero">
      <div class="hero-container">
        <div class="hero-titulo-container">
          <h1 class="hero-titulo"><img src="../../assets/LogoPequenoEnergia.png" class="hero-logo" alt="Logo Financsus">FinancSUS</h1>
        </div>
        <div class="hero-descricao-container">
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
    margin-left: 8rem;
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
  }

  .hero-descricao-container{
    display: flex;
    justify-content: center;
    width: 80%;
    margin-top: 0;
  }

  .hero-logo{
    max-width: 200px;
  }
  </style>
  