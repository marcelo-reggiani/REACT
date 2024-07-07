# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Objetivo:
Criar uma página totalmente componentizada fazendo uso do React. A equipe deve escolher uma temática para construir a página utilizando os tópicos estudados na semana 04.

Instruções Gerais:
O foco deve estar na estruturação e arquitetura dos componentes;
A estrutura de componentes deve ser a seguinte:
<App>: componente principal e pai de todos os componentes da aplicação;
<Cabecalho>: com um logo e links de navegação (sem funcionamento)
<Banner>: seção com algum conteúdo destacado
<Galeria>: seção que possui diversos componentes de Card relacionado a temática
<Card>: componente que representa o card relacionado a temática
<Rodape>: informações sobre a temática escolhida
O componente <Galeria> deve utilizar a ideia de map, para gerar a lista de Cards de acordo com um array de objetos
O componente <Cabecalho> deve ter um botão de “Entrar” que ao ser clicado exibe um alerta no navegador (veja em Respondendo a Eventos – React)