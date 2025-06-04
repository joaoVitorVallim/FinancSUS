<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';

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

  const goToCadastroProjeto = () => {
      if (token.value) {
        router.push('/cadastroProjeto');
      } else {
        router.push('/login');
      }
    };
</script>

<template>
  <nav class="componente-navbar">
    <section class="componente-navbar-section">
      <div class="componente-navbar-nav">
        <a href="/home"><img src="../../../assets/LogoPequenoEnergia.png" alt="Logo" width="75px"></a>
        <a class="navbar-botoes" href="/saibamais">Saiba Mais</a>
        <a class="navbar-botoes" href="/projetos">Projetos</a>
      </div>
      <div class="componente-navbar-cadastro">
        <button @click="goToCadastroProjeto()" id="cadastre-projeto" class="componente-navbar-cadastro-a">Cadastre seu projeto!</button>
        <section v-if="user">
          <span class="componente-navbar-cadastro-a">
            <img src="../../../assets/user.png" width="30px" /> Olá, {{ user.name }}
          </span>
        </section>
        <section v-else>
          <a class="componente-navbar-cadastro-a" href="/register">
            <img src="../../../assets/user.png" width="30px" /> Cadastrar-se
          </a>
        </section>
      </div>
    </section>
  </nav>
</template>

<style>
  .componente-navbar-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;
    padding-block: .1rem;
    background-color: #edeae3;
  }

  .componente-navbar-nav{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .navbar-botoes{
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    color: #70705b;
    text-transform: uppercase; 
  }

  .componente-navbar-cadastro{
    display: flex;
    gap: 1rem;
    align-items: center;    
  }

  .componente-navbar-cadastro-a{
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

  #cadastre-projeto {
    border: 2px solid #70705b;
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
  }
</style>