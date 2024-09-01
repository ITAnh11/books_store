const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const { PORT_SERVER } = require('./config.js');

const { db } = require( './database/models/index.js');

const app = express();

// Load SSL certificate and private key
const options = {
  key: fs.readFileSync('private.key'),
  cert: fs.readFileSync('certificate.crt')
};

// Middleware to redirect HTTP to HTTPS
const redirectToHTTPS = (req, res, next) => {
  if (!req.secure) {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
};

// Apply the redirect middleware
app.use(redirectToHTTPS);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Create HTTPS server
https.createServer(options, app).listen(PORT_SERVER, () => {
  console.log(`Server listening on port https://localhost:${PORT_SERVER}`);
});


const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DEV_POSTGRES_DB,
  process.env.DEV_POSTGRES_USER,
  process.env.DEV_POSTGRES_PASSWORD,
  {
    host: process.env.DEV_POSTGRES_HOST,
    port: process.env.DEV_POSTGRES_PORT,
    dialect: 'postgres',
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();
