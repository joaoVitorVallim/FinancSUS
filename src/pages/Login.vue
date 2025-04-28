<script setup>
    
</script>

<template>
    <section class="login">
        <div class="login-container">
            <h1 class="login-titulo">Seja bem vindo!</h1>
            <div class="login-input">
                <input type="text" placeholder="Digite seu e-mail" class="login-input__email" />
                <input type="password" placeholder="Digite sua senha" class="login-input__senha" />
            </div>
            <div class="login-botoes">
                <button class="login-botoes__entrar">Entrar</button>
                <div class="login-cadastrar-container">
                    <p class="login-botoes__cadastrar_aviso">Ainda não possui uma conta?</p>
                    <button class="login-botoes__cadastrar">Cadastrar</button>
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
    max-width: 400px;
    background-color: #edeae3;
 }
</style>