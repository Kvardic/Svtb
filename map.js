var map = L.map('map', {attributionControl: false, zoomControl: false, scrollWheelZoom: false, doubleClickZoom: false}).setView([49.19362741325973, 16.60658572870174], 17);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);


// ICONS //


var churchIcon = new L.Icon({
  iconUrl: 'Pictures/church.svg',
  //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [-80, 10],
  //shadowSize: [41, 35]
});

var parkingIcon = new L.Icon({
  iconUrl: 'Pictures/parking.svg',
  //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [-60, 45],
  //shadowSize: [41, 35]
});

var tram4a9icon = new L.Icon({
  iconUrl: 'Pictures/tram4a9.svg',
  iconSize: [54, 86],
  iconAnchor: [12, 41],
  popupAnchor: [81, 37],
});

var tram5a6icon = new L.Icon({
  iconUrl: 'Pictures/tram5a6.svg',
  iconSize: [54, 86],
  iconAnchor: [12, 41],
  popupAnchor: [-84, 38],
});

var tram12icon = new L.Icon({
  iconUrl: 'Pictures/tram12.svg',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, 55],
});


// POPUPS //


var churchPopup = "kostel sv. Michala"

var parkingPopup = "Domini Park"

var tram4a9Popup = "Zelný trh"

var tram5a6Popup = "Šilingrovo náměstí"

var tram12Popup = "Šilingrovo náměstí"
   

// STYLES //


var churchPopupStyle =
        {
        'maxWidth': '140',
        'closeButton': false,
        'closeOnClick': false,
        'autoClose': false,
        'className': 'church'
        }

var tramStopStyle =
        {
        'maxWidth': '150',
        'closeButton': false,
        'closeOnClick': false,
        'autoClose': false,
        'className': 'tram'
        }

var parkingStyle =
        {
        'maxWidth': '100',
        'closeButton': false,
        'closeOnClick': false,
        'autoClose': false,
        'className': 'parking'
        }

var TramLineStyle = {
    'color': '#ff4d4d',
}

var ParkingLineStyle = {
    'color': '#4d94ff',
}


// MARKERS //


L.marker([49.19350741325973, 16.60659572870174], {icon: churchIcon}).addTo(map)
    .bindPopup(churchPopup,churchPopupStyle)
    .openPopup();

L.marker([49.194339, 16.605624], {icon: parkingIcon}).addTo(map)
    .bindPopup(parkingPopup,parkingStyle)
    .openPopup();

L.marker([49.193312, 16.609511], {icon: tram4a9icon}).addTo(map)
    .bindPopup(tram4a9Popup,tramStopStyle)
    .openPopup();

L.marker([49.192235, 16.604408], {icon: tram5a6icon}).addTo(map)
    .bindPopup(tram5a6Popup,tramStopStyle)
    .openPopup();

L.marker([49.191683, 16.605349], {icon: tram12icon}).addTo(map)
    .bindPopup(tram12Popup,tramStopStyle)
    .openPopup();
    


// GEOJSONS //


var ParkingRoute = new L.GeoJSON.AJAX("https://gist.githubusercontent.com/Kvardic/2b782ba921c24b381a15e8ef915aae6b/raw/55a73a1523f0ddbf230c2a3afd91958e716cdf94/ParkingGJ.geojson", {style: ParkingLineStyle, interactive: false});    
ParkingRoute.addTo(map);

var TramStopsRoutes = new L.GeoJSON.AJAX("https://gist.githubusercontent.com/Kvardic/68ec7d5145b23e221bffe1d65f369fe4/raw/78429c01f554125d49a9ac8067e5ff28eb4fa639/TramStopsGJ.geojson", {style: TramLineStyle, interactive: false});    
TramStopsRoutes.addTo(map);


