<script setup>
  import { RouterLink } from 'vue-router';

</script>

<template>
  <section class="login">
    <div class="login-container">

      <div class="login-esquerda">
        <img id="login-img" src="../assets/LogoPequenoEnergia.png" alt="">
        <h1>Registre sua conta</h1>
        <form class="formulario-login">
          <input type="name" placeholder="Nome" />
          <input type="lastName" placeholder="Sobrenome" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <div class="checkbox-termos">
            <input type="checkbox" id="termos" required />
            <label for="termos">Aceito os <RouterLink to="/termos" id="termos">Termos de Uso</RouterLink></label>
          </div>
          <RouterLink to="/login" class="botao-registrar">CADASTRAR-SE</RouterLink>
          <RouterLink 
            to="/login" 
            class="botao-login" 
            id="botao-login-mobile"
          >
            ENTRAR
          </RouterLink>

        </form>
      </div>

      <div class="login-direita">
        <h1>Já possui uma conta?</h1>
        <p>Entre com a sua conta</p>
        <RouterLink 
            to="/login" 
            class="botao-login" 
            id="botao-login-desktop"
          >
            ENTRAR
        </RouterLink>


      </div>
    </div>
  </section>
</template>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f6f5f7;
}

.login-container {
  display: flex;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25);
  min-height: 480px;
  width: 768px;
}

.login-direita, .login-esquerda {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 50%;
}

.login-direita {
  background-color: #b4b494;
  color: white;
  border-radius: 0px 10px 10px 0px;
}

.login-direita h1 {
  margin-bottom: 20px;
  font-size: 2rem;
}

.login-direita p {
  margin: 5px 0;
  font-size: 0.9rem;
}

#login-img{
  max-width: 150px;
}

.login-esquerda {
  background-color: white;
  border-radius: 0 10px 10px 0;
}

.login-esquerda h1 {
  color: #b4b494;
  margin-top: 0;
  margin-bottom: 20px;
}

.icones-sociais {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.botao-social {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.formulario-login {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 300px;
}

input {
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f6f5f7;
}

.checkbox-termos {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.checkbox-termos label {
  color: #70705b;
}

#termos{
  text-decoration: underline;
  color: #70705b;
  font-weight: bold;
}

.botao-login, .botao-registrar {
  border: 1px solid white;
  background-color: transparent;
  padding: 12px 45px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.botao-login {
  color: white;
  text-decoration: none;
  text-align: center;
}

#botao-login-mobile{
  display: none;
}

#botao-login-desktop{
  width: 100%;
  max-width: 150px;
}

.botao-login:hover {
  background-color: white;
  color: #b4b494;
  border: 1px solid #b4b494;
}

.botao-registrar {
  background-color: #b4b494;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
}

.botao-registrar:hover {
  background-color: white;
  color: #b4b494;
  border: 1px solid #b4b494;
}

@media (max-width: 1024px){
  .login-direita{
    display: none;
  }
  
  .login-container{
    width: 100%;
    max-width: 400px;
    margin: 0 20px;
  }

  .login-esquerda{
    width: 100%;
    border-radius: 10px;
  }

  #login-img{
    width: 50%;
  }

  #botao-login-mobile{
    display: block;
    color: #b4b494;
    border-color: #b4b494;
    margin-top: 0;;
    text-decoration: none;
    text-align: center;
  }
}
</style>