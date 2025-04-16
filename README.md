# FinancSUS

## Descrição
Plataforma de financiamento colaborativo desenvolvida com Node.js, Express e MongoDB.

## Pré-requisitos
- Node.js
- MongoDB
- Mercado Pago

## Instalação

1. Clone o repositório
2. Instale as dependências
   npm install

3. Configure o .env
   Crie um arquivo .env com:
   PORT=3000
   CONN=mongodb://localhost:27017/financsus
   SECRET=sua_chave_secreta
   MP_ACCESS_TOKEN=token_mercado_pago

4. Inicie o servidor
   node src/index.js

## Rotas Principais

- `/auth/register`: Registro de usuário
- `/auth/login`: Login
- `/vakinha`: Gerenciamento de campanhas
- `/pay`: Processamento de pagamentos

## Tecnologias
- Node.js
- Express
- MongoDB
- JWT
- Mercado Pago