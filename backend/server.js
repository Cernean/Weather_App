const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const User = require('./models/user');
const Location = require('./models/location');

const mongoose = require('mongoose');
require('./db');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Weather App');
});

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
