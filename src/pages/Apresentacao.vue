<script setup>
    import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <section class="componente-apresentacao">
        <div>
        <div class="container-apresentacao">
            <img src="../assets/Slogan-FINANCSUS-AZUL.PNG" alt="Logo" class="logo" />
        </div>
        
        </div>
        <h1>Bem-vindo ao FinanCSUS</h1>
    </section>
</template>

<style>
    .componente-apresentacao{
        background-color: #edeae3;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }


    .logo{
        width: 100%;
    }

    .container-apresentacao{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin-bottom: 2rem;
    }
</style>