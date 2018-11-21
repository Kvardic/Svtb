(function () {
    "use strict";
}());

let latitude = prompt("Zadejte zeměpisnou šířku (střed Brna = 49.195040)", "")
let longitude = prompt("Zadejte zeměpisnou délku (střed Brna = 16.608201)", "")

const MAP = L.map("map").setView([latitude, longitude], 13);

//const MAP = L.map("map").setView([49.195040, 16.608201], 13);


const URL = "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png";
const URL_OSM = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const URL_GMAPS = "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&scale=2";

const CARTO = L.tileLayer(URL, {maxZoom: 22, minZoom:13});
const CARTO2 = L.tileLayer(URL, {maxZoom: 22, minZoom:13});
const OSM = L.tileLayer(URL_OSM, {maxZoom: 22, minZoom:13});
const GMAPS = L.tileLayer(URL_GMAPS, {
    subdomains: ["mt0","mt1","mt2","mt3"],maxZoom: 22, minZoom: 13
});
const wmsLayer = new L.tileLayer.wms('http://geoportal.cuzk.cz/WMS_ORTOFOTO_PUB/WMService.aspx', {
	layers: "GR_ORTFOTORGB",
	format: "image/png",
	transparent: true,
	maxZoom: 22,
	minZoom: 13
})
const wmsLayer_bckgr = new L.tileLayer.wms('http://geoportal.cuzk.cz/WMS_ORTOFOTO_PUB/WMService.aspx', {
	layers: "GR_ORTFOTORGB",
	format: "image/png",
	transparent: true,
	opacity: 0.4,
	maxZoom: 22,
	minZoom: 13
})


const Icon_RimKat = L.icon ({
	iconUrl: "style/mainPage/rimkat_insignia.svg",
	iconSize: [50,50]
})

const Icon_Husit = L.icon ({
	iconUrl: "style/mainPage/husit_insignia.svg",
	iconSize: [60,60]
})

const Icon_Evang = L.icon ({
	iconUrl: "style/mainPage/evang_insignia.svg",
	iconSize: [60,60]
})


MAP.addLayer(CARTO);
MAP.addLayer(wmsLayer_bckgr);


const LINE = L.polyline([[49.195040, 16.608201], [49.195331, 16.607156], [49.196798, 16.605713], [49.196509, 16.604839], [49.197335, 16.604547], [49.197246, 16.603933], [49.197453, 16.603871], [49.197393, 16.603383], [49.197460, 16.603359]], {color: "green", lineJoin: 'round', dashArray: "10,5"});
LINE.bindPopup("<center>Trasa z Náměstí Svobody k Českobratrskému evangelickému chrámu J. A. Komenského.");
MAP.addLayer(LINE);

const POLYGON = L.polygon([[49.197437, 16.603128], [49.197882, 16.602995], [49.197938, 16.603402], [49.197491, 16.603550]], {color: "red", weight: 1});
MAP.addLayer(POLYGON);

const MARKER1 = L.marker([49.191021, 16.607445], {icon: Icon_RimKat}).addTo(MAP);
MARKER1.bindPopup("<center><b>KATEDRÁLA SVATÉHO PETRA A PAVLA");
MARKER1.url = "ksPaP.html"

const MARKER2 = L.marker([49.203623, 16.603198], {icon: Icon_Husit}).addTo(MAP);
MARKER2.bindPopup("<center><b>HUSŮV SBOR");
MARKER2.url = "HsV.html"

const MARKER3 = L.marker([49.197661, 16.603303], {icon: Icon_Evang}).addTo(MAP);
MARKER3.bindPopup("<center><b>ČESKOBRATRSKÝ EVANGELICKÝ CHRÁM <br>J. A. KOMENSKÉHO");
MARKER3.url = "CechJAK.html"



MARKER1.on("mouseover", function() {
    MARKER1.openPopup();
});

MARKER1.on("mouseout", function() {
    MARKER1.closePopup();
});

MARKER1.on("click", function() {
    window.location = MARKER1.url;
});



MARKER2.on("mouseover", function() {
    MARKER2.openPopup();
});

MARKER2.on("mouseout", function() {
    MARKER2.closePopup();
});

MARKER2.on("click", function() {
    window.location = MARKER2.url;
});



MARKER3.on("mouseover", function() {
    MARKER3.openPopup();
});

MARKER3.on("mouseout", function() {
    MARKER3.closePopup();
});

MARKER3.on("click", function() {
    window.location = MARKER3.url;
});



const LG1 = L.layerGroup([LINE]);
MAP.removeLayer(LINE);
MAP.addLayer(LG1);

const LG2 = L.layerGroup([POLYGON]);
MAP.removeLayer(POLYGON);
MAP.addLayer(LG2);

const RimKat_Kost = L.layerGroup([MARKER1]);
MAP.removeLayer(MARKER1);
MAP.addLayer(RimKat_Kost);

const Husit_Kost = L.layerGroup([MARKER2]);
MAP.removeLayer(MARKER2);
MAP.addLayer(Husit_Kost);

const Evang_Kost = L.layerGroup([MARKER3]);
MAP.removeLayer(MARKER3);
MAP.addLayer(Evang_Kost);



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


const baseLayers = {
    "Carto + Ortofoto": CARTO && wmsLayer_bckgr,
    "Carto": CARTO2,
    "OpenStreetMap": OSM, 
    "Google Maps": GMAPS, 
    "Ortofoto": wmsLayer
};

const overlays = {
    Linie: LG1,
    Polygony: LG2,
    ŘímskokatolickéKostely: RimKat_Kost,
    HusitskéKostely: Husit_Kost,
    EvangelickéKostely: Evang_Kost
};





MAP.addControl(L.control.layers(baseLayers, overlays));



