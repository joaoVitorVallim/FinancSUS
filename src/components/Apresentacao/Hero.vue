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
        <h1 class="hero-titulo"><img src="../../assets/LogoPequenoEnergia.png" alt="">FinancSUS</h1>
    </section>
  </template>
  
  <style>
  @font-face {
    font-family: 'CgAthenaeum';
    src: url(../../assets/CgAthenaeum.ttf) format('truetype'); 
    font-weight: normal;
    font-style: normal;
  }

  .hero-titulo{
    font-family: CgAthenaeum;
    font-size: 5rem;
    background: linear-gradient(90deg, #b4b494, #70705b);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text; 
    animation: fade 4s ease-in-out infinite; 
  }
  </style>
  