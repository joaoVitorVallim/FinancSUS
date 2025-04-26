<script>
    import { defineAsyncComponent } from 'vue'

// Registro dinâmico do componente ComoFunciona
const ComoFunciona = defineAsyncComponent(() =>
  import('../components/ComoFunciona/Index.vue')
)

</script>

<template>
    <MainHeader />
    <ComoFunciona />
</template>

