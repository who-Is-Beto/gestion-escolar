const express = require('express');
const router = express.Router();

console.log('Setting up routes...');

// Ejemplo de una ruta API
router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de gestión escolar.' });
});

console.log('Routes setup complete.');

module.exports = router;
