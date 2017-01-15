const mongoose = require('mongoose');

const festivalSchema = mongoose.Schema({
  name: { type: String, trim: true, require: true },
  description: { type: String, trim: true },
  image: { type: String, trim: true, require: true },
  website: { type: String, trim: true, require: true },
  location: { type: String, trim: true, require: true },
  country: { type: String, trim: true, require: true },
  date: { type: String, trim: true, require: true },
  genre: { type: String, trim: true, require: true },
  lat: { type: String, trim: true, require: true },
  lng: { type: String, trim: true, require: true }
});

module.exports = mongoose.model('Festival', festivalSchema);
