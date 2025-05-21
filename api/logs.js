export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');  // Permite que cualquier origen acceda

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
