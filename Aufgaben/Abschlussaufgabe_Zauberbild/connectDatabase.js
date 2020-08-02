"use strict";
var Zauberbild;
(function (Zauberbild) {
    let url = "https://hfucocktailbar.herokuapp.com/";
    //Funktion, die Farbe, Animation und Position speichert, sowie die Canvasgröße
    function savePic(_title) {
        let infos = [];
        for (let symbol of Zauberbild.symbols) {
            let figure = {
                "position": symbol.position,
                "color": symbol.color,
                "rotation": symbol.rotation,
                "velocity": symbol.velocity,
                "active": symbol.active
            };
            infos.push(figure);
        }
        sendData(infos, _title);
    }
    Zauberbild.savePic = savePic;
    //Funktion, die die Daten an Datenbank schickt (sendData)
    async function sendData(_infos, _title) {
        let width = Zauberbild.canvas.width.toString();
        let height = Zauberbild.canvas.height.toString();
        //falls noch änderbare HG-Farbe, dann hier definieren
        let canvasinfo = [width, height];
        let canvasjsn = JSON.stringify(canvasinfo);
        let canvasquery = new URLSearchParams(canvasjsn);
        let infos = JSON.stringify(_infos); // in JSON String umwandeln, um für Server lesbar zu machen
        let query = new URLSearchParams(infos);
        let response = await fetch(url + "?" + query + "&" + canvasquery + "&" + _title);
        let responsetext = await response.text();
        console.log(responsetext);
        alert("Bild wurde gespeichert");
    }
    // Funktion, die die Bilder aus der Datenbank findet
    async function searchData() {
    }
    // Funktion, die Namen aus Server holt
    function fetchTitles() {
    }
    // Funktion, die die Liste kreiiert
    function createTitleList() {
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=connectDatabase.js.map