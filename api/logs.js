export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('Datos recibidos:', req.body);
    return res.status(200).json({ message: 'Dato recibido' });
  }

  if (req.method === 'GET') {
    return res.status(200).json({ message: 'GET funciona' });
  }

  res.status(405).json({ message: 'Método no permitido' });
}
