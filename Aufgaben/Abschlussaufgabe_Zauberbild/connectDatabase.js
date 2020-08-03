"use strict";
var Zauberbild;
(function (Zauberbild) {
    let url = "https://hfucocktailbar.herokuapp.com/";
    let titleoption;
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
        Zauberbild.symbols = [];
        let name = Zauberbild.list.value;
        let response = await fetch(url + "findPicture&" + name);
        let text = await response.text();
        console.log(text);
        let replace = text.replace(/\\|\[|{|}|"|_id|savePicture|]/g, "");
        let removetitle = replace.replace(name, "");
        let correction = removetitle.replace(/,,,/g, "");
        let removekeys = correction.replace(/position:|color:|rotation:|velocity:|active:/g, "");
        let data = removekeys.split(",");
        console.log(data);
        Zauberbild.canvas.width = parseInt(data[1]);
        Zauberbild.canvas.height = parseInt(data[2]);
        data.splice(0, 6);
        let info = [];
        for (let i = 0; i < data.length; i++) {
            switch (data[i]) {
                case "Star":
                    let positionStar = new Zauberbild.Vector(parseInt(info[1]), parseInt(info[2]));
                    let star = new Zauberbild.Star(positionStar);
                    star.draw(Zauberbild.cxt);
                    Zauberbild.symbols.push(star);
                    info = [];
                    break;
                case "Heart":
                    let positionHeart = new Zauberbild.Vector(parseInt(info[1]), parseInt(info[2]));
                    let heart = new Zauberbild.Heart(positionHeart);
                    heart.draw(Zauberbild.cxt);
                    Zauberbild.symbols.push(heart);
                    info = [];
                    break;
                case "Moon":
                    let positionMoon = new Zauberbild.Vector(parseInt(info[1]), parseInt(info[2]));
                    let moon = new Zauberbild.Heart(positionMoon);
                    moon.draw(Zauberbild.cxt);
                    Zauberbild.symbols.push(moon);
                    info = [];
                    break;
                case "Flash":
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
    async function findPicture() {
        let response = await fetch(url + "?" + "getPicture=yes");
        let responseText = await response.text();
        let pretty = responseText.replace(/\\|\[|{|}|"|_id|insertName|]/g, "");
        let correction = pretty.replace(/,,,/g, ",");
        createDataList(correction);
        // let response: Response = await fetch(url + "?getTitles&");
        // let text: string = await response.text();
        // console.log(text);
        // showTitles(text);
    }
    Zauberbild.findPicture = findPicture;
    //Datalist wird generiert
    function createDataList(_response) {
        let picture = document.querySelector("#yourpics");
        titleoption = _response.split(",");
        while (picture.firstChild) {
            picture.removeChild(picture.firstChild);
        }
        for (let entry of titleoption) {
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