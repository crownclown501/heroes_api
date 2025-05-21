const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors()); // Permite peticiones desde cualquier origen (solo para desarrollo)

const API_KEY = '1b7b3ec81deded53b02e8b1781b51ff3'; // tu API key

// Endpoint para buscar héroes
app.get('/api/search/:name', async (req, res) => {
  try {
    const url = `https://www.superheroapi.com/api.php/${API_KEY}/search/${encodeURIComponent(req.params.name)}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error al consultar la API', details: err.message });
  }
});

// Endpoint para buscar por ID
app.get('/api/:id', async (req, res) => {
  try {
    const url = `https://www.superheroapi.com/api.php/${API_KEY}/${req.params.id}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error al consultar la API', details: err.message });
  }
});

app.listen(4200, () => console.log('Proxy corriendo en http://localhost:4200'));
