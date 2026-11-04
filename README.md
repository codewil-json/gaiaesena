# Gaia & Sena Advogados Associados

Site institucional do escritório Gaia & Sena Advogados Associados, desenvolvido com Vue 3 e Vue Router. O projeto apresenta o escritório, suas áreas de atuação e canais de contato, com layout responsivo e otimizações básicas de SEO.

## Tecnologias

- Vue 3
- Vue Router 4
- Vue CLI 5
- Vue CLI PWA

## Requisitos

- Node.js e npm, ou Yarn

## Instalação e execução

Instale as dependências:

```bash
yarn install
```

Inicie o servidor local com recarga automática:

```bash
yarn serve
```

O Vue CLI exibirá no terminal o endereço local para acessar o site.

## Comandos

| Comando | Descrição |
| --- | --- |
| `yarn serve` | Inicia o servidor de desenvolvimento. |
| `yarn build` | Gera a versão otimizada para produção na pasta `dist/`. |
| `yarn lint` | Verifica o código com ESLint. |

Os mesmos scripts podem ser executados com npm (`npm run serve`, `npm run build` e `npm run lint`).

## Páginas

- `/` — página inicial, apresentação do escritório, equipe e contato.
- `/areas-de-atuacao` — informações sobre Família e Sucessões, Penal, Trabalhista e Previdenciário.
- `/artigos` — guias jurídicos informativos e notícias recentes do Consultor Jurídico; a rota não aparece no menu principal.

## SEO e indexação

- O build pré-renderiza as páginas inicial, de atuação e de artigos em HTML para que conteúdo, títulos e descrições estejam presentes na resposta inicial.
- `public/robots.txt` permite rastreamento e informa o sitemap em `https://www.gaiaesena.adv.br/sitemap.xml`.
- Atualize `public/sitemap.xml` e os caminhos pré-renderizados em `vue.config.js` sempre que novas páginas públicas forem adicionadas.
- Depois de publicar e apontar o DNS do domínio para a hospedagem, valide a propriedade no Google Search Console, envie o sitemap e solicite a indexação das URLs principais. O código do site não consegue executar essa etapa sem acesso à conta.
- A hospedagem deve servir os arquivos estáticos gerados no `dist/` e manter HTTPS ativo para o domínio canônico com `www`.

## Estrutura do projeto

```text
public/
  img/                 Imagens do escritório, profissionais, marca e ícones
  index.html           Metadados SEO, Open Graph e dados estruturados
src/
  router/              Rotas e navegação
  views/               Páginas do site
  App.vue              Layout compartilhado, cabeçalho e rodapé
  main.js              Inicialização da aplicação
vue.config.js           Configuração do Vue CLI e PWA
```

## Atualização de conteúdo e imagens

- As páginas e os textos ficam em `src/views/`.
- O cabeçalho, o rodapé e os estilos globais ficam em `src/App.vue`.
- Título, descrição, Open Graph e dados estruturados para mecanismos de busca ficam em `public/index.html`.
- As imagens ficam em `public/img/`. Ao substituir uma imagem, mantenha o nome do arquivo utilizado pela página ou atualize também a referência correspondente.
- Os ícones do PWA são configurados em `vue.config.js`.

## Publicação

Gere os arquivos de produção com:

```bash
yarn build
```

Publique o conteúdo de `dist/` no serviço de hospedagem. Como o projeto usa o histórico do Vue Router, configure a hospedagem para direcionar rotas desconhecidas para `index.html`; isso permite abrir ou atualizar diretamente a página `/areas-de-atuacao`.
