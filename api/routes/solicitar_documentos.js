const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../api/public', 'solicitar_documentos.html'));
});

module.exports = router;
