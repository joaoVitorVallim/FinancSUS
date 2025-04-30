<script setup>
    
</script>

<template>
    <section class="login">
        <div class="login-container">
            <div class="login-titulo-container">
                <img class="login-icon" src="../assets/Logotipo-ICON-AZUL.png" alt="Logotipo FinancSUS">
                <h1 class="login-titulo">Seja bem vindo!</h1>
            </div>
            <div class="login-input-container">
                <div class="login-input">
                <input type="text" placeholder="Digite seu e-mail" class="login-input__email" />
                <input type="password" placeholder="Digite sua senha" class="login-input__senha" />
            </div>
            </div>
            
            <div class="login-botoes">
                <button class="login-botoes__entrar">Entrar</button>
                <div class="login-cadastrar-container">
                    <p class="login-botoes__cadastrar_aviso">Ainda não possui uma conta? <a class="login-botoes__cadastrar">Cadastrar</a></p>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
}

 .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 700px;
    background-color: #edeae3;
    padding-inline: 5rem;
    padding-block: 1.5rem;
 }

 .login-icon{
    max-width: 100px;
 }

 .login-titulo-container{
    display: grid;
    grid-template-columns: min-content auto;
    margin-bottom: 1rem;
    width: 100%;
 }

 .login-titulo{
    margin: 0;
 }

 .login-input-container{
    max-width: 600px;
    width: 100vw;
 }

 .login-input{
    display: flex;
    flex-direction: column;
    gap: 1rem;
 }

 .login-botoes{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0;
    margin-top: 1rem;
 }

 .login-botoes__cadastrar_aviso{
    margin: 0;
 }
</style>