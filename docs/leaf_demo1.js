var map = L.map('map', {
    center: [41.87, -87.62],
    minZoom: 2,
    zoom: 13,
  })

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)

var myURL = jQuery('script[src$="leaf_demo1.js"]')
  .attr('src')
  .replace('leaf_demo1.js', '')

  var myIcon = L.icon({
    // iconUrl: myURL + 'images/pin24.png',
    // iconRetinaUrl: myURL + 'images/pin48.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14],
  })  

var markerClusters = L.markerClusterGroup()  

// Loop through data
for (var i = 0; i < response.length; ++i) {

    // Set the data location property to a variable
    var lat = response[i].lat;
    var lng = response[i].lng;
    var addr = response[i].landmark_address;
    var name= response[i].landmark_name;

    // Add a new marker to the cluster group and bind a pop-up
    markerClusters.addLayer(L.marker([lat, lng])
    .bindPopup("<h5>" + "Street Address: " + "</h5>" + "<h4>" + addr + "</h4><h5> Graffiti spot: </h5>" + "<h4>" + + "</h>"));
    // .bindPopup(spotString));
  //console.log(response[i].location)
//   markerClusters.addLayer()
//   myMap.addLayer(markers);
}
map.addLayer(markerClusters)
;