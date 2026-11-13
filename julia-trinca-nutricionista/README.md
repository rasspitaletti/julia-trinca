# Julia Trinca · Nutricionista Esportiva

Redesign do site [nimbus-khaki-alpha.vercel.app](https://nimbus-khaki-alpha.vercel.app/).
Página única em **Next.js 15 (App Router) + TypeScript + CSS puro com design tokens**, fonte Plus Jakarta Sans. Sem bibliotecas de animação: entradas com CSS + `IntersectionObserver`; interações (foto do hero que inclina com o mouse, luz que segue o cursor nos cards, botões magnéticos) em `src/components/ui/Interactions.tsx`, desligadas em telas de toque e com "reduzir movimento".

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # versão de produção
npm run images     # regenera as imagens WebP a partir de orig/ e assets/
```

## Estrutura

```
src/
  app/            layout.tsx (fontes, SEO, Open Graph, JSON-LD) · page.tsx
  components/
    layout/       Header (sticky + menu móvel), Footer, ContactDock (WhatsApp flutuante + barra móvel)
    sections/     Hero, About, Approach (abas), Stories, Process, Contact/Quote
    ui/           Button, Icon, MotionRoot (revelações, header adaptativo, seção ativa)
  lib/site.ts     TODOS os textos, contatos e links reais — edite aqui
  styles/         tokens.css (cores, escala fluida, espaço, movimento) · base.css · sections.css
public/images/    professional/ services/ gallery/ backgrounds/ (WebP otimizado)
orig/             originais do site antigo (inclusive a foto original da Julia, preservada)
assets/           fotos de bancos abertos + credits.json (licenças)
scripts/          process-images.mjs (sharp)
```

## Dados da cliente

Nome, profissão, CRN 92208/P, WhatsApp (`wa.me/message/HVLWZ4OHDPNBK1`), Instagram (`@jutrinca.nutri`) e todos os textos vêm do site original, centralizados em `src/lib/site.ts`. Nenhum dado, depoimento, número ou serviço foi inventado.

## Atendimento

A Julia atende somente online (confirmado pelo cliente), por isso não há endereço nem mapa. A seção `#online` (`src/components/sections/Location.tsx`) explica o formato e leva ao WhatsApp.

## Imagens

- **Da cliente:** foto da Julia (o original publicado tem apenas 150×150 px) e as quatro imagens do site antigo (mesa, tigela, smoothie, corrida), convertidas de PNG (~1,8 MB cada) para WebP.
- **Bancos abertos (CC0 / CC BY):** créditos no rodapé (“Créditos das fotografias”) e em `assets/credits.json`. Nenhuma é apresentada como foto do consultório ou de pacientes.
- **Pendente:** pedir à cliente uma foto profissional em alta resolução (mínimo 1200 px). Basta substituir `public/images/professional/julia-trinca.webp`.

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Na Vercel: *Add New → Project*, importe o repositório (framework detectado: Next.js) e publique.
3. Para substituir o site atual, conecte o repositório ao projeto existente ou aponte o domínio para o novo projeto. Atualize `site.url` em `src/lib/site.ts` se o domínio mudar.
