<template>
  <section class="faq-section">
    <h2 class="faq-title">Perguntas Frequentes</h2>
    <div class="faq-container">
        <div v-for="(item, index) in faqs" :key="index" class="faq-item">
            <button 
                class="faq-question" 
                :class="{active: activeIndex === index}"
                @click="toggle(index)"
                :aria-expanded="activeIndex === index"
                :aria-controls="'faq' + index"
            >
                {{ item.pergunta }}
                <span class="faq-icon">{{ activeIndex === index ? '−' : '+' }}</span>
            </button>

            <transition name="faq-accordion">
                <div 
                v-show="activeIndex === index" 
                :id="'faq' + index" 
                class="faq-answer"
                role="region"
                :aria-labelledby="'faq-btn-' + index"
                >
                {{ item.resposta }}
                </div>
            </transition>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      faqs: [
        { pergunta: "Como criar uma campanha?", resposta: "Para criar uma campanha, basta preencher o formulário com os dados básicos do projeto e enviar para análise." },
        { pergunta: "Como recebo doações?", resposta: "Você pode receber via Pix, com segurança e integração com Mercado Pago." },
        { pergunta: "Posso divulgar minha campanha?", resposta: "Sim! Disponibilizamos links fáceis para compartilhar nas redes sociais." },
        { pergunta: "Existe alguma taxa sobre doações?", resposta: "Não, todas as doações chegam integralmente ao projeto." },
        { pergunta: "Como acompanho o progresso?", resposta: "No painel do usuário, você vê a arrecadação em tempo real." },
        { pergunta: "Posso cancelar minha campanha?", resposta: "Sim, campanhas podem ser canceladas antes do prazo final." },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'Ancizar Sans';
  src: url(../../assets/AncizarSans.ttf) format('truetype'); 
  font-weight: normal;
  font-style: normal;
}

.faq-section {
  font-family: Ancizar Sans, sans-serif;
  margin-inline: auto;
  padding: 0 1rem;
  background-color: #fff;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.faq-title {
  text-align: center;
  font-size: 2.5rem;
  color: #70705b;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.faq-container{
    max-width: 1200px;
    width: 80%;
    
}

.faq-item {
  margin-bottom: 1rem;
}

.faq-question {
  width: 100%;
  padding: 1rem;
  background: #70705b;
  border-radius: 15px;
  color: white;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.faq-question.active{
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
}

.faq-icon {
  font-size: 1.8rem;
  line-height: 1;
}

.faq-answer {
  padding: 1rem;
  background: #f1f1ed;
  font-size: 1rem;
  color: #333;
  overflow: hidden;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.faq-accordion-enter-active, .faq-accordion-leave-active {
  transition: max-height 0.3s ease;
}
.faq-accordion-enter-from, .faq-accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.faq-accordion-enter-to, .faq-accordion-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
