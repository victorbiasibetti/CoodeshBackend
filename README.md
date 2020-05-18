## Projeto Backend

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Coodesh%20Backend&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fvictorbiasibetti%2FCoodeshBackend%2Fmaster%2FInsomnia.json)

Este projeto é parte da prova para desensolvedor na Coodesh.

O backend é responsável pelas Rotas e acesso a database com MongoDB.

Para configurar em localhost é necessário criar um arquivo .env com as variáveis definidas no mesmo.

## Instalando dependências
Faça checkout do projeto e instale as dependências com o comando `yarn`.

## Rodando o projeto
Para iniciar o projeto rode o comando `yarn start`.
O projeto irá iniciar na porta 4000.

## Programação
O backend segue os princípios de SOLID e a separação de pastas já contempla o princípio de `Separation of Concepts` onde cada service faz uma tarefa especifica e toda lógica foi removida das rotas e inseridas nestes arquivos.

Os arquivos referentes a base de dados estão na models, referencias do modelo.

A inicialização da comunicação com a database está na pasta database.

Na pasta config está a configuração do multer, responsável pelo tratamento do upload de arquivos.

Na parta __test__ os arquivos de testes unitários da aplicação
