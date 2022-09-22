# Blog's API

## Introdução

O projeto consiste em criar uma API RESTful utilizando node.js e um banco de dados utilizando sequelize para a produção de conteúdo para um blog!

## Sumário

- [Introdução](#introdução)
- [Tecnologias utilizadas](#tecnologias-utilizada)
- [CRUD](#crud)
- [ORM](#orm)
- [Sequelize](#Sequelize)
- [Aprendizados](#Aprendizados)
- [Instruções para utilizar a aplicação](#instruções-para-utilizar-a-aplicação)
- [Histórico de Commits](#histórico-de-commits)

## Tecnologias utilizada

**Back End:** Docker, NodeJs, express, Sequelize, mySQL, arquitetura RESTful, validação com JWT.

## CRUD

CRUD é um acrônimo para Create, Read, Update and Delete. Em português Criar, Ler, Atualizar e Deletar registros, nesse projeto não trabalhamos direto com um banco de dados para fazer as operações, fiz as operações por meio dos enpoints e utilizei sequelize para fazer a comunicação com o banco de dados!

## ORM

Os ORMs ou Object-Relational Mappers, visam diminuir o uso dos comandos e consultas SQL para fazer inserções, atualizações, nas tabelas do banco de dados. Utilizando um framework baseado em ORM, conseguimos utilizar comandos SQL sem utilizar a linguagem do mySQL para tal. Nesse projeto utilizamos o sequelize.


## Sequelize

O Sequelize é um ORM(Object-Relational Mapper) baseado em Promise para Node.js e pode ser utilizado para diversos bancos de dados, no caso do projeto utilizei em conjunto com o mySQL.

## Aprendizados

Fui capaz de desenvolver uma API em que é gerado um token(por meio do JWT) após login válido de um usuário, esse token é necessário para fazer diversas requisições para a API, como criar um novo post, editar um post, deletar um post e um usuário. Cada post só pode ser editado ou deletado pelo usuário que o criou.

Apliquei os conceitos acima utilizando JWT (Json Web Token), aprendi como criar e validar o token de acordo com cada usuário. Também criei diversos middlewares para validar a criação de posts e usuários, garantindo uma padronização das informações de acordo com as regras de negócio proposta no projeto.

Além disso fiz o relacionamento das tabelas aplicando os conhecimentos de sequelize, dessa forma, após a execução de um comando do sequelize, a query é executada corretamente, pois existe relação entre as tabelas, com respectivas chaves primárias e estrangeiras.

## Instruções para utilizar a aplicação

Para utilizar a aplicação você precisará ter o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

Após clonar o repositório, você precisará usar o comando `docker-compose up -d` para criar e iniciar o container e depois executar o terminal bash do container e instalar as dependências do projeto com o comando `npm install` . O comando deverá ser feito via terminal no diretório em que está o arquivo **docker-compose.yml**.
Após o container subir você poderá fazer as requisições utilizando um cliente HTTP (insomnia, postman, httpie e etc);

## Histórico de commits

Você pode verificar todo o histório de commits para saber como a aplicação foi desenvolvida passo a passo, todos eles foram feitos com base no guia de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), mantendo uma organização e descrição objetiva do que foi feito a cada mudança!
***
  <a href="https://www.linkedin.com/in/vtorvieira/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
