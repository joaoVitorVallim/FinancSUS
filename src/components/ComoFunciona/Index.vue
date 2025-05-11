<script setup>
</script>

<template>
  <div class="section Intro">
    <div class="image-placeholder"></div>
    <div class="IntroContent">
      <h1 class="Title-Intro">Quem Somos Nós?</h1>
      <p>
        Somos um grupo de jovens comprometidos com um futuro mais justo, verde e colaborativo. Acreditamos que ideias sustentáveis merecem sair do papel e ganhar o mundo — e que, com a ajuda de todos, é possível transformar boas intenções em ações concretas. Por isso, criamos o <strong>FinancSus</strong>, uma plataforma que conecta pessoas com grandes ideias a quem deseja fazer parte de algo maior.
      </p>
    </div>
  </div>

  <div class="section WhatIs reverse">
    <div class="image-placeholder"></div>
    <div class="WhatIsContent">
      <h1 class="Title-WhatIs">O que é o FinancSus?</h1>
      <p>
        O FinancSus é uma plataforma de vaquinhas online dedicada exclusivamente a projetos de desenvolvimento sustentável. Aqui, qualquer pessoa ou grupo com uma iniciativa sustentável — seja ela ambiental, social ou econômica — pode cadastrar seu projeto, contar sua história e buscar apoio financeiro para tirá-lo do papel. Ao mesmo tempo, qualquer pessoa interessada em apoiar boas causas pode contribuir de forma simples, segura e transparente. O FinancSus não é apenas uma plataforma de vaquinha online. É uma ponte entre quem tem uma boa ideia e quem quer fazer parte da mudança. Com tecnologia, propósito e engajamento social, damos vida a projetos que contribuem para um mundo mais justo, equilibrado e sustentável.
      </p>
    </div>
  </div>

  <div class="section HowitWorks">
    <div class="image-placeholder"></div>
    <div class="HowitWorksContent">
      <h1 class="Title-HowitWorks">Como funciona?</h1>
      <p>
        Para participar ativamente da plataforma, o usuário deve se cadastrar como proponente ou como investidor. O proponente é quem deseja cadastrar um projeto sustentável. Após o cadastro, ele poderá inserir detalhes sobre sua iniciativa, selecionar os ODS relacionados, definir metas financeiras, prazos e possíveis recompensas aos apoiadores. O sistema oferece uma área administrativa completa, permitindo que o proponente acompanhe as doações, publique atualizações e veja quem doou.
      </p>

      <p>
        Os investidores, por sua vez, podem explorar os projetos disponíveis e realizar doações de forma segura, com integração à plataforma MercadoPago de pagamento. A cada doação realizada, o sistema gera créditos sustentáveis para o usuário, como forma de incentivo. Projetos que atuam em ODS mais críticos ou urgentes geram mais créditos, estimulando o apoio às causas que mais precisam naquele momento.
      </p>

      <p>
        Dentro da plataforma, cada usuário conta com um painel personalizado. Nele, é possível visualizar um histórico completo de doações e monitorar seus créditos acumulados. O painel do usuário que está criando a vaquinha pode acompanhar o quanto falta ou o quanto já foi de dinheiro recebido.
      </p>

      <p>
        Além disso, o FinancSus conta com um sistema de cupons e recompensas. Os créditos acumulados podem ser convertidos em benefícios, promovendo recompensas dentro da plataforma como cupons de desconto para uso em sites parceiros, promovendo a circulação da economia sustentável.
      </p>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #edeae3;
  color: #333;
  margin: 0;
  padding: 0;
}

.section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 40px 5%;
  flex-wrap: wrap;
}

.reverse {
  flex-direction: row-reverse;
}

.image-placeholder {
  margin-top: 50px;
  width: 40%;
  height: 250px;
  background-color: #ccc;
  border-radius: 12px;
}

.IntroContent {
  max-width: 600px;
  text-align: justify;
  padding: 10px;
}

.WhatIsContent {
  max-width: 500px;
  text-align: justify;
  padding: 10px;
}

.HowitWorksContent {
  max-width: 600px;
  text-align: justify;
  padding: 10px;
}

.Title-Intro,
.Title-WhatIs,
.Title-HowitWorks {
  color: #3e7f98;
  background-color: #edeae3;
  padding: 10px 20px;
  border-radius: 8px;
  margin: 30px 0 10px;
}

p {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 768px) {
  .section {
    flex-direction: column;
  }

  .image-placeholder,
  .IntroContent,
  .WhatIsContent,
  .HowitWorksContent {
    width: 100%;
    text-align: justify;
  }
}
</style>