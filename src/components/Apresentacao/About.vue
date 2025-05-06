<template>
    <section class="about" ref="about">
      <h2>Sobre Nós</h2>
      <p>
        Somos especialistas em criar experiências digitais memoráveis, com foco em animações suaves e design moderno.
      </p>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  const about = ref(null);
  
  onMounted(() => {
    gsap.from(about.value, {
      scrollTrigger: {
        trigger: about.value,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      x: -400,
      duration: 1,
      stagger: 0.2,
    });
  });
  </script>
  
  <style scoped>
  .about {
    background: white;
    margin: 40px auto;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
  </style>
  