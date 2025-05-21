let logs = []; // ✅ Definimos la variable

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');  // CORS: permite cualquier origen
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejar preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { button, timestamp } = req.body;
    logs.unshift({ button, timestamp });
    if (logs.length > 50) logs.pop();
    return res.status(200).json({ message: 'Dato recibido' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(logs);
  }

  res.status(405).json({ message: 'Método no permitido' });
}
