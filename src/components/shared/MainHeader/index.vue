<script setup>
    import {ref, onMounted, onMounted, onUnmounted} from 'vue'

    import DesktopNav from './DesktopNav.vue'
    import MobileNav from './MobileNav.vue'

    const navs = {
        DesktopNav,
        MobileNav
    }

    const props = defineProps({
        mudaMenu: {
            type: Boolean,
            required: false
        }
    })

    const currentNav = ref('DesktopNav')

    function toggleNavbar(){
        if(window.innerWidth <= 1024){
            currentNav.value = 'MobileNav'
        } else {
            currentNav.value = 'DesktopNav'
        }
    }

    onMounted(() => {
        window.addEventListener('resize', toggleNavbar)
        toggleNavbar()
    })

    onUnmounted(() => {
        window.removeEventListener('resize', toggleNavbar)
    })
</script>

<template>
    <header
      class="componente-main-header"
      :class="{ 'componente-main-header--fixo': props.mudaMenu }"
    >
      <div class="container">
        <div class="componente-main-header__logo">
          <a href="/">
            <slot name="logo"></slot>
          </a>
        </div>
  
        <component :is="navs[currentNav]"></component>
      </div>
    </header>
</template>

