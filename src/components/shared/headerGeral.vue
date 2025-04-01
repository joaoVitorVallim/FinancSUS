<template>
  <nav class="componente-main-header">
    <div class="section-header">
      <img src="" alt="Logo FinancSUS">
      <ul class="componente-main-header-botoes">
        <li>Home</li>
        <li>Sobre nós</li>
        <li>Teste</li>
      </ul> 
    </div>
    <div class="componente-main-header-login">
      <ul>
        <li>teste</li>
        <li>teste</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  .componente-main-header{
    display: flex;
    width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .section-header{
    display: flex;
    align-items: center;
  }

  .componente-main-header-botoes{
    text-decoration: none;
    list-style: none;
    display: flex;
    font-size: 2rem;
    gap: 1rem;
  }

  .componente-main-header-login ul{
    text-decoration: none;
    list-style: none;
    display: flex;
    align-items: center;
  }

</style>