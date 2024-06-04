const express = require('express');
const router = express.Router();

router.use('/users', require('./userRoutes'));
router.use('/posts', require('./postRoutes'));

module.exports = router;
