const App = App || {};
const google = google;

App.init = function() {
  this.apiUrl = 'http://localhost:3000/api';
  this.$main  = $('main');
  $('.home').on('click', this.homepage.bind(this));
  $('.register').on('click', this.register.bind(this));
  $('.login').on('click', this.login.bind(this));
  $('.logout').on('click', this.logout.bind(this));
  $('.map').on('click', this.createMap.bind(this));
  this.$main.on('submit', 'form', this.handleForm);

  if (this.getToken()) {
    this.loggedInState();
  } else {
    this.loggedOutState();
  }
};

App.homepage = function(){
  this.$main.html(`
    <h1 class="animated infinite bounce">RIOT</h1>
    <p>Riot is a web application for festival listings around the globe and daily weather updates.<p>
    <p>Created with &hearts; at GA by Remyce</p>
    `);
  console.log('You clicked');
};

App.createMap = function() {
  const canvas = document.getElementById('canvas');
  const mapOptions = {
    zoom: 3,
    center: new google.maps.LatLng(53.481878, -2.263164),
    styles: [{'featureType': 'administrative','elementType': 'all','stylers':[{'color': '#054c78'},{'weight': '0.01'}]},{'featureType':'administrative.country','elementType':'all','stylers':[{'color':'#054c78'}]},{'featureType':'landscape','elementType':'all','stylers':[{'color':'#fefaed'}]},{'featureType':'poi','elementType':'all','stylers':[{'color':'#fefaed'}]},{'featureType':'road','elementType':'all','stylers':[{'color':'#fefaed'}]},{'featureType':'road.arterial','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'all','stylers':[{'color':'#bad8ea'},{'visibility':'on'}]}],
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(canvas, mapOptions);
  this.getFestivals();
};

App.getFestivals = function(){
  return $.get(`${this.apiUrl}/festivals`).done(this.loopThroughFestivals.bind(this));
};

App.loopThroughFestivals = function(data) {
  console.log(data.festivals.length, 'festivals');
  return $.each(data.festivals, this.createMarkerForFestival);
};

App.createMarkerForFestival = function(index, festival){
  const latlng = new google.maps.LatLng(festival.lat, festival.lng);

  console.log(festival.lat, festival.lng);

  var icon = {
    url: '/images/marker.png',
    scaledSize: new google.maps.Size(30,45)
  };

  const marker = new google.maps.Marker({
    position: latlng,
    map: App.map,
    animation: google.maps.Animation.DROP,
    icon
  });
  App.addInfoWindowForFestival(festival, marker);
};

App.addInfoWindowForFestival = function(festival, marker) {
  google.maps.event.addListener(marker, 'click', () => {
    if (typeof this.infoWindow !=='undefined')this.infoWindow.close(marker,'click');

    App.ajaxRequest('http://localhost:3000/api/weather', 'POST', festival,(data) => {
      console.log(data);
      this.infoWindow = new google.maps.InfoWindow({
        maxWidth: 200,
          // maxHeight: 50,
          // margin: 0,
          // arrowSize: 3,
        content: `
        <div class="infoWindow">
        <h2 style="color:#F26521;">${ festival.name}</h2>
        <h6>${ festival.location}</h6>
        <h6 style="color:#E1BB32;">${ festival.date}</h6>
        <p>${ festival.description}</p>
        <p>Genre: ${festival.genre}</p>
        <p>${festival.website}</p>
        <div class="weather">
        <h6>Weather</h6>
        <div class="summary">
        <p>${ data.weather }</p>
        </div>
        <div class="weatherXIcon">
        <p>${ data.icon }</p>
        </div>
        <div class="weatherIcon">
        <img src="${App.getIcon(data.icon)}">
        </div>
        <div class="weatherTemperature">
        <p>${ data.temperature }°F</p>
        </div>
        </div>
        </div>
        `});
      this.infoWindow.open(this.map, marker);
      this.map.setCenter(marker.getPosition());
    });
  });
};

App.getIcon = function(icon) {
  var image;
  switch (icon) {
    case 'rain':
      image = '../images/rain.png';
      break;
    case 'clear-day':
      image = '../images/clear-day.png';
      break;
    case 'clear-night':
      image = '../images/clear-night.png';
      break;
    case 'partly-cloudy-day':
      image = '../images/partly-cloudy-day.png';
      break;
    case 'partly-cloudy-night':
      image = '../images/partly-cloudy-night';
      break;
    case 'cloudy':
      image = '../images/cloudy.png';
      break;
    case 'sleet':
      image = '../images/sleet.png';
      break;
    case 'snow':
      image = '../images/snow.png';
      break;
    case 'wind':
      image = '../images/wind.png';
      break;
    case 'fog':
      image = '../images/fog.png';
      break;
    default:
      image = '../images/cloudy.png';
      break;
  }
  return image;
};

App.loggedInState = function(){
  $('.loggedIn').show();
  $('.map').show(); //click back to the map when user clicks homepage?
  $('.loggedOut').hide();
  this.$main.html(`
    <div id="canvas"></div>
    `);
  this.createMap();
};

App.loggedOutState = function(){
  $('.loggedIn').hide();
  $('.loggedOut').show();
  this.homepage();
};

App.register = function(e){
  if (e) e.preventDefault();
  this.$main.html(`
          <h2>Register</h2>
          <form method="post" action="/register">
          <div class="form-group">
          <input class="form-control" type="text" name="user[username]" placeholder="Username">
          </div>
          <div class="form-group">
          <input class="form-control" type="email" name="user[email]" placeholder="Email">
          </div>
          <div class="form-group">
          <input class="form-control" type="password" name="user[password]" placeholder="Password">
          </div>
          <div class="form-group">
          <input class="form-control" type="password" name="user[passwordConfirmation]" placeholder="Password Confirmation">
          </div>
          <input class="btn btn-primary" type="submit" value="Register">
          </form>
          `);
};

App.login = function(e) {
  e.preventDefault();
  this.$main.html(`
            <h2>Login</h2>
            <form method="post" action="/login">
            <div class="form-group">
            <input class="form-control" type="email" name="email" placeholder="Email">
            </div>
            <div class="form-group">
            <input class="form-control" type="password" name="password" placeholder="Password">
            </div>
            <input class="btn btn-primary" type="submit" value="Login">
            </form>
            `);
};

App.logout = function(e){
  e.preventDefault();
  this.removeToken();
  this.loggedOutState();
};


App.handleForm = function(e){
  console.log(this);
  e.preventDefault();
  const url    = `${App.apiUrl}${$(this).attr('action')}`;
  const method = $(this).attr('method');
  const data   = $(this).serialize();
  return App.ajaxRequest(url, method, data, data => {
    if (data.token) App.setToken(data.token);
    App.loggedInState();
  });
};

App.ajaxRequest = function(url, method, data, callback){
  return $.ajax({
    url,
    method,
    data,
    beforeSend: this.setRequestHeader.bind(this)
  })
  .done(callback)
  .fail(data => {
    console.log(data);
  });
};

App.setRequestHeader = function(xhr) {
  return xhr.setRequestHeader('Authorization', `Be${this.getToken()}`);
};
App.setToken = function(token){
  return window.localStorage.setItem('token', token);
};
App.getToken = function(){
  return window.localStorage.getItem('token');
};
App.removeToken = function(){
  return window.localStorage.clear();
};

$(App.init.bind(App));
