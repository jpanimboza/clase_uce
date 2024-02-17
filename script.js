var airports = $.ajax({
            url: "map_airport.geojson",
            dataType: "json",
        })
$.when(airports).done(function() {
            var map = L.map('map')
                .setView([-37.857507, -85.632935], 7);

            var basemap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
                subdomains: 'abcd',
                maxZoom: 19
            }).addTo(map);
            // Add requested external GeoJSON to map
            var kyCounties = L.geoJSON(airports.responseJSON).addTo(map);
        });
