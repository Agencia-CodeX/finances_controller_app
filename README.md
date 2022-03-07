<h1 align="center"> Projeto Fiances Controller </h1>

## 💻 Rodando o projeto

```bash

# Clone este repositório
$ git clone https://github.com/Agencia-CodeX/finances_controller_app.git

# Acesse a pasta do projeto no terminal/cmd
$ cd finances_controller_app

# Inicialize o Git flow no projeto
$ git flow init

# Basta apertar Enter e aceitar todas as configurações recomendadas 

# Instale as dependências gerais do projeto (ainda na pasta raiz finances_controller_app)
$ yarn

# Adicione as configurações do ESlint no arquivo de configução do VSCode "settings.json"
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},

# Instale as dependências do Back-end

# Acesse a pasta do Servidor e execute o comando yarn
cd server

yarn

# Execute o servidor Back-end em modo de desenvolvimento
$ yarn dev

# O servidor Back-end inciará na porta:3333 - acesse http://localhost:3333

# Instale as dependências do Front-end

# Caso ainda esteja na pasta "Server" utilize o comando abaixo para voltar a pasta raiz
cd ..

# Acesse a pasta do Cliente e execute o comando yarn
cd client

yarn

# Execute o app com:
$ expo start

# O app inciará na porta:19002 - acesse http://localhost:19002

```

# ⚠️ Atenção

Caso você dê um pull no projeto e receba alterações realizadas por outra pessoa, é importante seguir novamente os passos para instalar as dependências no Back-end e no Front-end para garantir que você está com o projeto 100% atualizado.
