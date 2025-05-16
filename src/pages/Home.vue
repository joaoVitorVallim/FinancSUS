<script setup>
    import Hero from '../components/Home/Hero.vue'
    import Categorias from '@/components/Home/Categoria.vue';
    import ComoFunciona from '../components/Home/ComoFunciona.vue'
    import Faq from '../components/Home/Faq.vue'
    import contribuir from '@/components/Home/CriarProjeto.vue';
</script>

<template>
    <MainHeader />
    <Hero />
    <Categorias />
    <ComoFunciona />
    <Faq />
    <contribuir />
    <Footer />
</template>