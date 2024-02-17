let map = L.map('map').setView([-0.22,-78.51],10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// adding geojson by fetch
// of course you can use jquery, axios etc.

function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.nazwa);
}

fetch("map_airport.geojson")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // use geoJSON
    L.geoJSON(data, {
      onEachFeature: onEachFeature,
    }).addTo(map);
  });
