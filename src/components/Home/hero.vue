<template>
  <section class="hero">
    <div class="hero-section">
      <div class="hero-logo">
        <img src="@/assets/LogoPequenoEnergia.png" alt="FinancSUS Logo" />
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Bem-vindo ao</h1>
        <h1 class="hero-titulo-logo">FinancSUS</h1>
        <p class="hero-desc">
          Plataforma de financiamento coletivo para projetos de energia sustentável.<br>
          Transforme ideias em impacto real!
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@font-face {
    font-family: 'CgAthenaeum';
    src: url(../../assets/CgAthenaeum.ttf) format('truetype'); 
    font-weight: normal;
    font-style: normal;
  }

@font-face {
    font-family: 'Ancizar Sans';
    src: url(../../assets/AncizarSans.ttf) format('truetype'); 
    font-weight: normal;
    font-style: normal;
  }

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  min-height: 60vh;
  max-height: 100vh;
  padding-inline: 2rem;
  gap: 3rem;
}

.hero-section{
  display: flex;
}

.hero-logo img {
  max-width: 230px;
  width: 100%;
  height: auto;
  display: block;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
}

.hero-title {
  font-family: Ancizar Sans, sans-serif;
  font-size: clamp(2rem, 3vw, 3.5rem);
  color: #b4b494;
  font-weight: bold;
  margin: 0;
}

.hero-titulo-logo{
  font-family: CgAthenaeum;
  font-size: clamp(3rem, 10vw, 10rem);
  background: linear-gradient(90deg, #b4b494, #70705b);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text; 
  margin: 0;
}

.hero-desc {
  font-family: Ancizar Sans, sans-serif;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: #70705b;
  line-height: 1.5;
  margin-top: 0;
}


@media (max-width: 800px) {
  .hero {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2rem 1rem;
  }
  .hero-content {
    align-items: center;
  }
}
</style>