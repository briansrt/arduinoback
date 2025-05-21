const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
let logs = [];

app.use(cors());
app.use(express.json());

app.post('/api/logs', (req, res) => {
  const { button, timestamp } = req.body;
  logs.unshift({ button, timestamp });
  if (logs.length > 50) logs.pop();
  res.status(200).json({ message: 'Dato guardado' });
});

app.get('/api/logs', (req, res) => {
  res.json(logs);
});

module.exports = app;
module.exports.handler = serverless(app); // 👈 Importante para Vercel
