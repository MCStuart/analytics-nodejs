require('dotenv').config();

// Server
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const server = require('http').createServer(app);

// Config
const port = process.env.SERVER_PORT;
if (process.send.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}