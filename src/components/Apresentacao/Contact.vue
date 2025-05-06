<template>
    <section class="contact" ref="contact">
      <h2>Contato</h2>
      <p>Entre em contato conosco para iniciar seu projeto!</p>
      <button>Fale Conosco</button>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  const contact = ref(null);
  
  onMounted(() => {
    gsap.from(contact.value, {
      scrollTrigger: {
        trigger: contact.value,
        start: 'top 80%',
      },
      opacity: 0,
      y: 100,
      duration: 1,
    });
  });
  </script>
  
  <style scoped>
  .contact {
    background: white;
    margin: 40px auto;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
  button {
    padding: 10px 30px;
    font-size: 1rem;
    background-color: #1e1e2f;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: #333;
  }
  </style>
  