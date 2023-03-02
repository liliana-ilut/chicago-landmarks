// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps

var map = L.map('map', {
  center: [41.87, -87.62],
  minZoom: 2,
  zoom: 13,
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)

var myURL = jQuery('script[src$="leaf-demo.js"]')
  .attr('src')
  .replace('leaf-demo.js', '')

var myIcon = L.icon({
  // iconUrl: myURL + 'images/pin24.png',
  // iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
})

var markerClusters = L.markerClusterGroup()

for (var i = 0; i < markers.length; i++) {
  var popup =
    markers[i].landmark_name +
    '<br/><b>name</b>' +
    markers[i].landmark_address +
    '<br/><b>address:</b> ' +
    markers[i].architect +
    '<br/><b>architect:</b> ' +
    markers[i].start_built_year +
    '<br/><b>Built year:</b> ' +
    markers[i].designation_year +
    '<br/><b>Designation year:</b> ' 
    // +
    // Math.round(markers[i].alt * 0.3048) +
    // ' m' +
    // '<br/><b>Timezone:</b> ' +
    // markers[i].tz

  var m = L.marker([markers[i].lat, markers[i].lng], {
    icon: myIcon,
  }).bindPopup(popup)
  // }).bindPopup("<h5>" + "Street Address: " + "</h5>" + "<h4>" + landmark_address + "</h4><h5> Landmark Name: </h5>" + "<h4>" + landmark_name + "</h>")

  markerClusters.addLayer(m)
}

map.addLayer(markerClusters)
;