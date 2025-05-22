<template>
  <section class="como-funciona">
    <h2 class="titulo">Como Funciona</h2>
    <div class="passos">
      <div class="passo">
        <span class="numero">1.</span>
        <p>
          <strong>Crie</strong> sua campanha com as informações básicas.
        </p>
      </div>
      <div class="passo">
        <span class="numero">2.</span>
        <p>
          <strong>Divulgue</strong> nas redes sociais.
        </p>
      </div>
      <div class="passo">
        <span class="numero">3.</span>
        <p>
          <strong>Receba apoio</strong> via Pix com segurança<br>
          (integração com Mercado Pago).
        </p>
      </div>
      <div class="passo">
        <span class="numero">4.</span>
        <p>
          <strong>Acompanhe</strong> sua arrecadação em tempo real.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@font-face {
  font-family: 'Ancizar Sans';
  src: url(../../../public/fonts/AncizarSans-VariableFont_wght-v2.ttf) format('truetype'); 
  font-weight: normal;
  font-style: normal;
}

.como-funciona {
  background-color: #fff;
  min-height: 50vh;
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.titulo {
  font-family: Ancizar Sans, sans-serif;
  font-size: clamp(3rem, 4vw, 4rem);
  color: #70705b;
  margin-bottom: 3rem;
  font-weight: bold;
}

.passos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.passo {
  font-family: Ancizar Sans, sans-serif;
  background-color: #70705b;
  color: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 250px;
  position: relative;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  text-align: left;
  min-height: 250px;
}

.numero {
  font-size: 3rem;
  font-weight: bold;
  color: #f6e27f;
  display: block;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.4;
}
</style>
