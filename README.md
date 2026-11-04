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
