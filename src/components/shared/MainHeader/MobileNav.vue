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
            <a id="mobile-cadastre-projeto" class="mobile-navbar-botoes" href="/cadastroProjeto">Cadastre seu projeto!</a>
            <a class="mobile-componente-navbar-cadastro-a" href="/register">

            <section v-if="user">
                <span class="componente-navbar-cadastro-a">
                    <img src="../../../assets/user.png" width="30px" @click="logout" /> Olá, {{ user.name }}
                </span>
                </section>
                <section v-else>
                <a class="componente-navbar-cadastro-a" href="/register">
                    <img src="../../../assets/user.png" width="30px" /> Cadastrar-se
                </a>
            </section>

            </a>
        </section>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const menuAberto = ref(false);

const user = ref(null);
const storedUser = localStorage.getItem('name');
if (storedUser) {
  user.value = { name: storedUser };
}

function toggleMenu() {
  menuAberto.value = !menuAberto.value;
}

const logout = () => {
  localStorage.clear();
  location.reload();
}
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

    .mobile-navbar-logo{
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

    .mobile-navbar-botoes{  
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        color: #70705b;
        text-transform: uppercase; 
    }

    .mobile-componente-navbar-cadastro-a{
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        color: #70705b;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: .3rem; 
    }

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
