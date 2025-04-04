<template>
  <nav class="componente-navbar">
    <section class="componente-navbar-section">
      <div class="componente-navbar-nav">
        <img src="https://fakeimg.pl/100x50/">
        <a class="navbar-botoes" href="">Como funciona?</a>
        <a class="navbar-botoes" href="">Projetos</a>
      </div>
      <div class="componente-navbar-cadastro">
        <a class="componente-navbar-cadastro-a">Cadastre seu projeto!</a>
        <a class="componente-navbar-cadastro-a" href=""><img src="https://fakeimg.pl/30x30/">Login/Cadastrar-se</a>
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
    padding-block: .5rem;
    
    background-color: antiquewhite;
  }

  .componente-navbar-nav{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .navbar-botoes{
    text-decoration: none;
    color: #000;;
  }

  .componente-navbar-cadastro{
    display: flex;
    gap: 1rem;
    align-items: center;    
  }

  .componente-navbar-cadastro-a{
    display: flex;
    align-items: center;
    gap: .3rem;
    text-decoration: none;
    color: #000;
  }
</style>