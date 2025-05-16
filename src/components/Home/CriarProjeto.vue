<template>
  <section class="cta-container">
    <div class="cta-content">
      <h1 class="cta-title">Transforme sua ideia em ação!</h1>
      <p class="cta-subtitle">
        Acreditamos no poder coletivo para construir um mundo mais sustentável.  
        Crie seu projeto, compartilhe sua causa e receba apoio de pessoas que também querem fazer a diferença.
      </p>
      <router-link to="/cadastroProjeto">
        <button class="cta-button">Comece seu projeto agora</button>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.cta-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: #fff;
  padding: 2rem;
  text-align: center;
}

.cta-content {
  max-width: 700px;
  background: #fdfdf6;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
}

.cta-title {
  font-size: 2.5rem;
  color: #505036;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-subtitle {
  font-size: 1.25rem;
  color: #6b6b50;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-button {
  background-color: #70705b;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #5a5a48;
}
</style>
