<template>
    <section class="services" ref="services">
      <h2>Serviços</h2>
      <ul>
        <li>Design Web</li>
        <li>Desenvolvimento Frontend</li>
        <li>Performance e Acessibilidade</li>
      </ul>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  const services = ref(null);
  
  onMounted(() => {
    gsap.from(services.value, {
      scrollTrigger: {
        trigger: services.value,
        start: 'top 80%',
      },
      opacity: 0,
      x: 300,
      duration: 1,
    });
  });
  </script>
  
  <style scoped>
  .services {
    background: white;
    margin: 40px auto;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
  </style>
  