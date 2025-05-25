<template>
  <section>
  <div class="section Intro">
    <div class="text-card">
      <div class="IntroContent">
        <div class="TitleBox">
          <h1 class="Title-Intro plain-title">Quem Somos Nós?</h1>
        </div>
        <p>
          Somos um grupo de jovens comprometidos com um futuro mais limpo e colaborativo. Acreditamos que ideias sustentáveis merecem sair do papel e ganhar o mundo — e que, com a ajuda de todos, é possível transformar boas intenções em ações concretas. Por isso, criamos o <strong>FinancSUS</strong>, uma plataforma que conecta pessoas com grandes ideias a quem deseja fazer parte de algo maior.
        </p>
      </div>
    </div>
    <div class="image-container">
      <img src="../../assets/img1-saibamais.png" alt="Imagem de Introdução" class="image-placeholder"/>
    </div>
  </div>

  <div class="section WhatIs">
    <div class="text-card">
      <div class="WhatIsContent">
        <div class="TitleBox">
          <h1 class="Title-WhatIs plain-title">O que é o FinancSUS?</h1>
        </div>
        <p>
          O FinancSUS é uma plataforma de crowdfunding voltada para projetos sustentáveis. Aqui, você pode cadastrar sua ideia e torná-la realidade com a ajuda de pessoas que acreditam no seu potencial. O FinancSUS é um espaço colaborativo onde todos podem contribuir para um futuro mais sustentável. Através do financiamento coletivo, buscamos unir forças para transformar sonhos em ações concretas.
        </p>
      </div>
    </div>
    <div class="image-container">
      <img src="../../assets/img2-saibamais.png" alt="Imagem Financiamento" class="image-placeholder"/>
    </div>
  </div>

  <div class="section HowitWorks">
    <div class="text-card">
      <div class="HowitWorksContent">
        <div class="TitleBox">
          <h1 class="Title-HowitWorks plain-title">Como funciona?</h1>
        </div>
        <p>
          Nossa plataforma permite que você cadastre sua ideia de projeto sustentável e a publique para que pessoas interessadas possam apoiá-la financeiramente. O processo é simples: você cria sua conta em nosso site, descreve sua ideia de projeto, define uma quantia como meta de arrecadação, adiciona uma foto que achar relevante e compartilha em suas redes sociais para potencializar a visibilidade. Outras pessoas podem contribuir com qualquer quantia, e quando a meta é alcançada, o projeto é realizado!
        </p>
      </div>
    </div>
    <div class="image-container">
      <img src="../../assets/img3-saibamais.png" alt="Imagem ODS" class="image-placeholder"/>
    </div>
  </div>
  </section>
</template>

<style scoped>
:root {
  --primary: #70705b;
  --primary-light: #a8a892;
  --primary-dark: #4a4a3c;
  --accent: #e4e2d3;
  --background: #edeae3;
  --card-bg: #f5f4e9;
  --text: #333333;
}

@font-face {
  font-family: 'Ancizar Sans';
  src: url(../../../public/AncizarSans-VariableFont_wght-v2.ttf) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'CgAthenaeum';
  src: url(../../../public/fonts/CgAthenaeum.ttf) format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'CgAthenaeum', Arial, sans-serif;
  background-color: var(--background);
  color: var(--text);
  margin: 0;
  padding: 0;
}

.section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 110px 10px;
  width: 100%;
  box-sizing: border-box; 
}

.Intro {
  flex-direction: row;
}
.WhatIs {
  flex-direction: row-reverse;
}
.HowitWorks {
  flex-direction: row;
}

.image-container {
  width: 100%;
  aspect-ratio: 2 / 1;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  display: block;
  max-width: 400px;
  height: auto;
}

.text-card {
  background: var(--card-bg);
  border-radius: 28px;
  box-shadow: 0 8px 32px rgba(113, 112, 91, 0.13);
  padding: 48px 40px;
  flex: 1;
  max-width: 520px;
  border: 1.5px solid var(--accent);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition:
    box-shadow 0.25s cubic-bezier(.4,2,.6,1),
    transform 0.25s cubic-bezier(.4,2,.6,1);
  margin: 32px 0;
  gap: 20px;
}

.text-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 100%;
  background: linear-gradient(to bottom, var(--primary), var(--primary-dark));
  border-radius: 28px 0 0 28px;
}

.image-placeholder {
  width: 100%;
  height: 350px;
  background-color: #ccc;
  border-radius: 30px 10%;
}

.IntroContent,
.WhatIsContent,
.HowitWorksContent {
  text-align: justify;
  padding: 20px 0;
}

.TitleBox {
  background-color: #e4e2d3;
  border-radius: 18px;
  padding: 6px 16px;
  margin: 20px 0 10px;
  display: inline-block;
}

.plain-title {
  font-family: 'Ancizar Sans', sans-serif;
  color: #70705b;
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  font-weight: bold;
  margin: 0;
}

p {
  font-family: 'Ancizar Sans', sans-serif;
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: clamp(1rem, 2vw, 1.18rem);
  color: #70705b;
}

strong {
  color: var(--primary);
}

@media (max-width: 768px) {
  .section {
    flex-direction: column;
    padding: 1.2rem 0.5rem 2.5rem 0.5rem;
    width: 100vw;
    overflow-x: hidden;
    gap: 12px;
    margin-bottom: 0.5rem;
  }

  .WhatIs {
    flex-direction: column;
  }

  .text-card {
    width: 100%;
    max-width: 100%;
    margin: 16px 0 8px 0;
    gap: 12px;
    padding: 28px 16px;
  }

  .image-container {
    max-width: 100%;
    margin-bottom: 8px;
  }

  .image-container img,
  .image-placeholder {
    max-width: 100%;
    aspect-ratio: 2 / 1;
    height: auto;
  }

   .text-card{
    width: 100%;
    max-width: 100%;
   }
}
</style>