<script setup>
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);
  
  const heroTitulo = ref(null);
  const heroDescricao = ref(null);
  const heroSkip = ref(null);
  
  onMounted(() => {
    gsap.from(heroTitulo.value, {
      opacity: 0,
      x: -300,
      duration: 1.5,
    });

    gsap.from(heroDescricao.value, {
      opacity: 0,
      x: 300,
      duration: 1.5,
    })

    gsap.from(heroSkip.value, {
      opacity: 1,
      y: -200,
      duration: 5,
    })
  });
  </script>

<template>
    <section class="hero">
      <div class="hero-container">
        <a href="home" id="hero-skip" ref="heroSkip">CONTRIBUIR</a>
        <h1 class="hero-titulo" ref="heroTitulo">
            <img src="../../assets/LogoPequenoEnergia.png" class="hero-logo" alt="Logo Financsus">
            FinancSUS
        </h1>
        <div class="hero-descricao-container">
          <h1 class="hero-descricao" ref="heroDescricao">Uma doação para o mundo</h1>
        </div>    
      </div>
    </section>
  </template>
  
  <style>
  @font-face {
    font-family: 'CgAthenaeum';
    src: url(../../../public/fonts/CgAthenaeum.ttf) format('truetype'); 
    font-weight: normal;
    font-style: normal;
  }

  .hero {
    height: 100vh;
    max-height: 1350px;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #f1f1ed;
  }


  .hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    margin-inline: clamp(1rem, 2vw, 2rem);
  }

  .hero-titulo {
    font-family: CgAthenaeum;
    font-size: clamp(4rem, 10vw, 10rem);
    background: linear-gradient(175deg, #b4b494, #70705b);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text; 
    animation: fade 4s ease-in-out infinite; 
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .hero-descricao{
    font-family: CgAthenaeum;
    font-size: clamp(20px, 4vw, 48px);
    background: linear-gradient(175deg, #b4b494, #70705b);
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    animation: fade 4s ease-in-out infinite;
    display: flex;
    justify-content: end;
  }

  .hero-logo {
    height: clamp(3rem, 10vw, 10rem);
    width: auto;
    object-fit: contain;
    margin-right: 1vw;
  }

  #hero-skip {
    justify-self: end;
    align-self: flex-end;
    position: absolute;
    top: 5%;
    right: 5vw;
    text-decoration: none;
    color: #70705b;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    border: 1px solid #70705b;
    padding: 5px 1rem;
    border-radius: 20px;
    font-weight: bold;
    font-size: 1rem
  }

  #hero-skip:hover{
    color: #f1f1ed;
    background-color: #70705b;
  }

  @media (max-width: 500px){
    .hero-titulo{
      font-size: clamp(3rem, 5vw, 5rem)
    }
  }
  </style>
