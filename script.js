let map = L.map('map').setView([-0.22,-78.51],10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
fetch("map_airport.geojson").then(res => res.json()).then(data => {
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data,{
      pointToLayer: function(feature,layer){
        var marker = L.marker(layer);
        marker.bindPopup('<b>AIRPORT NAME : </b>'+feature.properties.name+' ('+feature.properties.abbrev+')<br>\
        <b>TYPE OF AIPORT : </b>'+feature.properties.type+'<br>\
        <a href="'+feature.properties.wikipedia+'">Wikipedia</a>').addTo(map);
        marker.addTo(map)
        return marker;
      }
    }
