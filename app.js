const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log('Middleware setup complete.');

// Routes
app.use('/api', require('./routes/index'));
console.log('Routes setup complete.');

// Static files
app.use(express.static('public'));
console.log('Static files setup complete.');

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
