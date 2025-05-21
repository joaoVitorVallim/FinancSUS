<script setup>
  import { RouterLink } from 'vue-router';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  import axios from 'axios';

  const email = ref('');
  const password = ref('');
  const router = useRouter();
  
  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: email.value,
        password: password.value
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('name', response.data.user.name);
      router.push('/home');
    } catch (error) {
      if(error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('Erro ao fazer login. Tente novamente mais tarde.');
      }
    }
  };

 
</script>

<template>
  <section class="login">
    <div class="login-container">
      <div class="login-esquerda">
        <h1>Crie sua Conta!</h1>
        <p>Para se manter conectado conosco</p>
        <p>registre-se com suas informações pessoais</p>
        <RouterLink 
            to="/register" 
            class="botao-registrar" 
            id="botao-registrar-desktop"
          >
            REGISTRAR
        </RouterLink>


      </div>


      <div class="login-direita">
        <img id="login-img" src="../assets/LogoPequenoEnergia.png" alt="">
        <h1>Fazer Login</h1>
        <form class="formulario-login" @submit.prevent="login">
          <input type="email" placeholder="Email" v-model="email" required/>
          <input type="password" placeholder="Senha" v-model="password" required/>
          <button type="submit" class="botao-login">ENTRAR</button>
          <RouterLink 
            to="/register" 
            class="botao-registrar" 
            id="botao-registrar-mobile"
          >
            REGISTRAR
          </RouterLink>

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
  background-color: #70705b;
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

#login-img{
  max-width: 150px;
}

.login-direita {
  background-color: white;
  border-radius: 0 10px 10px 0;
}

.login-direita h1 {
  color: #70705b;
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
  text-decoration: none;
  text-align: center;
}

#botao-registrar-desktop{
  width: 100%;
  max-width: 150px;
}

#botao-registrar-mobile{
  display: none;
}

.botao-registrar:hover {
  background-color: #fff;
  color: #70705b;
  border: 1px solid #70705b;
}

.botao-login {
  background-color: #70705b;
  color: white;
  border: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  text-decoration: none;
}

.botao-login:hover {
  background-color: #fff;
  border: 1px solid #70705b;
  color: #70705b;
}

@media (max-width: 1024px){
  .login-esquerda{
    display: none;
  }
  
  .login-container{
    width: 100%;
    max-width: 400px;
    margin: 0 20px;
  }

  .login-direita{
    width: 100%;
    border-radius: 10px;
  }

  #login-img{
    width: 50%;
  }

  #botao-registrar-mobile{
    display: block;
    color: #70705b;
    border-color: #70705b;
    margin-top: 0;
    text-decoration: none;
    text-align: center;
  }
}
</style>