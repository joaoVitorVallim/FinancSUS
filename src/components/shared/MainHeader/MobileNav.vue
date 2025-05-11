<template>
  <nav class="mobile-componente-navbar">
    <div class="mobile-componente-navbar-header">
      <a href=""><img src="../../../assets/Logotipo-ICON-AZUL.png" alt="Logo" width="100px"></a>
      <button class="mobile-menu-hamburguer" @click="toggleMenu">☰</button>
    </div>
    <Transition name="slide-fade">
        <section class="mobile-componente-navbar-section" v-if="menuAberto">
            <a class="mobile-navbar-botoes" href="">Saiba Mais +</a>
            <a class="mobile-navbar-botoes" href="">Projetos</a>
            <a id="mobile-cadastre-projeto" class="mobile-navbar-botoes">Cadastre seu projeto!</a>
            <a class="mobile-componente-navbar-cadastro-a" href="">
            <img src="../../../assets/user.png" width="30px">Cadastrar-se
            </a>
        </section>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const menuAberto = ref(false);

function toggleMenu() {
  menuAberto.value = !menuAberto.value;
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

    .mobile-menu-hamburguer {
        background-color: transparent;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #000;
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
        color: #3e7f98;
        text-transform: uppercase; 
    }

    .mobile-componente-navbar-cadastro-a{
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        color: #3e7f98;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: .3rem; 
    }

        /* Animation */
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
