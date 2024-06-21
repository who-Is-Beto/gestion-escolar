const express = require('express');
const router = express.Router();
const path = require('path');
const app = require('../config/firebase');
const { collection, doc, setDoc } = require('firebase/firestore');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public', 'horario.html'));
});

module.exports = router;
