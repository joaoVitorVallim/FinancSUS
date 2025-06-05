<template>
  <nav class="mobile-componente-navbar">
    <div class="mobile-componente-navbar-header">
      <a href="/home"><img src="../../../assets/LogoPequenoEnergia.png" alt="Logo" class="mobile-navbar-logo"></a>
      <button class="mobile-menu-hamburguer" @click="toggleMenu">☰</button>
    </div>
    <Transition name="slide-fade">
      <section class="mobile-componente-navbar-section" v-if="menuAberto">
        <a class="mobile-navbar-botoes" href="/saibamais">Saiba Mais</a>
        <a class="mobile-navbar-botoes" href="/projetos">Projetos</a>
        <a id="mobile-cadastre-projeto" class="mobile-navbar-botoes" @click="goToCadastroProjeto()">Cadastre seu projeto!</a>

        <div v-if="user" class="mobile-dropdown-container">
          <div class="mobile-componente-navbar-cadastro-a" @click="showDropdown = !showDropdown">
            <img src="../../../assets/user.png" width="30px" /> Olá, {{ user.name }}
          </div>
          <div v-if="showDropdown" class="mobile-dropdown-menu">
            <button @click="logout">Deslogar</button>
          </div>
        </div>

        <div v-else>
          <a class="mobile-componente-navbar-cadastro-a" href="/register">
            <img src="../../../assets/user.png" width="30px" /> Cadastrar-se
          </a>
        </div>
      </section>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const menuAberto = ref(false);
const showDropdown = ref(false);
const user = ref(null);
const token = ref(null);
const router = useRouter();

onMounted(() => {
  const storedUser = localStorage.getItem('name');
  if (storedUser) {
    user.value = { name: storedUser };
  }
  token.value = localStorage.getItem('token');
});

function toggleMenu() {
  menuAberto.value = !menuAberto.value;
}

const logout = () => {
  localStorage.clear();
  router.push('/login');
};

const goToCadastroProjeto = () => {
  if (token.value) {
    router.push('/cadastro-projeto');
  } else {
    router.push('/login');
  }
};
</script>

<style>
.mobile-componente-navbar {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.mobile-componente-navbar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  padding-block: .1rem;
  background-color: #edeae3;
}

.mobile-navbar-logo {
  width: 100px;
  filter: brightness(0.8);
}

.mobile-menu-hamburguer {
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #74745b;
  filter: brightness(0.8);
}

.mobile-componente-navbar-section {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding: 1rem;
  background-color: #edeae3;
}

.mobile-navbar-botoes {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #70705b;
  text-transform: uppercase;
}

.mobile-componente-navbar-cadastro-a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #70705b;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: .3rem;
  cursor: pointer;
}

#mobile-cadastre-projeto {
  border: 2px solid #70705b;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
}

/* Dropdown */
.mobile-dropdown-container {
  position: relative;
}

.mobile-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #70705b;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-dropdown-menu button {
  background: none;
  border: none;
  font-family: 'Poppins', sans-serif;
  color: #70705b;
  font-size: 1rem;
  cursor: pointer;
  text-align: left;
}

.mobile-dropdown-menu button:hover {
  text-decoration: underline;
}

/* Transição */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}

.slide-fade-enter-from {
  transform: translateX(-100%);
}

.slide-fade-enter-to {
  transform: translateX(0);
}

.slide-fade-leave-from {
  transform: translateX(0);
}

.slide-fade-leave-to {
  transform: translateX(-100%);
}
</style>
