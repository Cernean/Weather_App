const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId },
});

const Location = mongoose.model('Location', locationSchema);

module.export = Location 