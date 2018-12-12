(function () {
    "use strict";
}());

//let latitude = prompt("Zadejte zeměpisnou šířku (střed Brna = 49.195040)", "")
//let longitude = prompt("Zadejte zeměpisnou délku (střed Brna = 16.608201)", "")

//const MAP = L.map("map").setView([latitude, longitude], 12);

const MAP = L.map('map', {
  	zoom: 12,
	loadingControl: true,
	fullscreenControl: true,
	fullscreenControlOptions: {
   		position: 'topleft'
  },
}).setView([49.195040, 16.608201], 12);


const URL = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png";
const URL_OSM = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const URL_GMAPS = "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&scale=2";

const CARTO = L.tileLayer(URL, {maxZoom: 22, minZoom:12});
const CARTO2 = L.tileLayer(URL, {maxZoom: 22, minZoom:12});
const OSM = L.tileLayer(URL_OSM, {maxZoom: 22, minZoom:12});
const GMAPS = L.tileLayer(URL_GMAPS, {
    subdomains: ["mt0","mt1","mt2","mt3"],maxZoom: 22, minZoom: 12
});

const wmsLayer = new L.tileLayer.wms('http://geoportal.cuzk.cz/WMS_ORTOFOTO_PUB/WMService.aspx', {
	layers: "GR_ORTFOTORGB",
	format: "image/png",
	transparent: true,
	maxZoom: 22,
	minZoom: 12
})
const wmsLayer_bckgr = new L.tileLayer.wms('http://geoportal.cuzk.cz/WMS_ORTOFOTO_PUB/WMService.aspx', {
	layers: "GR_ORTFOTORGB",
	format: "image/png",
	transparent: true,
	opacity: 0.4,
	maxZoom: 22,
	minZoom: 12
})



MAP.addLayer(CARTO);
MAP.addLayer(wmsLayer_bckgr);


const LEGEND = L.control({position: 'bottomright'});

LEGEND.onAdd = function (map) {

    const div = L.DomUtil.create('div', 'info legend'),
        churches = ["<center>Římskokatolické", "<center>Husitské", "<center>Evangelické"],
        insignia = ["style/mainPage/rimkat_insignia.svg","style/mainPage/husit_insignia.svg", "style/mainPage/evang_insignia.svg"];

    div.innerHTML += "<center><b>KOSTELY</b><br><br>"

    for (var i = 0; i < churches.length; i++) {
        div.innerHTML +=
            churches[i] + (" <img src="+ insignia[i] +" height='50' width='50'>") +'<br>';
    }
    return div
};

LEGEND.addTo(MAP);


const iconEvang = L.Icon.extend ({
    iconUrl: "../style/mainPage/evang_insignia.svg",
    iconSize: [40, 40]
});

const iconHusit = L.Icon.extend ({
    iconUrl: "../style/mainPage/husit_insignia.svg",
    iconSize: [40, 40]
});

const iconRimkat = L.Icon.extend ({
    iconUrl: "../style/mainPage/rimkat_insignia.svg",
    iconSize: [40, 40]
});




const RIMKAT = "https://gist.githubusercontent.com/Kvardic/49833d16c3293ec56e1cf8f6ce72c310/raw/4b550d24465e1f65c75217a5616d170a83010323/rimkat.geojson";

fetch(RIMKAT)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const rkchurches = L.geoJSON(data, {pointToLayer: function (feature, latlng) {return new L.Marker(latlng, {icon: new iconRimkat({iconUrl: "style/mainPage/rimkat_insignia.svg", iconSize: [40, 40]})})}, onEachFeature: function (feature, layer) {const popupText = '<center>' + '<b>' + feature.properties.nazev; layer.bindPopup(popupText); layer.on('mouseover', function (e) {
            this.openPopup();
        });
        layer.on('mouseout', function (e) {
            this.closePopup();
        }); layer.on ('click', function () { const link = feature.properties.odkaz;
            window.open(link, '_blank')
        });}}).addTo(MAP);controlLayers.addOverlay(rkchurches, 'Římskokatolické kostely');
    });


const HUSIT = "https://gist.githubusercontent.com/Kvardic/1ed46d50e8691b23e36dc8450244197d/raw/852589a33764b825fc3d670985453082cd57b3e4/husit.geojson";

fetch(HUSIT)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const hchurches = L.geoJSON(data, {pointToLayer: function (feature, latlng) {return new L.Marker(latlng, {icon: new iconHusit({iconUrl: "style/mainPage/husit_insignia.svg", iconSize: [40, 40]})})}, onEachFeature: function (feature, layer) {const popupText = '<center>' + '<b>' + feature.properties.nazev; layer.bindPopup(popupText); layer.on('mouseover', function (e) {
            this.openPopup();
        });
        layer.on('mouseout', function (e) {
            this.closePopup();
        }); layer.on ('click', function () { const link = feature.properties.odkaz;
        	window.open(link, '_blank')
        })}}).addTo(MAP);controlLayers.addOverlay(hchurches, 'Husitské kostely');
    });


const EVANG = "https://gist.githubusercontent.com/Kvardic/0f3d78dcd14a51830dad76314268683c/raw/c9ce118f3711700bc584e80f9263013afcbe0ffe/evang.geojson";

fetch(EVANG)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const echurches = L.geoJSON(data, {pointToLayer: function (feature, latlng) {return new L.Marker(latlng, {icon: new iconEvang({iconUrl: "style/mainPage/evang_insignia.svg", iconSize: [40, 40]})})}, onEachFeature: function (feature, layer) {const popupText = '<center>' + '<b>' + feature.properties.nazev; layer.bindPopup(popupText);layer.on('mouseover', function (e) {
            this.openPopup();
        });
        layer.on('mouseout', function (e) {
            this.closePopup();
        }); layer.on ('click', function () { const link = feature.properties.odkaz;
            window.open(link, '_blank')
        });}}).addTo(MAP);controlLayers.addOverlay(echurches, 'Evangelické kostely');
    });


const baseLayers = {
    "Carto + Ortofoto": CARTO && wmsLayer_bckgr,
    "Carto": CARTO2,
    "OpenStreetMap": OSM, 
    "Google Maps": GMAPS, 
    "Ortofoto": wmsLayer
};


const TEXT = L.control({position: 'bottomleft'});

TEXT.onAdd = function (map) {

    const div = L.DomUtil.create('div', 'info2 legend');

    div.innerHTML += "<center><b>Kliknutím na znak bude v nové záložce prohlížeče otevřen daný záznam kostela.</b>"
    return div
};

TEXT.addTo(MAP);

MAP.attributionControl.addAttribution('Made and managed by <a href="kontakt.html">Ondřej Kvarda</a>, ©2018');
const controlLayers = L.control.layers(baseLayers).addTo(MAP);



 document.getElementById('1').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

document.getElementById('2').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

document.getElementById('3').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

document.getElementById('4').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

document.getElementById('5').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

document.getElementById('6').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

document.getElementById('7').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

document.getElementById('8').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

document.getElementById('9').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

document.getElementById('10').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

document.getElementById('11').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

document.getElementById('12').onclick = function(abc) {
        var pos = abc.target.getAttribute('data-position');
        var zoom = abc.target.getAttribute('data-zoom');
        if (pos && zoom) {
            var locat = pos.split(',');
            var zoo = parseInt(zoom);
            MAP.setView(locat, zoo, {animation: true});
            return false;
        }
    }

var sidebar = L.control.sidebar({
    autopan: false,       
    closeButton: true,    
    container: 'sidebar', 
    position: 'left',     
}).addTo(MAP);







    