<template>
  <section class="termos">
    <div class="termos-container">
      <button class="voltar-button" @click="$router.back()">
        ← Voltar
      </button>
      <h1 class="termos-titulo">Termos e Condições de Uso</h1>
      
      <div class="termos-content">
        <div class="termo-section">
          <h2>1. Aceitação dos Termos</h2>
          <p>Ao utilizar esta plataforma, você declara ter lido, compreendido e concordado com os presentes Termos e Condições de Uso. Caso não concorde com qualquer cláusula, a utilização do sistema não é permitida.</p>
        </div>

        <div class="termo-section">
          <h2>2. Finalidade da Plataforma</h2>
          <p>Esta plataforma tem como objetivo facilitar o financiamento coletivo de projetos autorais voltados à geração de energia limpa em residências ou comunidades. O sistema permite que usuários criem campanhas e arrecadem contribuições financeiras de apoiadores.</p>
        </div>

        <div class="termo-section">
          <h2>3. Cadastro e Dados Pessoais</h2>
          <p>Para utilizar o sistema, o usuário deverá criar uma conta e fornecer os seguintes dados pessoais:</p>
          <ul>
            <li>Nome completo;</li>
            <li>Endereço de e-mail;</li>
            <li>CPF;</li>
            <li>Endereço residencial;</li>
            <li>Número de telefone;</li>
            <li>Chave Pix e/ou dados bancários para recebimento de valores.</li>
          </ul>
          <p>Essas informações são indispensáveis para o funcionamento adequado da plataforma, especialmente em relação à segurança e transferências financeiras.</p>
        </div>

        <div class="termo-section">
          <h2>4. Tratamento de Dados</h2>
          <p>Ao utilizar o sistema, o usuário autoriza expressamente o tratamento de seus dados pessoais para as seguintes finalidades:</p>
          <ul>
            <li>Processamento de pagamentos e repasses via Pix;</li>
            <li>Verificação de identidade e prevenção de fraudes;</li>
            <li>Execução de obrigações legais;</li>
            <li>Transparência e segurança nas campanhas de arrecadação.</li>
          </ul>
          <p>O tratamento de dados será realizado conforme a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018).</p>
        </div>

        <div class="termo-section">
          <h2>5. Sistema de Pagamento</h2>
          <p>A plataforma utiliza o Mercado Pago como intermediador para processar as contribuições financeiras. O valor arrecadado será transferido via Pix diretamente para o criador do projeto, com os devidos descontos de taxas administrativas, quando houver.</p>
          <p>A plataforma não se responsabiliza por falhas no sistema do Mercado Pago ou por erros nos dados bancários informados pelo usuário.</p>
        </div>

        <div class="termo-section">
          <h2>6. Responsabilidade pelos Projetos</h2>
          <p>O criador do projeto é totalmente responsável por:</p>
          <ul>
            <li>Informar corretamente os dados e a finalidade da arrecadação;</li>
            <li>Utilizar os valores arrecadados exclusivamente para o projeto informado;</li>
            <li>Agir de forma ética, transparente e conforme a legislação vigente;</li>
          </ul>
          <p>A plataforma atua apenas como facilitadora e não possui qualquer responsabilidade sobre a execução ou entrega dos projetos.</p>
        </div>

        <div class="termo-section">
          <h2>7. Reembolsos e Cancelamentos</h2>
          <p>As contribuições feitas na plataforma são voluntárias e, como regra, não são reembolsáveis. Reembolsos só serão analisados em caso de suspeita de fraude, mediante avaliação interna da equipe da plataforma.</p>
        </div>

        <div class="termo-section">
          <h2>8. Conduta Proibida</h2>
          <p>É estritamente proibido:</p>
          <ul>
            <li>Criar campanhas falsas ou enganosas;</li>
            <li>Utilizar dados de terceiros sem autorização;</li>
            <li>Manipular o sistema com fins ilícitos;</li>
            <li>Promover atividades que violem leis ou regulamentos.</li>
          </ul>
          <p>O descumprimento destas regras poderá resultar na suspensão ou exclusão da conta e da campanha, a qualquer momento e sem aviso prévio.</p>
        </div>

        <div class="termo-section">
          <h2>9. Atualizações dos Termos</h2>
          <p>Estes Termos e Condições poderão ser alterados a qualquer momento. É responsabilidade do usuário manter-se atualizado com a versão mais recente. A continuidade no uso do sistema após alterações significará aceitação tácita dos novos termos.</p>
        </div>


  
      </div>
    </div>
  </section>
</template>

<style scoped>
.termos {
  min-height: 100vh;
  background-color: #f1f1ed;
  padding: clamp(2rem, 4vw, 4rem);
}

.termos-container {
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  padding: clamp(2rem, 4vw, 3rem);
  position: relative;
}

.termos-titulo {
  color: #70705b;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  margin-bottom: clamp(2rem, 4vw, 3rem);
  text-align: center;
}

.termos-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.termo-section {
  h2 {
    color: #70705b;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    margin-bottom: 1rem;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding-left: 1.5rem;
    margin-bottom: 1rem;

    li {
      position: relative;
      margin-bottom: 0.5rem;
      line-height: 1.6;

      &::before {
        content: "•";
        color: #70705b;
        position: absolute;
        left: -1.5rem;
      }
    }
  }
}

.voltar-button {
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: #70705b;
  font-weight: bold;
  background-color: transparent;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.voltar-button:hover {
  opacity: 0.9;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .termos {
    padding: 1rem;
  }

  .termos-container {
    padding: 1.5rem;
  }

  .voltar-button {
    top: 1rem;
    left: 1rem;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>