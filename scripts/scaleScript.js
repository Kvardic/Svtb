function realDistance() {
	"use strict"
    let scale = document.getElementById("map_scale").value;
    let distance = document.getElementById("map_cm").value;
    let total = scale * distance;
    let resultcm = total;
    let resultm = resultcm / 100;
    let resultkm = resultm / 1000;
    let resultAll = resultcm && resultm && resultkm;
    if ((scale == "" || scale == 0) && (distance == "" || distance == 0)) {
    	alert("Musíte zadat validní hodnoty měřítka mapy a vzdálenosti na mapě!"), document.getElementById('resultAll').innerHTML = "Nebyly zadány žádné hodnoty";
	} else if (scale == "" || scale == "0") {
        alert("Musíte zadat validní hodnotu měřítka mapy!"), document.getElementById('resultAll').innerHTML = "Nebyla zadána validní hodnota měřítka mapy";
    } else if (distance == "" || distance == "0") {
        alert("Musíte zadat validní hodnotu vzdálenosti na mapě!"), document.getElementById('resultAll').innerHTML = "Nebyla zadána validní hodnota vzdálenosti mapě";
    } else if (scale < 0 && distance < 0) {
    	alert("Musíte zadat KLADNÉ hodnoty měřítka mapy a vzdálenosti na mapě!"), document.getElementById('resultAll').innerHTML = "Byly zadány záporné hodnoty";
	} else if (scale < 0) {
    	alert("Musíte zadat KLADNOU hodnotu měřítka mapy!"), document.getElementById('resultAll').innerHTML = "Byla zadána záporná hodnota měřítka mapy";
	} else if (distance < 0) {
    	alert("Musíte zadat KLADNOU hodnotu vzdálenosti na mapě!"), document.getElementById('resultAll').innerHTML = "Byla zadána záporná hodnota vzdálenosti na mapě";
	} else if (distance.indexOf(",") > -1 || scale.indexOf(",")> -1) {
        alert("Jako desetinný separátor musíte použít tečku!"), document.getElementById('resultAll').innerHTML = "Byla použita čárka jako desetinný separátor";
    } else {
		document.getElementById('resultAll').innerHTML = "Skutečná vzdálenost = " + resultcm.toFixed(2) + " cm" + " = " + resultm.toFixed(2) + " m" + " = " + resultkm.toFixed(5) + " km";
		}
	}

function mapDistance() {
    "use strict"
    let scale2 = document.getElementById("map_scale2").value;
    let distance2 = document.getElementById("real_m2").value;
    let total = (1/scale2) * (distance2*100);
    let result1 = total;
    if ((scale2 == "" || scale2 == 0) && (distance2 == "" || distance2 == 0)) {
        alert("Musíte zadat validní hodnoty měřítka mapy a skutečné vzdálenosti!"), document.getElementById('result1').innerHTML = "Nebyly zadány žádné hodnoty";
    } else if (scale2 == "" || scale2 == "0") {
        alert("Musíte zadat validní hodnotu měřítka mapy!"), document.getElementById('result1').innerHTML = "Nebyla zadána validní hodnota měřítka mapy";
    } else if (distance2 == "" || distance2 == "0") {
        alert("Musíte zadat validní hodnotu skutečné vzdálenosti!"), document.getElementById('result1').innerHTML = "Nebyla zadána validní hodnota skutečné vzdálenosti";
    } else if (scale2 < 0 && distance2 < 0) {
        alert("Musíte zadat KLADNÉ hodnoty měřítka mapy a skutečné vzdálenosti!"), document.getElementById('result1').innerHTML = "Byly zadány záporné hodnoty";
    } else if (scale2 < 0) {
        alert("Musíte zadat KLADNOU hodnotu měřítka mapy!"), document.getElementById('result1').innerHTML = "Byla zadána záporná hodnota měřítka mapy";
    } else if (distance2 < 0) {
        alert("Musíte zadat KLADNOU hodnotu skutečné vzdálenosti!"), document.getElementById('result1').innerHTML = "Byla zadána záporná hodnota skutečné vzdálenosti";
    } else if (distance2.indexOf(",") > -1 || scale2.indexOf(",")> -1) {
        alert("Jako desetinný separátor musíte použít tečku!"), document.getElementById('result1').innerHTML = "Byla použita čárka jako desetinný separátor";
    } else {
        document.getElementById('result1').innerHTML = "Vzdálenost na mapě = " + result1.toFixed(5) + " cm";
        }
    }

