require('dotenv-flow').config();

module.exports = {
  server: {
    PORT: process.env.PORT,
  },
  MongoDB: {
    dbURI: process.env.DB_URI,
    poolSize: process.env.POOL_SIZE,
    useNewUrlParser: process.env.USE_NEW_URL_PARSER,
    useCreateIndex: process.env.USE_CREATE_INDEX,
    useUnifiedTopology: process.env.USE_UNIFIED_TOPOLOGY,
    useFindAndModify: process.env.USE_FIND_AND_MODIFY,
    socketTimeoutMS: process.env.SOCKET_TIMEOUT_MS,
    connectTimeoutMS: process.env.CONNECT_TIMEOUT_MS,
  },
  PostgresSQL: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
  },
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY,
    expires: process.env.TOKEN_EXPIRES_IN_DAY
  },
  encryptionKey: process.env.ENCRYPTION_KEY
};
