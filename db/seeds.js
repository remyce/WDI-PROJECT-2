const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config   = require('../config/config');
const Festival = require('../models/festival');

mongoose.connect(config.db);

Festival.collection.drop();

const festivals = [
  new Festival({
    name: 'Fat Out Fest',
    description:	'Experimental music and art festival',
    image:	'fatoutfest.jpg',
    website:	'http://www.fatout.co.uk',
    location:	'Islington Mill, Salford',
    country:	'UK',
    date:	'14th-16th April 2017',
    genre: 'Various',
    lat:	'53.481878',
    lng:	'-2.263164'
  }),
  new Festival({
    name:	'BoomTown Fair',
    description: 'A multi-genre music and arts festival.',
    image: 'boomtown.jpg',
    website:	'http://www.boomtownfair.co.uk/',
    location:	'Temple Valley, Winchester',
    country:	'UK',
    date:	'10th-13th August 2017',
    genre:	'D&B, Oldschool Jungle, House, Garage, Dubstep, Reggae, Dub, Punk Rock, Swing, Folk, World, Hip-Hop',
    lat:	'51.051546',
    lng:	'-1.245557'
  }),
  new Festival({

  })
];

festivals.forEach(festival => {
  Festival
  .create(festival, (err, festival) => {
    if (err) return console.log(err);
    return console.log(`${festival.name} was saved`);
  });
});
