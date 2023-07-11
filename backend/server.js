const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mongose = require('mongoose');
require('./db');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Weather App');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
