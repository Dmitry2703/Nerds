// Contacts Form Open and Close

var link = document.querySelector(".js-contacts__btn");
var popup = document.querySelector(".js-popup");
var close = document.querySelector(".js-popup__close");
var cancel = document.querySelector(".js-popup__cancel");
var login = popup.querySelector("[name=login]");

link.addEventListener("click", function(event) {
	event.preventDefault();
  popup.classList.add("popup--show");
  login.focus(); // Focus on Form Input Name
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup--show");
});

cancel.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("popup--show")) {
      popup.classList.remove("popup--show");
    }
  }
});

// Map

var map;
function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.9390979,30.319898)
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  var image = "img/map-marker.png";
  var myLatLng = new google.maps.LatLng(59.93875,30.3232);
  var beachMarker = new google.maps.Marker( {
    position: myLatLng,
    map: map,
    icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


