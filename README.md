# Base FI — Landing Page

Landing page da formação "Entre no mercado do futebol em 30 dias", construída em Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

- `app/page.tsx` — monta a página juntando todas as seções, na ordem
- `app/layout.tsx` — fontes (Manrope + Inter) e metadata
- `app/globals.css` — tokens de cor/tipografia (tema escuro + ciano) e o overlay de grão
- `components/` — uma seção por arquivo
- `components/ui.tsx` — peças reutilizáveis (Container, Eyebrow, CTAButton) e a constante `CHECKOUT_URL`

## Fluxo dos CTAs

Todos os botões de CTA da página (header, hero, transformação, CTA final, barra fixa) rolam até a seção `#oferta`. **Somente o botão dentro da seção de oferta** aponta para o link real de checkout, definido em `components/ui.tsx` na constante `CHECKOUT_URL`. Se o link mudar, é só atualizar ali.

## Pontos pendentes antes de publicar
- **Depoimentos**: a seção "Quem passou pelo FI, conta" (`components/TestimonialsSection.tsx`) está com conteúdo placeholder, claramente sinalizado no código e na própria página. Substitua pelos depoimentos reais (prints de WhatsApp ou vídeos curtos convertem mais que texto polido) antes de publicar.
- **Foto do instrutor**: usa a foto real já enviada (`public/images/instructor.png`), reaproveitada na seção "Quem vai te ensinar".
- **Valor total da oferta**: corrigi uma inconsistência do rascunho original — o "de R$997" foi ajustado para "de R$1.338" para bater com a soma dos itens do value stack. Se o valor total mudar, ajuste em `components/PricingSection.tsx`.
- **Urgência da oferta** ("preço sobe para R$397 na próxima turma"): só use essa mensagem se for um compromisso real — urgência falsa desgasta a marca.

## Deploy

Após enviar para o GitHub, conecte o repositório na [Vercel](https://vercel.com/new) — o Next.js é detectado automaticamente, sem configuração extra.

⚠️ Ao commitar, confira que `node_modules/` não está sendo versionado (deve estar no `.gitignore`). Se aparecer no `git status`, rode `git rm -r --cached node_modules` antes de commitar.
