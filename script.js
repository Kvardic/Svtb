window.addEventListener("load", workFunction, false);



function workFunction(){
"use strict";
    
const svgobject = document.getElementById("svg");
const svgdocument = svgobject.contentDocument;
const svgitself = svgdocument.documentElement;
    
    console.log(svgobject);
    console.log(svgdocument);
    
    let txtgroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        txtgroup.setAttribute("id", "txtgroup");
        svgitself.appendChild(txtgroup);
    let headertxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        headertxt.setAttribute("id", "headertxt");
        headertxt.setAttribute("x", 25);
        headertxt.setAttribute("y", -50);
        headertxt.setAttribute("font-family", "Verdana", "Sans-Serif");
        headertxt.setAttribute("font-size", "35");
        headertxt.setAttribute("font-weight", "bold");
        headertxt.textContent = "Government regions (Regierungsbezirke) of Germany";
        txtgroup.appendChild(headertxt);
    let poptxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        poptxt.setAttribute("id", "poptxt");
        txtgroup.appendChild(poptxt);
    let regtxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        regtxt.setAttribute("id", "regtxt");
        txtgroup.appendChild(regtxt);
    

    
const paths = svgdocument.getElementsByTagName("path");
    
    for (let a of paths) {
    a.setAttribute("fill", "lightgrey");
    a.setAttribute("stroke", "black");
    a.setAttribute("stroke-width", "2");
    a.addEventListener("click", colorize);
    a.addEventListener("click", writetext);
        
    function colorize() {
        for (let b of paths) {
            b.setAttribute("fill", "lightgray");
            event.target.setAttribute("fill","red");
            
        }
    }
        
    function writetext() {
        const delpoptxt = svgitself.getElementById("poptxt");
        delpoptxt.parentElement.removeChild(delpoptxt);
        const delregtxt = svgitself.getElementById("regtxt");
        delregtxt.parentElement.removeChild(delregtxt);
        let populace = event.target.getAttribute("population");
        let region = event.target.getAttribute("id");
        let poptxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        poptxt.setAttribute("id", "poptxt");
        poptxt.setAttribute("x", 650);
        poptxt.setAttribute("y", 740);
        poptxt.setAttribute("font-family", "Verdana", "Sans-Serif");
        poptxt.setAttribute("font-size", "25");
        poptxt.setAttribute("font-weight", "bold");
        poptxt.textContent = "Population: " + populace + " inh.";
        txtgroup.appendChild(poptxt);
        
        let regtxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        regtxt.setAttribute("id", "regtxt");
        regtxt.setAttribute("x", 650);
        regtxt.setAttribute("y", 690);
        regtxt.setAttribute("font-family", "Verdana", "Sans-Serif");
        regtxt.setAttribute("font-size", "25");
        regtxt.setAttribute("font-weight", "bold");
        regtxt.textContent = "Name: "+ region;
        txtgroup.appendChild(regtxt);
        
    }
}
    
}


