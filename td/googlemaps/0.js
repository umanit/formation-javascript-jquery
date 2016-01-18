"use strict";

$(document).ready(function(){

    // 2. Créer une carte dont le centre se trouve en 47.18863349999999, -1.5519100999999864 (1 rue Victor Hugo à Rezé).

    var mapElement = document.getElementById("map"), // L'élément DOM qui va contenir la carte
        mapOptions = { // Options de la carte
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: new google.maps.LatLng(47.18863349999999, -1.5519100999999864),
            zoom: 8
        },
        map = new google.maps.Map(mapElement, mapOptions);

    // 3. Écrire un script pour transformer les données du tableau HTML en tableau JSON.

    var restos = [];

    var lines = $("#restos tbody tr");

    lines.each(function(){

        var tds = $(this).children("td");

        var name = tds.eq(0).text(),
            lat = tds.eq(1).text(),
            lng = tds.eq(2).text(),
            id = $(this).data("resto-identifier");

        var resto = {
            name: name,
            lat: lat,
            lng: lng,
            id: id
        };

        restos.push(resto);
    });

    // 4. Parcourir le JSON obtenu pour créer des markers et les ajouter à la carte.

    // Une fois que toutes les tuiles de la carte sont chargées
    google.maps.event.addListenerOnce(map, "tilesloaded", function() {

        // Zone des markers
        var bounds = new google.maps.LatLngBounds();

        for (var i=0; i<restos.length; i++) {

            var resto = restos[i];

            var markerPosition = new google.maps.LatLng(resto.lat, resto.lng),
                markerOptions = {
                    map: map,
                    position: markerPosition,
                    title: resto.name
                },
                marker = new google.maps.Marker(markerOptions);

            // On étend la zone des markers
            bounds.extend(markerPosition);

            // Identifiant du restaurant
            marker.restoIdentifier = resto.id;

            // 6. Au click sur un des markers, ajouter la classe "success" à la ligne correspondante dans le tableau #restos.
            google.maps.event.addListener(marker, "click", function() {
                var restoIdentifier = this.restoIdentifier;
                lines
                    .removeClass("info")
                    .filter('[data-resto-identifier="' + restoIdentifier + '"]')
                    .addClass("info")
                ;
            });
        }

        // 5. Centrer la carte sur les markers
        map.setCenter(bounds.getCenter());
        map.fitBounds(bounds);
        if (map.getZoom() > 13) { // Zoom max
            map.setZoom(13);
        }
    });

});
