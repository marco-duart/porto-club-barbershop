
# Porto Club barbershop

Este projeto implementa um website de barbearia com foco em uma interface responsiva, transições suaves e uma navegação interativa baseada em rolagem. A aplicação foi desenvolvida utilizando tecnologias modernas como **React**, **TypeScript**, **Styled Components**, **Framer Motion**, e **React Scroll**. O objetivo principal é oferecer uma experiência fluida e agradável aos usuários, com animações de entrada e efeitos de destaque na navegação conforme as seções do site são acessadas.

## Funcionalidades Principais

- **Navegação fluida entre seções**: A navegação utiliza **React Scroll** para rolagem suave até as seções definidas do site. O destaque do menu na navegação é alterado automaticamente com base na seção visualizada.
- **Tabela de Preços Animada**: Uma tabela de preços para os serviços da barbearia, que é exibida com animação quando entra na visualização do usuário.
- **Efeitos visuais dinâmicos**: Inclui transições e animações usando **Framer Motion** para elementos como logotipos e botões, proporcionando uma experiência visual atraente.
- **Responsividade**: A aplicação é responsiva e otimizada para funcionar em diferentes dispositivos, ajustando o layout para tamanhos de telas como tablets e smartphones.
- **Efeito de Destaque no Menu**: O item correspondente no menu do header é destacado automaticamente conforme o usuário navega entre as seções do site, iniciando na seção "Home".
- **Clip-path Customizado**: Efeito de clip-path estilizado para a imagem principal, criando uma forma de paralelogramo.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript, tornando o desenvolvimento mais robusto.
- **Styled Components**: Utilizado para criar componentes de estilo dinâmicos e reutilizáveis.
- **Framer Motion**: Biblioteca utilizada para animações suaves de elementos React.
- **React Scroll**: Para navegação suave entre as seções da página.
- **Vercel**: Plataforma utilizada para o deploy do projeto.

## Estrutura do Projeto

A estrutura básica do projeto segue a convenção de um projeto React moderno com TypeScript, utilizando componentes funcionais e hooks para gerenciar o estado e os efeitos da aplicação.

```
/src
  /assets
    /styles
    /images
  /components
    /base-layout
    /footer
    /header
  /pages
    /home
  /utils
    /constants
    /helpers
  App.tsx
  index.tsx
  ...
```

### Instalação Local

1. Clone o repositório:
   ```bash
   git clone https://github.com/marco-duart/porto-club-barbershop.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Rode o projeto em ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Para realizar o build de produção:
   ```bash
   npm run build
   ```

5. O projeto pode ser visualizado acessando `http://localhost:5173` no navegador.
  
## Licença

Este projeto está licenciado sob a **Licença Apache 2.0**. Você pode ver os termos completos da licença no arquivo [LICENSE](./LICENSE.txt).
