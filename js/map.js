function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const coordinates = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coordinates,
  });
  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
  });
}