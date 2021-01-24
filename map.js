var map = L.map('map', {attributionControl: false}).setView([49.19362741325973, 16.60658572870174], 17);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}).addTo(map);


var greenIcon = new L.Icon({
  iconUrl: 'bitmap.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -27],
  shadowSize: [41, 41]
});

var customPopup = "<b>kostel sv. Michala"
    
var customOptions =
        {
        'maxWidth': '140',
        'closeButton' : false,
        'className' : 'custom',
        'closeOnClick' : false
        }

L.marker([49.19355741325973, 16.60659572870174], {icon: greenIcon}).addTo(map)
    .bindPopup(customPopup,customOptions)
    .openPopup();



