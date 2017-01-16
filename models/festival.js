// "http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=bdf297312fac0e386a0e18d003d67c51"

const mongoose = require('mongoose');

const festivalSchema = mongoose.Schema({
  name: { type: String, trim: true, require: true },
  description: { type: String, trim: true },
  image: { type: String, trim: true, require: true },
  website: { type: String, trim: true, require: true },
  location: { type: String, trim: true, require: true },
  country: { type: String, trim: true, require: true },
  date: { type: String, trim: true, require: true },
  startUnix: { type: String },
  endUnix: {type: String },
  genre: { type: String, trim: true, require: true },
  lat: { type: String, trim: true, require: true },
  lng: { type: String, trim: true, require: true }
});

module.exports = mongoose.model('Festival', festivalSchema);
