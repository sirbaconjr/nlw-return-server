# Feedget Server

## Pré-requisitos

* [Node.js](https://nodejs.org/en/) - Projeto desenvolvido com v16.14.2
* Banco MongoDB com Replica Set ([limitação do prisma](https://www.prisma.io/docs/concepts/database-connectors/mongodb#error-transactions-are-not-supported-by-this-deployment)) - Recomendo o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Subindo a aplicação

```shell
cp .env.example .env
npm install
npm run dev
```
