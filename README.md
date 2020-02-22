# Backend

### Technologies

Backend uses a number of open source projects to work properly:

- [node.js]
- [Express]
- [MongoDb]
- [PostgresSQL]

### Installation

Backend requires [Node.js](https://nodejs.org/) v8+ to run.

```sh
$ cd Backend
```

Create a .env.local for development like .env.example
Create a postgres database "dashboard" and enter your credentials in .env.local file for both postgres and mongodb

```sh
$ npm install
$ npm run seed
$ npm start
```
