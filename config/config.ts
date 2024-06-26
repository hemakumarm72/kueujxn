require('dotenv').config(); // this is important!
module.exports = {
  development: {
    username: process.env.DB_SQL_USERNAME,
    password: process.env.DB_SQL_PASSWORD,
    database: process.env.DB_SQL_DATABASE,
    host: process.env.DB_SQL_HOST,
    dialect: process.env.DB_SQL_DIALECT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
