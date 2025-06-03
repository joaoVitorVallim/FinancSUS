<script setup>
import Hero from '../components/Home/hero.vue'
import Categorias from '../components/Home/Categoria.vue';
import ComoFunciona from '../components/Home/comoFunciona.vue'
import Faq from '../components/Home/Faq.vue'
import Contribuir from '../components/Home/CriarProjeto.vue';
</script>

<template>
    <section>
        <MainHeader />
        <Hero />
        <Categorias />
        <ComoFunciona />
        <Faq />
        <Contribuir />
        <Footer />
    </section> 
</template>