function mapScale() {
    "use strict"
    let mapDistance = document.getElementById("map_distance").value;
    let realDistance = document.getElementById("real_distance").value;
    let total = ((realDistance*100)/mapDistance);
    let result2 = total;
    if ((mapDistance == "" || mapDistance == 0) && (realDistance == "" || realDistance == 0)) {
        alert("Musíte zadat validní hodnoty vzdálenosti na mapě a skutečné vzdálenosti!"), document.getElementById('result2').innerHTML = "Nebyly zadány žádné hodnoty";
    } else if (mapDistance == "" || mapDistance == "0") {
        alert("Musíte zadat validní hodnotu vzdálenosti na mapě!"), document.getElementById('result2').innerHTML = "Nebyla zadána validní hodnota vzdálenosti na mapě";
    } else if (realDistance == "" || realDistance == "0") {
        alert("Musíte zadat validní hodnotu skutečné vzdálenosti!"), document.getElementById('result2').innerHTML = "Nebyla zadána validní hodnota skutečné vzdálenosti";
    } else if (mapDistance < 0 && realDistance < 0) {
        alert("Musíte zadat KLADNÉ hodnoty vzdálenosti na mapě a skutečné vzdálenosti!"), document.getElementById('result2').innerHTML = "Byly zadány záporné hodnoty";
    } else if (mapDistance < 0) {
        alert("Musíte zadat KLADNOU hodnotu vzdálenosti na mapě!"), document.getElementById('result2').innerHTML = "Byla zadána záporná hodnota vzdálenosti na mapě";
    } else if (realDistance < 0) {
        alert("Musíte zadat KLADNOU hodnotu skutečné vzdálenosti!"), document.getElementById('result2').innerHTML = "Byla zadána záporná hodnota skutečné vzdálenosti";
    } else if (mapDistance.indexOf(",") > -1 || realDistance.indexOf(",") > -1 ) {
        alert("Jako desetinný separátor musíte použít tečku!"), document.getElementById('result2').innerHTML = "Byla použita čárka jako desetinný separátor";
    } else {
        document.getElementById('result2').innerHTML = "Měřítko mapy = " + "1 : " + Math.round(result2);
        }
    }

function realArea() {
    "use strict"
    let scale3 = document.getElementById("map_scale3").value;
    let mapArea = document.getElementById("map_area").value;
    let total = (mapArea/100)*((scale3/100)*(scale3/100));
    let result3 = total;
    let result3km = result3/1000000;
    if ((scale3 == "" || scale3  == 0) && (mapArea == "" || mapArea == 0)) {
        alert("Musíte zadat validní hodnoty měřítka mapy a plochy na mapě!"), document.getElementById('result3').innerHTML = "Nebyly zadány žádné hodnoty";
    } else if (scale3  == "" || scale3  == "0") {
        alert("Musíte zadat validní hodnotu měřítka mapy!"), document.getElementById('result3').innerHTML = "Nebyla zadána validní hodnota měřítka mapy";
    } else if (mapArea== "" || mapArea == "0") {
        alert("Musíte zadat validní hodnotu plochy na mapě!"), document.getElementById('result3').innerHTML = "Nebyla zadána validní hodnota plochy na mapě";
    } else if (scale3  < 0 && mapArea < 0) {
        alert("Musíte zadat KLADNÉ hodnoty měřítka mapy a plochy na mapě!"), document.getElementById('result3').innerHTML = "Byly zadány záporné hodnoty";
    } else if (scale3 < 0) {
        alert("Musíte zadat KLADNOU hodnotu měřítka mapy!"), document.getElementById('result3').innerHTML = "Byla zadána záporná hodnota měřítka mapy";
    } else if (mapArea < 0) {
        alert("Musíte zadat KLADNOU hodnotu plochy na mapě!"), document.getElementById('result3').innerHTML = "Byla zadána záporná hodnota plochy na mapě";
    } else if (scale3.indexOf(",") > -1 || mapArea.indexOf(",") > -1 ) {
        alert("Jako desetinný separátor musíte použít tečku!"), document.getElementById('result3').innerHTML = "Byla zadána čárka jako desetinný separátor";
    } else {
        document.getElementById('result3').innerHTML = "Skutečná plocha = " + result3.toFixed(5) + " m<sup>2</sup>" + " = " + result3km.toFixed(10) + "km<sup>2</sup>";
        }
    }

