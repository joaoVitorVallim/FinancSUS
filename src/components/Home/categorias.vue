<template>
  <section class="categorias">
    <h2 class="categorias-titulo">Categorias de Projetos</h2>
    <div class="categorias-cards">
      <div class="card">
        <span class="emoji">💡</span>
        <h3>Energia Limpa</h3>
        <p>Projetos voltados à geração de energia sustentável e renovável.</p>
      </div>
      <div class="card">
        <span class="emoji">🏘️</span>
        <h3>Projetos Comunitários</h3>
        <p>Iniciativas que beneficiam comunidades inteiras com soluções energéticas.</p>
      </div>
      <div class="card">
        <span class="emoji">🏡</span>
        <h3>Projetos Residenciais</h3>
        <p>Projetos para residências individuais que buscam autossuficiência energética.</p>
      </div>
    </div>
    <RouterLink to="/projetos" class="botao-projetos">
      Ver todos os projetos
    </RouterLink>
  </section>
</template>

<style scoped>
.categorias {
  background-color: #f1f1ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  max-height: 100vh;
  padding-inline: 2rem;
  padding-block: 4rem;
  gap: 2rem;
  text-align: center;
}

.categorias-titulo {
  font-size: clamp(3rem, 4vw, 4rem);
  color: #70705b;
  margin-bottom: 2rem;
}

.categorias-cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
}

.card {
  background-color: #ffffff;
  border: 1px solid #dcdcd2;
  border-radius: 12px;
  padding: 2rem;
  width: 260px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.card .emoji {
  font-size: 2rem;
}

.card h3 {
  margin-top: 1rem;
  color: #70705b;
  font-size: 1.5rem;
}

.card p {
  font-size: 1rem;
  color: #70705b;
}

.botao-projetos {
  margin-top: 2rem;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #70705b;
  border-radius: 20px;
  text-decoration: none;
  color: #70705b;
  padding: 0.6rem 2rem;
  transition: 0.3s;
}

.botao-projetos:hover {
  background-color: #70705b;
  color: #fff;
}
</style>
