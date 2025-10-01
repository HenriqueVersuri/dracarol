# Um cartão para Dra. Carol

![Banner de apresentação](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

Este repositório contém tudo o que você precisa para rodar e publicar o cartão de agradecimento criado com Vite + React.

[Veja o app no AI Studio](https://ai.studio/apps/drive/1brQvW-1F43I-Hqpev0SqWlUzWKx-gI91)

## Executar localmente

**Pré-requisito:** Node.js

1. Instale as dependências:
   `npm install`
2. Inicie o app:
   `npm run dev`

## Deploy na Vercel

1. Crie um novo projeto em [vercel.com/new](https://vercel.com/new) apontando para este repositório ou execute `npx vercel` na raiz.
2. Confirme o comando de build `npm run build` e o diretório de saída `dist` (pré-configurados em [`vercel.json`](vercel.json)).
3. Conclua com `npx vercel --prod` ou clique em **Deploy** pela interface web.
4. Compartilhe a URL pública gerada pela Vercel ao final do processo.

### Deploy automatizado

- Configure os segredos **VERCEL_TOKEN**, **VERCEL_ORG_ID** e **VERCEL_PROJECT_ID** no provedor Git (Settings → Secrets).
- Ao fazer push para `main` ou `master`, o workflow [`.github/workflows/deploy-vercel.yml`](.github/workflows/deploy-vercel.yml) executará `npm run build` e disparará um deploy de produção com o Vercel CLI.
- Também é possível acionar manualmente em *Actions → Deploy to Vercel → Run workflow*.

> 💡 O nome de domínio personalizado deve usar apenas caracteres ASCII. Para representar "GratidãodraCarol", utilize uma versão sem acentos, por exemplo `gratidaodra-carol.vercel.app`, ou registre um domínio próprio convertendo-o para punycode.

# dracarol
