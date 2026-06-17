# Exemplo — Hamburgueria (cardápio digital)

Cardápio digital de página única de uma hamburgueria artesanal fictícia, **Exemplo**.
Peça de **vitrine da Dalmasio**: frontend puro, **sem backend, sem framework e sem etapa de build**.

> Demonstrativo — restaurante fictício. Itens, preços e contatos são ilustrativos.

## Como rodar

Não há dependências para instalar. Basta um runtime Node (≥ 18):

```bash
cd exemplo-burger
npm run dev          # http://localhost:5193
# ou: node serve.mjs
```

Como usa apenas HTML/CSS/ES Modules estáticos, qualquer servidor de arquivos serve
(`python -m http.server`, `npx serve`, Live Server) e pode ser publicado direto em
qualquer host estático (Vercel, Netlify, GitHub Pages).

## O que tem

- **Hero** com nome, assinatura e status "aberto agora" calculado pelo horário.
- **Cardápio** em lista editorial estilo menu-board (nome + descrição → preço com _dot-leader_):
  Especiais da Casa, Smash & Clássicos, Acompanhamentos, Bebidas e Sobremesas.
- **Combos** com selo de preço desenhado em SVG.
- **Diferenciais**, **horário**, **contato/entrega** e **WhatsApp**.
- Navegação por âncoras com _scrollspy_, menu mobile e _reveal_ no scroll.

## Direção visual — "Brasa & Esmalte"

- **Cores quentes:** creme (`#fbf3e6`) + terracota/brasa (`#b3401a`) + âmbar (`#b9791a`) sobre tinta marrom-escura.
  O ember é a **única faísca** — só em CTA, preço de combo, filete do hero e hover.
- **Tipografia carrega a página** (sem foto): Bricolage Grotesque (nomes/preços) + Fraunces serif (descrições, sinal "curado/artesanal").
- **Ícones:** só _line-icons_ SVG inline (`assets/js/icons.js`, stroke `currentColor` 24×24) — **sem emoji**.
- Acessível (contraste AA, foco visível, `prefers-reduced-motion`), responsivo.

## Estrutura

```
exemplo-burger/
├── index.html
├── serve.mjs                # servidor estático (zero dep)
└── assets/
    ├── css/styles.css       # design system "Brasa & Esmalte"
    └── js/
        ├── app.js           # shell, render das seções, interações, boot
        ├── data.js          # conteúdo do cardápio (estático)
        ├── icons.js         # ícones SVG inline (line)
        └── ui.js            # toast, reveal, escape, formatação de preço
```
