const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const User = require('./models/user');
const Location = require('./models/location');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')

const mongoose = require('mongoose');
require('./db');

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors())
// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}


// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Weather App');
});

app.get('/api/weather/:location', (req, res) => {
  const location = req.params.location;
  const data = weatherData[location];

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ error: 'Weather data not for '})
  }
  
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ error: 'Weather data not found for the specified location' });
  }
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

app.post('/location', async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).json(location);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
