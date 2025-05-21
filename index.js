const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

let logs = [];

app.use(cors());
app.use(express.json());

app.post('/api/logs', (req, res) => {
  const { button, timestamp } = req.body;
  logs.unshift({ button, timestamp });
  if (logs.length > 50) logs.pop(); // límite de entradas
  res.status(200).json({ message: 'Dato guardado' });
});

app.get('/api/logs', (req, res) => {
  res.json(logs);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
