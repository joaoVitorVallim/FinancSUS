<template>
    <section class="about">
      <div class="about-container">
        <h1 class="about-titulo" ref="aboutTitulo">Energia limpa, financiada por todos!</h1>
        <div class="about-descricao-container">
          <h1 class="about-descricao" id="descricao-1" ref="aboutDescricao1">Uma plataforma de crowdfunding sustentável que conecta pessoas a projetos de energia limpa.</h1>
          <h1 class="about-descricao" id="descricao-2" ref="aboutDescricao2">Incentive ideias inovadoras, fortaleça a consciência ambiental e ajude a construir um futuro mais verde — um projeto por vez.</h1>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  
  gsap.registerPlugin(ScrollTrigger);

  const aboutTitulo = ref(null);
  const aboutDescricao1 = ref(null);
  const aboutDescricao2 = ref(null);

  onMounted(() => {
    gsap.from(aboutTitulo.value, {
      scrollTrigger: {
        trigger: aboutTitulo.value,
        start: 'top 100%',
      },
      opacity: 0,
      y: 200,
      duration: 1,
    });

    gsap.from(aboutDescricao1.value, {
      scrollTrigger: {
        trigger: aboutTitulo.value,
        start: 'top 80%',
      },
      opacity: 0,
      x: -200,
      duration: 1,
    });

    gsap.from(aboutDescricao2.value, {
      scrollTrigger: {
        trigger: aboutTitulo.value,
        start: 'top 40%',
      },
      opacity: 0,
      x: 200,
      duration: 1,
    });
  });
  
  </script>
  
  <style scoped>
    @font-face {
      font-family: 'CgAthenaeum';
      src: url(../../assets/CgAthenaeum.ttf) format('truetype'); 
      font-weight: normal;
      font-style: normal;
    }

    @keyframes fade {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

    .about{
      height: 100vh;
      max-height: 70vh;
      display: flex;
      justify-content: start;
      align-items: center;
      background-color: #f1f1ed;
      flex-direction: column;
    }

    .about-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .about-titulo{
      font-family: CgAthenaeum;
      font-size: clamp(1rem, 4vw, 10rem);
      background: linear-gradient(90deg, #b4b494, #70705b);
      background-size: 100% auto;
      color: transparent;
      -webkit-background-clip: text; 
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5vw;
    }

    .about-descricao-container{
      display: grid;
      grid-template-columns: repeat(4, auto);
      grid-template-rows: repeat(2, auto);
      row-gap: 5vw;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    #descricao-1{
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      font-family: CgAthenaeum;
      font-size: clamp(1rem, 2.5vw, 3rem);
      background: linear-gradient(110deg, #b4b494, #70705b);
      background-size: 100% auto;
      color: transparent;
      -webkit-background-clip: text; 
      text-align: center;
      max-width: 500px;
    }

    #descricao-2{
      grid-column: 4 / 5;
      grid-row: 2 / 3;
      font-family: CgAthenaeum;
      font-size: clamp(1rem, 2.5vw, 3rem);
       background: linear-gradient(320deg, #b4b494, #70705b);
      background-size: 100% auto;
      color: transparent;
      -webkit-background-clip: text; 
      text-align: center;
      max-width: 500px;
    }

  </style>
  