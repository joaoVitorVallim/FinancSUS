<template>
  <nav class="componente-navbar">
    <section class="componente-navbar-section">
      <div class="componente-navbar-nav">
        <a href=""><img src="../../assets/Logotipo-ICON-AZUL.png" alt="Logo" width="75px"></a>
        <a class="navbar-botoes" href="">Como funciona?</a>
        <a class="navbar-botoes" href="">Projetos</a>
      </div>
      <div class="componente-navbar-cadastro">
        <a class="componente-navbar-cadastro-a">Cadastre seu projeto!</a>
        <a class="componente-navbar-cadastro-a" href=""><img src="../../assets/user.png" width="30px" color="red">Cadastrar-se</a>
      </div>
    </section>
  </nav>
</template>

<style>
  .componente-navbar{
    
  }

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
    color: #3e7f98;
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
    color: #3e7f98;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: .3rem;
  }
</style>