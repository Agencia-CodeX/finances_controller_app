# 📝 Lista de Requisitos da aplicação 

# Cadastro de Usuário

## Requisito Funcional

- Deve ser possível cadastrar um novo usuário

- Deve ser retonado um token caso o cadastro seja com sucesso

- Deve ser possível receber uma imagem de avatar

## Requisito não funcional

- A armazenamento do avatar deve ser feito apenas pela caminho da imagem que irá ficar efetivamente salva na AWS

- O token deverá ser um Bearer Token com JWT

- O token do usuário deve expirar em 1 dia

## Regras de negócio 

- Não deve ser possível cadastrar um usuário com email já existente

# Iniciar Sessão  de Usuário

## Requisito Funcional

- Deve ser possível que o usuário inicie uma sessão utilizando email e senha.

- Deve ser possível que o usuário resete sua senha em caso de esquecimento

## Requisito não funcional

- Iniciar a sessão de um usuário deverá retornar um token que irá expirar em 30 dias

- Para resetar a senha em caso de esquecimento o processo deve ser feito através do envio de um email de confirmação para reset da senha

## Regras de negócio 

- Não deve ser possível efetuar a recuperação de senha para emails não existentes




