<script setup>
</script>

<template>
  <section class="login">
    <div class="login-container">
      <div class="login-esquerda">
        <h1>Crie sua Conta!</h1>
        <p>Para se manter conectado conosco</p>
        <p>registre-se com suas informações pessoais</p>
        <button class="botao-registrar">REGISTRAR</button>
      </div>

      <div class="login-direita">
        <h1>Fazer Login</h1>
        <div class="icones-sociais">
          <button class="botao-social">f</button>
          <button class="botao-social">G+</button>
          <button class="botao-social">in</button>
        </div>
        <p>ou use seu email para entrar:</p>
        <form class="formulario-login">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button class="botao-login">ENTRAR</button>
        </form>
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

.login-esquerda, .login-direita {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 50%;
}

.login-esquerda {
  background-color: #66b5ab;
  color: white;
  border-radius: 10px 0 0 10px;
}

.login-esquerda h1 {
  margin-bottom: 20px;
  font-size: 2rem;
}

.login-esquerda p {
  margin: 5px 0;
  font-size: 0.9rem;
}

.login-direita {
  background-color: white;
  border-radius: 0 10px 10px 0;
}

.login-direita h1 {
  color: #66b5ab;
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

.botao-registrar, .botao-login {
  border: 1px solid white;
  background-color: transparent;
  padding: 12px 45px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
}

.botao-registrar {
  color: white;
}

.botao-login {
  background-color: #66b5ab;
  color: white;
  border: none;
}
</style>