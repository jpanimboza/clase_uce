let map = L.map('map').setView([-0.22,-78.51],10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.name);
}

// L.MarkerClusterGroup extends L.FeatureGroup
// by clustering the markers contained within
let markers = L.markerClusterGroup();

var geojsonLayer = new L.GeoJSON.AJAX("map_airport.geojson");
geojsonLayer.addTo(mymap);