function mapArea() {
    "use strict"
    let scale4 = document.getElementById("map_scale4").value;
    let realArea = document.getElementById("real_area").value;
    let total = realArea/((scale4/100)*(scale4/100));
    let result4 = total;
    let resultmm = total*100;
    if ((scale4 == "" || scale4  == 0) && (realArea == "" || realArea == 0)) {
        alert("Musíte zadat validní hodnoty měřítka mapy a skutečné plochy!"), document.getElementById('result4').innerHTML = "Nebyly zadány žádné hodnoty";
    } else if (scale4  == "" || scale4  == "0") {
        alert("Musíte zadat validní hodnotu měřítka mapy!"), document.getElementById('result4').innerHTML = "Nebyla zadána validní hodnota měřítka mapy";
    } else if (realArea== "" || realArea == "0") {
        alert("Musíte zadat validní hodnotu skutečné plochy!"), document.getElementById('result4').innerHTML = "Nebyla zadána validní hodnota skutečné plochy";
    } else if (scale4  < 0 && realArea < 0) {
        alert("Musíte zadat KLADNÉ hodnoty měřítka mapy a skutečné plochy!"), document.getElementById('result4').innerHTML = "Byly zadány záporné hodnoty";
    } else if (scale4 < 0) {
        alert("Musíte zadat KLADNOU hodnotu měřítka mapy!"), document.getElementById('result4').innerHTML = "Byla zadána záporná hodnota měřítka mapy";
    } else if (realArea < 0) {
        alert("Musíte zadat KLADNOU hodnotu skutečné plochy!"), document.getElementById('result4').innerHTML = "Byla zadána záporná hodnota skutečné plochy";
    } else if (scale4.indexOf(",") > -1 || realArea.indexOf(",") > -1 ) {
        alert("Jako desetinný separátor musíte použít tečku!"), document.getElementById('result4').innerHTML = "Byla použita čárka jako desetinný separátor";
    } else {
        document.getElementById('result4').innerHTML = "Plocha na mapě = " + result4.toFixed(3) + " cm<sup>2</sup>" + " = " + resultmm.toFixed(3) +" mm<sup>2</sup>";
        }
    }



function mapScale2() {
    "use strict"
    let mapArea2 = document.getElementById("map_area2").value;
    let realArea2 = document.getElementById("real_area2").value;
    let total = (realArea2/(mapArea2/100));
    let total2 = Math.sqrt(total)*100;
    let result5 = total2;
    if ((mapArea2 == "" || mapArea2  == 0) && (realArea2 == "" || realArea2 == 0)) {
        alert("Musíte zadat validní hodnoty plochy na mapě a skutečné plochy!"), document.getElementById('result5').innerHTML = "Nebyly zadány žádné hodnoty";
    } else if (mapArea2  == "" || mapArea2  == "0") {
        alert("Musíte zadat validní hodnotu plochy na mapě!"), document.getElementById('result5').innerHTML = "Nebyla zadána validní hodnota plochy na mapě";
    } else if (realArea2 == "" || realArea2 == "0") {
        alert("Musíte zadat validní hodnotu skutečné plochy!"), document.getElementById('result5').innerHTML = "Nebyla zadána validní hodnota skutečné plochy";
    } else if (mapArea2  < 0 && realArea2 < 0) {
        alert("Musíte zadat KLADNÉ hodnoty plochy na mapě a skutečné plochy!"), document.getElementById('result5').innerHTML = "Byly zadány záporné hodnoty";
    } else if (mapArea2 < 0) {
        alert("Musíte zadat KLADNOU hodnotu plochy na mapě!"), document.getElementById('result5').innerHTML = "Byla zadána záporná hodnota plochy na mapě";
    } else if (realArea2 < 0) {
        alert("Musíte zadat KLADNOU hodnotu skutečné plochy!"), document.getElementById('result5').innerHTML = "Byla zadána záporná hodnota skutečné plochy";
    } else if (mapArea2.indexOf(",") > -1 || realArea2.indexOf(",") > -1 ) {
        alert("Jako desetinný separátor musíte použít tečku!"), document.getElementById('result5').innerHTML = "Byla použita čárka jako desetinný separátor";
    } else {
        document.getElementById('result5').innerHTML = "Měřítko mapy = " + " 1 : " + Math.round(result5);
        }
    }