<template>
    <section class="project">
      <div class="project-container">
        <h1 class="project-titulo" ref="projectsTitulo">Exemplos de projetos</h1>
        
        <div class="carousel" ref="carousel">
          <button class="carousel-button prev" @click="prev">&lt;</button>
          
          <div class="carousel-container">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div class="carousel-slide">
                <h1 class="tituloProjetos">Energia Solar</h1>
                <p class="descricaoProjetos">Energia solar é uma alternativa 100% sustentável que transforma luz em potência limpa, reduz custos a longo prazo, valoriza imóveis e protege o planeta. É tecnologia, economia e consciência em um só investimento.</p>
              </div>
              <div class="carousel-slide">
                <h1 class="tituloProjetos">Energia Eólica Residencial</h1>
                <p class="descricaoProjetos">Energia eólica residencial aproveita a força dos ventos com turbinas compactas, gerando eletricidade limpa para propriedades urbanas ou rurais. É independência energética com zero emissão e alta eficiência.</p>
              </div>
              <div class="carousel-slide">
                <h1 class="tituloProjetos">Hidrelétrica Residencial</h1>
                <p class="descricaoProjetos">Pequenas hidrelétricas domésticas transformam o fluxo constante da água em energia renovável, confiável e silenciosa. Ideal para regiões com acesso hídrico, alia sustentabilidade e autonomia.</p>
              </div>
              <div class="carousel-slide">
                <h1 class="tituloProjetos">Energia por Biogás</h1>
                <p class="descricaoProjetos">A energia por biogás converte resíduos orgânicos em eletricidade e gás limpo, reduzindo lixo e cortando custos. É uma solução ecológica que une reaproveitamento e geração energética no dia a dia.</p>
              </div>
            </div>
          </div>

          <button class="carousel-button next" @click="next">&gt;</button>
        </div>

        <div class="carousel-dots" ref="dots">
          <button 
            v-for="(_, index) in 4" 
            :key="index"
            class="dot"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const currentSlide = ref(0);
const carousel = ref(null);
const projectsTitulo = ref(null);
const dots = ref(null);


const next = () => {
  currentSlide.value = (currentSlide.value + 1) % 4;
};

const prev = () => {
  currentSlide.value = (currentSlide.value - 1 + 5) % 4;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

onMounted(() => {
  gsap.from(projectsTitulo.value, {
    scrollTrigger: {
      trigger: projectsTitulo.value,
      start: 'top 90%',
    },
    opacity: 0,
    y: 100,
    duration: 1,
  });
  gsap.from(carousel.value, {
    scrollTrigger: {
      trigger: carousel.value,
      start: 'top 80%',
    },
    opacity: 0,
    x: 100,
    duration: 1,
  });
  gsap.from(dots.value, {
    scrollTrigger: {
      trigger: carousel.value,
      start: 'top 80%',
    },
    opacity: 0,
    x: 100,
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

 .project{
    max-height: 1500px;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1ed;
 }

 .project-container{
  margin-inline: 2vw;
 }

 .project-titulo{
    font-family: CgAthenaeum;
    font-size: clamp(2.5rem, 4vw, 10rem);
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

 .carousel{
  position: relative;
  width: fit-content;
  max-width: 1200px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #f1f1ed;
  border: 1px solid #bebeb9;
  border-radius: 15px;
  padding: clamp(1rem, 3vw, 2rem);
  box-shadow: 0 15px 20px grey;
 }

 .carousel-container{
  overflow: hidden;
  width: 100%;
 }

 .carousel-track{
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
 }

 .carousel-slide{
  flex: 0 0 100%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
 }

 .carousel-button{
  background: rgba(255,255,255, 0.2);
  border: none;
  border-radius: 50%;
  width: clamp(2rem, 4vw, 3rem);
  height: clamp(2rem, 4vw, 3rem);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: #70705b;
  backdrop-filter: blur(10px);
 }

 .carousel-dots{
  display: flex;
  justify-content: center;
  gap: 0.5;
  margin-top: 1rem;
  gap: 5px;
 }

 .dot{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgb(49, 48, 48);
  cursor: pointer;
 }

 .dot.active{
  background: #70705b;
 }
 
 .tituloProjetos{
  font-size: clamp(2rem, 3vw, 5rem);
  font-family: CgAthenaeum;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  background: linear-gradient(90deg, #b4b494, #70705b);
  background-size: 100% auto;
  color: transparent;
  -webkit-background-clip: text; 
 }

 .descricaoProjetos{
  font-size: clamp(0.9rem, 2vw, 2rem);
  line-height: 1.5;
 }

 @media(max-width: 1270px){
  .carousel{
    max-width: 80vw;;
  }
 }

 @media(max-width: 340px){
  .project-titulo{
    font-size: 2rem;
  }
 }

</style>
