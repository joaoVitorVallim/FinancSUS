<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-left">
          <img src="../../assets/LogoPequenoEnergia.png" alt="FinancSUS Logo" class="footer-logo">
        </div>
        <div class="footer-right">
          <nav class="footer-nav">
            <router-link to="/" class="footer-link">Home</router-link>
            <router-link to="/saibaMais" class="footer-link">Sobre</router-link>
            <router-link to="/projetos" class="footer-link">Projetos</router-link>
            <router-link to="/termos" class="footer-link">Termos de uso</router-link>
          </nav>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-text">© 2025 FinancSUS. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  font-family: Poppins, sans-serif;
  background-color: #70705b;
  padding: clamp(2rem, 4vw, 3rem) 0 clamp(1rem, 2vw, 1.5rem);
  width: 100%;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: clamp(2rem, 4vw, 4rem);
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.footer-left {
  flex: 1;
}

.footer-right {
  flex: 1;
}

.footer-logo {
  height: clamp(3rem, 8vw, 6rem);
  width: auto;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 1vw, 1rem);
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: clamp(0.875rem, 2vw, 1rem);
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 0.8;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: clamp(1rem, 2vw, 1.5rem);
  text-align: center;
}

.footer-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-nav {
    align-items: center;
  }
}
</style>