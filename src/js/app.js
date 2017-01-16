const App = App || {};
const google = google;

App.init = function() {
  this.apiUrl = 'http://localhost:3000/api';
  this.$main  = $('main');
  $('.register').on('click', this.register.bind(this));
  $('.login').on('click', this.login.bind(this));
  $('.logout').on('click', this.logout.bind(this));
  // $('.home').on('click', this.homepage.bind(this));
  $('.map').on('click', this.createMap.bind(this));
  this.$main.on('submit', 'form', this.handleForm);

  if (this.getToken()) {
    this.loggedInState();
  } else {
    this.loggedOutState();
  }
};

App.createMap = function() {
  const canvas = document.getElementById('canvas');
  const mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(53.481878, -2.263164),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(canvas, mapOptions);
  this.getFestivals();
};

App.getFestivals = function(){
  return $.get(`${this.apiUrl}/festivals`).done(this.loopThroughFestivals.bind(this));
};

App.loopThroughFestivals = function(data) {
  return $.each(data.festivals, this.createMarkerForFestival.bind(this));
};

App.createMarkerForFestival = function(index, festival){
  const latlng = new
  google.maps.LatLng(festival.lat, festival.lng);

  var icon = {
    url: '/images/marker.png',
    scaledSize: new google.maps.Size(40,65),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };

  const marker = new
  google.maps.Marker({
    position: latlng,
    map: this.map,
    animation: google.maps.Animation.DROP,
    icon
  });
  this.addInfoWindowForFestival(festival, marker);
};

App.addInfoWindowForFestival = function(festival, marker) {
  google.maps.event.addListener(marker, 'click', () => {
    if (typeof this.infoWindow !== 'undefined')
      this.infoWindow.close();
    this.infoWindow = new google.maps.InfoWindow({
      content: `
    <div class="infoWindow">
    <img class="festivalImage" src="${ festival.image}">
    <h3>${ festival.name} </h3>
    <p> ${ festival.description} </p>
    <p> ${ festival.location} </p>
    <p> ${ festival.date} </p>
    </div>
    `
    });
    App.ajaxRequest('http://localhost:3000/api/weather', 'POST', festival, (data) => {
      $('.infoWindow').append(`
        <p>${data.weather}</p>
        <p>${data.weather.icon}</p>
        `);
    });
    this.infoWindow.open(this.map, marker);
    this.map.setCenter(marker.getPosition());
  });
};

App.loggedInState = function(){
  $('.loggedIn').show();
  $('.loggedOut').hide();
  this.$main.html(`
    <div id="canvas"></div>
     `);
  this.createMap();
};

App.loggedOutState = function(){
  $('.loggedIn').hide();
  $('.loggedOut').show();
  this.register();
  // this.$main.html(`
  //   <div id="canvas"></div>
  //    `);
  // this.createMap();
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
  return xhr.setRequestHeader('Authorization', `Bearer ${this.getToken()}`);
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
