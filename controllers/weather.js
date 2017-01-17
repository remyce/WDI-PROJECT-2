const rp = require('request-promise');

function getWeather(req, res){
  console.log(req.body);
  var festival = req.body;
  var options = {
    uri: `https://api.darksky.net/forecast/033985f35788229aa3e25209acfa6f73/${festival.lat},${festival.lng}`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };

  rp(options)
  .then(function (weather) {
    return res.status(200).json({ weather: weather.daily.summary, icon: weather.daily.icon });
  })
  .catch(function (err) {
    console.log(err);
  });



}

module.exports = {
  get: getWeather
};
