# Codificiar Iniciante

Projeto de seleção da Codificar nível iniciante.

```
O projeto consiste em ler a API (https://my-json-server.typicode.com/codificar/oficina/proposals) e mostrar as informações de uma maneira organizada e de fácil acesso.
```

## Objetivo

```
Mostrar minhas habilidades e capacidade em desenvolver em ReactJS e React Native.
```

## Organização do projeto

```
react-codificar
├── node_modules
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├──  Components
│   │    ├── Component.js // Componente com o layout dos cards
│	│	 ├── Loading.js // Componente com o layout do loading da página inicial
│	│	 ├── Modal.js // Componente do layout do modal
│	│	 ├── searchInput.js // Componente com o botão de pesquisar
│	│	 └── useModal.js // Componente que carrega o Modal
│   ├── css
│	│	 ├── modal.js // Arquivo com o css do modal
│	│	 └── styles.js // Arquivo com o css da aplicação
│   ├── Layout
│	│	 └── AppBar.js // Componente com o header
│   ├─ utils
│	│    └── hooks.js // Componente que realiza as requisições da API
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Começando

Siga as instruções abaixo para usar o projeto.

### Prerequisitos

npm instalado

### Instalação

```
Entre na pasta /react-codificar e rode o comando npm install, aguarde, rodo o comando npm start, logo após será aberto uma nova guia no navegador com o projeto.
```

## Bibliotecas Externas

* [Material UI](https://material-ui.com/pt/) - Framework usado para o layout
* [Mui Treasury](https://mui-treasury.com/) - Extensão do framework do Material UI

## Autor

* **Allan Kehl** - [AllanKDeveloper](https://github.com/AllanKDeveloper)

## Licença

MIT License - veja [LICENSE.md](LICENSE.md) para detalhes