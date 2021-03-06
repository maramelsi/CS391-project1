const search = document.getElementById('search');
let center, markers=[], map;

function findPlaces(request){
  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) 
      for (let i = 0; i < results.length; i++) 
        createMarker(results[i]);
  });
}

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  center = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: center,
  });

  const request = {
    query: "Autism education centers in Turkey",
    fields: ["name", "geometry"],
    locationBias: {
      radius: 300, 
      center: center
    }
  };
  findPlaces(request);

  new google.maps.Marker({
    position: center,
    map: map,
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;
  const marker = new google.maps.Marker({
    map,
    label: place.name.charAt(0),
    position: place.geometry.location,
    icon: {
      path: "M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z",
      anchor: new google.maps.Point(10,15),
      fillOpacity: 1,
      fillColor: "red",
      strokeWeight: 2,
      strokeColor: "blue",
      scale: 2,
      labelOrigin: new google.maps.Point(12,9)
    }
  });
  markers.push(marker);

  google.maps.event.addListener(marker, "click", () => {
    const infowindow = new google.maps.InfoWindow({
      content: place.name
    });

    infowindow.open(map, marker);
  });
}

function setMapAll(map){
  for (let marker of markers) 
    marker.setMap(map);
  
}

search.addEventListener('click', (e)=>{
  setMapAll(null);
  markers=[];

  const query = document.getElementById('mapsearch').value;

  const request = {
    query: query,
    fields: ["name", "geometry"],
    locationBias: {
      radius: 300, 
      center: center
    }
  };
  findPlaces(request);
  new google.maps.Marker({
    position: center,
    map: map,
  });
})