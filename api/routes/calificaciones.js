const express = require('express');
const path = require('path');
const router = express.Router();
const app = require('../config/firebase');
const { collection, doc, setDoc } = require('firebase/firestore');

// Define tus rutas aquí
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public', 'calificaciones.html'));
});

module.exports = router;
