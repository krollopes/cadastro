# Cadastro de Clientes

Este é um projeto de cadastro de clientes desenvolvido com HTML, CSS e JavaScript. O objetivo do projeto é permitir a criação, leitura, atualização e exclusão (CRUD) de informações de clientes, utilizando armazenamento local (localStorage) para persistência dos dados.

## Estrutura do Projeto

A estrutura de pastas do projeto é organizada da seguinte forma:

├── index.html
├── src/
│ ├── js/
│ │ ├── client.js
│ │ ├── index.js
│ │ ├── listeners.js
│ │ ├── modals.js
│ │ ├── storage.js
│ │ └── table.js
└── README.md


## Descrição dos Arquivos

- **index.html**: Arquivo principal HTML que carrega a aplicação.
- **src/**: Diretório principal para todos os recursos da aplicação.
  - **css/**: Diretório para arquivos CSS.
    - **styles.css**: Arquivo CSS principal para a aplicação.
  - **js/**: Diretório para arquivos JavaScript.
    - **client.js**: Lida com operações CRUD para clientes.
    - **index.js**: Ponto de entrada principal que inicializa a aplicação.
    - **listeners.js**: Configura os event listeners.
    - **modals.js**: Lida com a lógica dos modais.
    - **storage.js**: Lida com operações de armazenamento local.
    - **table.js**: Lida com a atualização da tabela de clientes.
  - **assets/**: Diretório para recursos estáticos como imagens, fontes, etc.
    - **images/**: Diretório para imagens.
      - **logo.png**: Exemplo de imagem.

## Funcionalidades

- **Adicionar Cliente**: Permite adicionar um novo cliente preenchendo um formulário.
- **Editar Cliente**: Permite editar as informações de um cliente existente.
- **Excluir Cliente**: Permite excluir um cliente da lista.
- **Listar Clientes**: Exibe uma lista de todos os clientes cadastrados.

## Tecnologias Utilizadas

- HTML
- CSS (Bootstrap)
- JavaScript

## Como Executar o Projeto

1. Clone o repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/seu-usuario/cadastro-clientes.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd cadastro-clientes
   ```

3. Abra o arquivo ```index.html``` no seu navegador preferido.
