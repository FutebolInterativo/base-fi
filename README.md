# Base FI — Landing Page

Landing page da formação "Aprenda a construir sua carreira no mercado do futebol", construída em Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

- `app/page.tsx` — monta a página juntando todas as seções
- `app/layout.tsx` — fontes (Manrope + Inter) e metadata
- `app/globals.css` — tokens de cor/tipografia (tema escuro + ciano)
- `components/` — uma seção por arquivo (Hero, ProblemSection, CurriculumSection, PricingSection, FAQSection, etc.)

## Imagens

Os assets reais já estão em `public/images/`: `logo.png`, `guarantee-badge.png` e `instructor.png`. A otimização automática de imagem do Next (`next/image`) está desligada em `next.config.ts` (`images.unoptimized: true`) — os arquivos são servidos como estão. Se quiser reativar a otimização (Vercel tem suporte nativo via `sharp`), é só remover essa linha.

## Pontos para revisar antes de publicar

- Os links de CTA ("Garantir minha vaga", "Quero me inscrever") apontam para `#oferta` e `#formulario` — aponte para o checkout real ou formulário quando estiver pronto.
- Textos de preço/condições (`R$297`, `12x de R$24,75`, garantia de 7 dias) foram extraídos do mockup — confirme se ainda são os valores vigentes.

## Deploy

Após enviar para o GitHub, conecte o repositório na [Vercel](https://vercel.com/new) — o Next.js é detectado automaticamente, sem configuração extra.
