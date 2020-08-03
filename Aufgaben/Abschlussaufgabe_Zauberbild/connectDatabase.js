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
    async function loadPic(_title) {
        let response = await fetch(url + "?getImage" + _title);
        let text = await response.text();
        let replace = text.replace(/\\|\[|{|}|"|name|:|]/g, "");
        let correctArray = replace.split(",");
        console.log(correctArray);
        Zauberbild.cxt.canvas.width = parseInt(correctArray[1]);
        Zauberbild.cxt.canvas.height = parseInt(correctArray[2]);
        correctArray.splice(0, 6);
        let info = [];
        for (let i = 0; i < correctArray.length; i++) {
            switch (correctArray[i]) {
                case "star":
                    let positionStar = new Zauberbild.Vector(parseInt(info[1]), parseInt(info[2]));
                    let star = new Zauberbild.Star(positionStar);
                    star.draw(Zauberbild.cxt);
                    Zauberbild.symbols.push(star);
                    info = [];
                    break;
                case "heart":
                    let positionHeart = new Zauberbild.Vector(parseInt(info[1]), parseInt(info[2]));
                    let heart = new Zauberbild.Heart(positionHeart);
                    heart.draw(Zauberbild.cxt);
                    Zauberbild.symbols.push(heart);
                    info = [];
                    break;
                case "moon":
                    let positionMoon = new Zauberbild.Vector(parseInt(info[1]), parseInt(info[2]));
                    let moon = new Zauberbild.Heart(positionMoon);
                    moon.draw(Zauberbild.cxt);
                    Zauberbild.symbols.push(moon);
                    info = [];
                    break;
                case "flash":
                    let positionFlash = new Zauberbild.Vector(parseInt(info[1]), parseInt(info[2]));
                    let flash = new Zauberbild.Heart(positionFlash);
                    flash.draw(Zauberbild.cxt);
                    Zauberbild.symbols.push(flash);
                    info = [];
                    break;
            }
        }
    }
    Zauberbild.loadPic = loadPic;
    // Funktion, die Namen aus Server holt
    async function fetchTitles() {
        let response = await fetch(url + "?getTitles&");
        let text = await response.text();
        console.log(text);
        showTitles(text);
    }
    Zauberbild.fetchTitles = fetchTitles;
    //Funktion, die die Titel zeigt
    async function showTitles(_title) {
        let dbContent = document.querySelector("#album");
        let replace = _title.replace(/\\|\[|Object|object|{|}|"|name|:|]/g, "");
        let correctArray = replace.split(",");
        dbContent.innerHTML = "";
        while (Zauberbild.list.firstChild) {
            Zauberbild.list.removeChild(Zauberbild.list.firstChild);
        }
        for (let entry of correctArray) {
            if (entry == "") {
                //überspringen
            }
            else {
                let option = document.createElement("option");
                option.setAttribute("name", entry);
                option.value = entry;
                Zauberbild.list.appendChild(option);
            }
        }
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=connectDatabase.js.map