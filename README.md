# FrankStore — Checkout

Projeto avaliativo do Módulo 2 (Front-End React) — uma SPA que simula o fluxo de finalização de compra de uma loja virtual: carrinho, pagamento, sucesso e falha.

## Problema que resolve

Simula a experiência de checkout de um e-commerce: o usuário revisa os produtos do carrinho, informa dados fictícios de cartão e recebe uma resposta simulada (aprovação ou recusa), sem nenhuma integração real de pagamento.

## Estrutura do projeto

\`\`\`
FrankStore/
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── pages/
    │   ├── Carrinho.jsx
    │   ├── Pagamento.jsx
    │   ├── Sucesso.jsx
    │   └── ErroPagamento.jsx — mensagem "tentativa de golpe"
    ├── components/
    │   ├── ItemCarrinho.jsx
    │   └── ResumoCompra.jsx
    ├── hooks/
    │   └── usePagamento.js
    ├── utils/
    │   ├── pagamento.js
    │   └── schemaPagamento.js
    ├── data/
    │   └── produtos.js
    └── assets/
        ├── styles/
        │   └── index.css
        └── img/
\`\`\`

## Tecnologias utilizadas

- React + Vite
- React Router (navegação entre telas)
- React Hook Form + Zod (formulário e validação)
- CSS puro (Flexbox, media queries para responsividade)

## Como executar

\`\`\`bash
git clone <https://github.com/FranciscoOtacilioMachado/FrankStore> git 
cd FrankStore
npm install
npm run dev
\`\`\`

Acesse http://localhost:5173 no navegador.

## Fluxo da aplicação

1. `/` — Carrinho com produtos fixos, subtotais e total
2. `/pagamento` — Formulário de dados do cartão (validado)
3. `/sucesso` — Confirmação de compra aprovada
4. `/erroPagamento` — Exibido quando o número do cartão tem todos os dígitos iguais

## Melhorias futuras

- Catálogo dinâmico de produtos via API
- Persistência do carrinho (ex: localStorage)
- Testes automatizados

## Vídeo de apresentação

[link do vídeo aqui]