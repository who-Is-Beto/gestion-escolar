const express = require('express');
const router = express.Router();
const path = require('path');
const { addAlumno, getUsuarios } = require('../controllers/usuarioController'); // Importa la función addAlumno

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html')); // Ajusta la ruta de acceso al archivo index.html según tu estructura
});

router.post('/registro', addAlumno); // Define la ruta POST para registrar un alumno usando la función addAlumno
router.get('/api/usuarios', getUsuarios); // Ruta para obtener todos los usuarios

module.exports = router;
