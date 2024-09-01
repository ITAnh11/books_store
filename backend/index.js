const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const { PORT_SERVER } = require('./src/config/server.config.js');

const app = require('./src/routes/index.route.js');

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

// Create HTTPS server
https.createServer(options, app).listen(PORT_SERVER, () => {
  console.log(`Server listening on port https://localhost:${PORT_SERVER}`);
});

const db = require('./src/database/models/index.js');

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });