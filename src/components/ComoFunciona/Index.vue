<template>
  <section>
  <div class="section Intro">
    <div class="text-card">
      <div class="IntroContent">
        <div class="TitleBox">
          <h1 class="Title-Intro plain-title">Quem Somos Nós?</h1>
        </div>
        <p>
          Somos um grupo de jovens comprometidos com um futuro mais justo, verde e colaborativo. Acreditamos que ideias sustentáveis merecem sair do papel e ganhar o mundo — e que, com a ajuda de todos, é possível transformar boas intenções em ações concretas. Por isso, criamos o <strong>FinancSus</strong>, uma plataforma que conecta pessoas com grandes ideias a quem deseja fazer parte de algo maior.
        </p>
      </div>
    </div>
    <div class="image-container">
      <div class="image-placeholder"></div>
    </div>
  </div>

  <div class="section WhatIs">
    <div class="text-card">
      <div class="WhatIsContent">
        <div class="TitleBox">
          <h1 class="Title-WhatIs plain-title">O que é o FinancSus?</h1>
        </div>
        <p>
          O FinancSus é uma plataforma de vaquinhas online dedicada exclusivamente a projetos de desenvolvimento sustentável. Aqui, qualquer pessoa ou grupo com uma iniciativa sustentável — seja ela ambiental, social ou econômica — pode cadastrar seu projeto, contar sua história e buscar apoio financeiro para tirá-lo do papel. Ao mesmo tempo, qualquer pessoa interessada em apoiar boas causas pode contribuir de forma simples, segura e transparente. O FinancSus não é apenas uma plataforma de vaquinha online. É uma ponte entre quem tem uma boa ideia e quem quer fazer parte da mudança. Com tecnologia, propósito e engajamento social, damos vida a projetos que contribuem para um mundo mais justo, equilibrado e sustentável.
        </p>
      </div>
    </div>
    <div class="image-container">
      <div class="image-placeholder"></div>
    </div>
  </div>

  <div class="section HowitWorks">
    <div class="text-card">
      <div class="HowitWorksContent">
        <div class="TitleBox">
          <h1 class="Title-HowitWorks plain-title">Como funciona?</h1>
        </div>
        <p>
          Para participar ativamente da plataforma, o usuário deve se cadastrar como proponente ou como investidor. O proponente é quem deseja cadastrar um projeto sustentável. Após o cadastro, ele poderá inserir detalhes sobre sua iniciativa, selecionar os ODS relacionados, definir metas financeiras, prazos e possíveis recompensas aos apoiadores. O sistema oferece uma área administrativa completa, permitindo que o proponente acompanhe as doações, publique atualizações e veja quem doou.
        </p>
      </div>
    </div>
    <div class="image-container">
      <div class="image-placeholder"></div>
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
  padding: 110px 10%;
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
  flex: 1;
  min-width: 300px;
  max-width: 400px;
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
    padding: 60px 5%;
    gap: 40px;
  }

  .WhatIs {
    flex-direction: column;
  }

  .image-container,
  .text-card {
    width: 100%;
    max-width: 100%;
  }

  
  .Intro .text-card,
  .Intro .image-container,
  .WhatIs .text-card,
  .WhatIs .image-container,
  .HowitWorks .text-card,
  .HowitWorks .image-container {
    order: unset;
  }
}
</style>