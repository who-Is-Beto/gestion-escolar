const express = require('express');
const path = require('path');
const router = express.Router();

// Define tus rutas aquí
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../api/public', 'calificaciones.html'));
});

module.exports = router;
