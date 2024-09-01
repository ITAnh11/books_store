const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

module.exports =  {
  development: {
    username: process.env.DEV_POSTGRES_USER,
    password: process.env.DEV_POSTGRES_PASSWORD,
    database: process.env.DEV_POSTGRES_DB,
    host: process.env.DEV_POSTGRES_HOST,
    port: process.env.DEV_POSTGRES_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  // test: {
  //   username: process.env.CI_DB_USERNAME,
  //   password: process.env.CI_DB_PASSWORD,
  //   database: process.env.CI_DB_NAME,
  //   host: '127.0.0.1',
  //   port: 3306,
  //   dialect: 'mysql',
  //   dialectOptions: {
  //     bigNumberStrings: true,
  //   },
  // },
  // production: {
  //   username: process.env.PROD_POSTGRES_USER,
  //   password: process.env.PROD_POSTGRES_PASSWORD,
  //   database: process.env.PROD_POSTGRES_DB,
  //   host: process.env.PROD_POSTGRES_HOST,
  //   port: process.env.PROD_POSTGRES_PORT,
  //   dialect: 'postgres',
  //   dialectOptions: {
  //     bigNumberStrings: true,
  //     ssl: {
  //       ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt'),
  //     },
  //   },
  // },
};