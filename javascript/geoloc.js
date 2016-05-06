//Check If Browser Supports HTML5 GeoLocation API. Google Chrome, Firefox 3.5 and higher, Opera 10.6 and higher, Internet Explorer 9, Safari 5 are supported.

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  error('Geo Location is not supported');
}

//Get Visitors Current Position

navigator.geolocation.getCurrentPosition(success);

function success(position) {
     var lat = position.coords.latitude;
     var long = position.coords.longitude;
}

//Add Your Position To Google Maps


var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
  var options = {
    zoom: 15,
    center: coords,
    mapTypeControl: false,
    navigationControlOptions: {
    	style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcontainer"), options);

  var marker = new google.maps.Marker({
      position: coords,
      map: map,
      title:"You are here!"
  });