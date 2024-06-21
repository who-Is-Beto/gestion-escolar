const express = require('express');
const router = express.Router();
const path = require('path');
const app = require('../config/firebase');
const { collection, doc, setDoc } = require('firebase/firestore');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../c./public', 'index.html'));
});

const estudiantesRef = collection(app.db, "estudiantes");

router.post('/registro', async (req, res) => {
  try {
    const { firstName, lastName, birthYear, curp, boleta } = req.body;

    // Guardar los datos en Firestore
    await setDoc(doc(estudiantesRef, boleta), {
      firstName,
      lastName,
      birthYear,
      curp,
      boleta
    });

    // Redirigir a la página de datos académicos (ajusta la ruta según tu estructura)
    res.redirect('/datos_academicos');
  } catch (error) {
    console.error('Error al registrar el documento:', error);
    res.status(500).send('Error interno al registrar el usuario');
  }
});

module.exports = router;
