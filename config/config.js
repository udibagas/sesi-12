require("dotenv").config();

const { PGDATABASE, PGHOST, PGPASSWORD, PGUSER } = process.env;

module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "toko_12",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    host: PGHOST,
    dialect: "postgres",
  },
};
