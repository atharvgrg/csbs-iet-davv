const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// API routes
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.get('/api/demo', (req, res) => {
  res.json({ message: 'Hello from IET DAVV CSBS!' });
});

module.exports = app;
