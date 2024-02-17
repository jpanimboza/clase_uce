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

var counties = $.ajax({
          url:"https://gist.githubusercontent.com/maptastik/df8e483d5ac1c6cae3dc4a7c02ea9039/raw/9cd46849bddcfa90aab240772a12275408d6d8d0/kyCounties.geojson",
          dataType: "json",
          success: console.log("County data successfully loaded."),
          error: function (xhr) {
            alert(xhr.statusText)
          }
        })
$.when(counties).done(function() {
            var map = L.map('map')
                .setView([37.857507, -85.632935], 7);
var kyCounties = L.geoJSON(counties.responseJSON).addTo(map);
