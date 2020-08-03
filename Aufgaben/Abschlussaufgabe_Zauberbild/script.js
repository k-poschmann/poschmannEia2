"use strict";
var Zauberbild;
(function (Zauberbild) {
    window.addEventListener("load", handleLoad);
    let canvasstar;
    let canvasheart;
    let canvasmoon;
    let canvasflash;
    let backgroundImage;
    let rdbtn;
    let btndelete;
    let btncolor;
    let btnsave;
    //Array
    Zauberbild.symbols = [];
    let colors = ["#FFC0CB", "#FF1493", "#E6E6FA", "#9370DB", "#4B0082", "#FA8072", "#DC143C", "#FF0000", "#FFA500", "#FFD700", "#FFFF00",
        "#FFE4B5", "#32CD32", "#90EE90", "#008000", "#66CDAA", "#48D1CC", "#B0C4DE", "#87CEFA", "#0000FF", "#DCDCDC", "#FFFAFA", "#F5F5DC"];
    let id;
    let coloring;
    function handleLoad() {
        Zauberbild.canvas = document.querySelector("#maincanvas");
        canvasstar = document.querySelector("#canvasstar");
        canvasheart = document.querySelector("#canvasheart");
        canvasmoon = document.querySelector("#canvasmoon");
        canvasflash = document.querySelector("#canvasflash");
        Zauberbild.canvas.addEventListener("click", drawSymbolOnCanvas);
        canvasstar.addEventListener("click", getID);
        canvasheart.addEventListener("click", getID);
        canvasmoon.addEventListener("click", getID);
        canvasflash.addEventListener("click", getID);
        Zauberbild.list = document.querySelector("#yourpics");
        rdbtn = document.querySelector("#radiobuttons");
        btndelete = document.querySelector("#btndelete");
        btncolor = document.querySelector("#btncolor");
        btnsave = document.querySelector("#btnsave");
        Zauberbild.cxt = Zauberbild.canvas.getContext("2d");
        Zauberbild.cxtstar = canvasstar.getContext("2d");
        Zauberbild.cxtheart = canvasheart.getContext("2d");
        Zauberbild.cxtmoon = canvasmoon.getContext("2d");
        Zauberbild.cxtflash = canvasflash.getContext("2d");
        drawBackground();
        rdbtn.addEventListener("change", resizeCanvas);
        btndelete.addEventListener("click", deleteCanvas);
        btncolor.addEventListener("click", changeColor);
        btnsave.addEventListener("click", saveTitle);
        window.setInterval(animate, 20);
        createSymbols();
        Zauberbild.findPicture();
    }
    // Leinwandgröße Ändern
    function resizeCanvas(_event) {
        //console.log("Change geklickt");
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "sizeone":
                Zauberbild.cxt.canvas.width = 400;
                Zauberbild.cxt.canvas.height = 400;
                drawBackground();
                break;
            case "sizetwo":
                Zauberbild.cxt.canvas.width = 500;
                Zauberbild.cxt.canvas.height = 300;
                drawBackground();
                break;
            case "sizethree":
                Zauberbild.cxt.canvas.width = 600;
                Zauberbild.cxt.canvas.height = 400;
                drawBackground();
                break;
        }
    }
    //Hintergrund wird gezeichnet
    function drawBackground() {
        let gradient = Zauberbild.cxt.createLinearGradient(0, 120, 0, 200);
        gradient.addColorStop(0, "#143b39");
        gradient.addColorStop(1, "#5e1943");
        Zauberbild.cxt.fillStyle = gradient;
        Zauberbild.cxt.fillRect(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
        backgroundImage = Zauberbild.cxt.getImageData(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
    }
    function createSymbols() {
        for (let i = 0; i < 1; i++) {
            let positionX = 20;
            let positionY = 15;
            let position = new Zauberbild.Vector(positionX, positionY);
            let star = new Zauberbild.Star(position);
            star.draw(Zauberbild.cxtstar);
            // console.log("Sternchen ist hier!");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 0;
            let positionY = -10;
            let position = new Zauberbild.Vector(positionX, positionY);
            let heart = new Zauberbild.Heart(position);
            heart.draw(Zauberbild.cxtheart);
            // console.log("Herzchen auch :)");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 20;
            let positionY = 5;
            let position = new Zauberbild.Vector(positionX, positionY);
            let moon = new Zauberbild.Moon(position);
            moon.draw(Zauberbild.cxtmoon);
            // console.log("Mond ebenfalls!");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 120;
            let positionY = 15;
            let position = new Zauberbild.Vector(positionX, positionY);
            let flash = new Zauberbild.Flash(position);
            flash.draw(Zauberbild.cxtflash);
            // console.log("Blitz anwesend :D");
        }
    }
    //Abspeichern der ID der Symbole
    function getID(_event) {
        let target = _event.target;
        id = target.id;
        console.log(id);
    }
    //Symbole auf Canvas zeichnen
    function drawSymbolOnCanvas(_event) {
        for (let symbol of Zauberbild.symbols) {
            symbol.active = false;
        }
        switch (id) {
            case "canvasstar":
                let starx = _event.offsetX;
                let stary = _event.offsetY;
                let starposition = new Zauberbild.Vector(starx, stary);
                let star = new Zauberbild.Star(starposition);
                star.draw(Zauberbild.cxt);
                Zauberbild.symbols.push(star);
                id = "";
                break;
            case "canvasheart":
                let heartx = _event.offsetX;
                let hearty = _event.offsetY;
                let heartposition = new Zauberbild.Vector(heartx, hearty);
                let heart = new Zauberbild.Heart(heartposition);
                heart.draw(Zauberbild.cxt);
                Zauberbild.symbols.push(heart);
                id = "";
                break;
            case "canvasmoon":
                let moonx = _event.offsetX;
                let moony = _event.offsetY;
                let moonposition = new Zauberbild.Vector(moonx, moony);
                let moon = new Zauberbild.Moon(moonposition);
                moon.draw(Zauberbild.cxt);
                Zauberbild.symbols.push(moon);
                id = "";
                break;
            case "canvasflash":
                let flashx = _event.offsetX;
                let flashy = _event.offsetY;
                let flashposition = new Zauberbild.Vector(flashx, flashy);
                let flash = new Zauberbild.Flash(flashposition);
                flash.draw(Zauberbild.cxt);
                Zauberbild.symbols.push(flash);
                id = "";
                break;
        }
    }
    //Animation Move
    function animate() {
        Zauberbild.cxt.putImageData(backgroundImage, 0, 0);
        for (let index = 0; index < Zauberbild.symbols.length; index++) {
            Zauberbild.symbols[index].move(1 / 200);
            Zauberbild.symbols[index].draw(Zauberbild.cxt);
        }
    }
    // Canvas löschen
    function deleteCanvas(_event) {
        Zauberbild.symbols = [];
    }
    // Farben ändern
    function randomColor() {
        coloring = colors[Math.floor(Math.random() * colors.length)];
    }
    function changeColor(_event) {
        for (let symbol of Zauberbild.symbols) {
            if (symbol instanceof Zauberbild.Star) {
                randomColor();
                symbol.active = true;
                symbol.color = coloring;
                symbol.draw(Zauberbild.cxt);
            }
        }
        for (let symbol of Zauberbild.symbols) {
            if (symbol instanceof Zauberbild.Heart) {
                randomColor();
                symbol.active = true;
                symbol.color = coloring;
                symbol.draw(Zauberbild.cxt);
            }
        }
        for (let symbol of Zauberbild.symbols) {
            if (symbol instanceof Zauberbild.Moon) {
                randomColor();
                symbol.active = true;
                symbol.color = coloring;
                symbol.draw(Zauberbild.cxt);
            }
        }
        for (let symbol of Zauberbild.symbols) {
            if (symbol instanceof Zauberbild.Flash) {
                randomColor();
                symbol.active = true;
                symbol.color = coloring;
                symbol.draw(Zauberbild.cxt);
            }
        }
    }
    // Titel speichern / abfragen
    function saveTitle() {
        let picsName = prompt("Bitte einen eindeutigen Titel eingeben");
        if (picsName == "" || picsName == null) {
            alert("Bild kann nicht gespeichert werden");
        }
        else {
            Zauberbild.savePic(picsName);
        }
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=script.js.map