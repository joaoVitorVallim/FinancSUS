<script setup>
    import {ref, onMounted, onUnmounted} from 'vue'

    import DesktopNav from './MainHeader/DesktopNav.vue'
    import MobileNav from './MainHeader/MobileNav.vue'

    const navs = {
        DesktopNav,
        MobileNav,
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

    const isHidden = ref(false)
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > lastScroll && currentScroll > 100) {
        isHidden.value = true
      } else {
        isHidden.value = false
      }
      lastScroll = currentScroll
    } 

    onMounted(() => {
        window.addEventListener('resize', toggleNavbar)
        window.addEventListener('scroll', handleScroll)
        toggleNavbar()
    })

    onUnmounted(() => {
        window.removeEventListener('resize', toggleNavbar)
        window.removeEventListener('scroll', handleScroll)
    })
</script>

<template>
    <header
      class="componente-main-header"
      :class="{ 'componente-main-header--fixo': props.mudaMenu ,  'hidden-header': isHidden }"
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

<style>
   .componente-main-header{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  .hidden-header{
    transform: translateY(-100%);
  } 
</style>

