<template>
  <nav class="componente-navbar">
    <section class="componente-navbar-section">
      <div class="componente-navbar-nav">
        <a href=""><img src="../../../assets/LogoPequenoEnergia.png" alt="Logo" width="75px"></a>
        <a class="navbar-botoes" href="/como-funciona">Saiba Mais +</a>
        <a class="navbar-botoes" href="">Projetos</a>
      </div>
      <div class="componente-navbar-cadastro">
        <a id="cadastre-projeto" class="componente-navbar-cadastro-a">Cadastre seu projeto!</a>
        <a class="componente-navbar-cadastro-a" href=""><img src="../../../assets/user.png" width="30px" color="red">Cadastrar-se</a>
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
    background-color: #f7f7f5;
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