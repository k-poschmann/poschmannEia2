"use strict";
var Zauberbild;
(function (Zauberbild) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let canvasstar;
    let canvasheart;
    let canvasmoon;
    let canvasflash;
    let size1;
    let size2;
    let size3;
    let id;
    //Array
    let symbols = [];
    function handleLoad() {
        canvas = document.querySelector("#maincanvas");
        canvasstar = document.querySelector("#canvasstar");
        canvasheart = document.querySelector("#canvasheart");
        canvasmoon = document.querySelector("#canvasmoon");
        canvasflash = document.querySelector("#canvasflash");
        canvas.addEventListener("click", drawSymbolOnCanvas);
        canvasstar.addEventListener("click", getID);
        canvasheart.addEventListener("click", getID);
        canvasmoon.addEventListener("click", getID);
        canvasflash.addEventListener("click", getID);
        size1 = document.querySelector("#sizeone");
        size2 = document.querySelector("#sizetwo");
        size3 = document.querySelector("#sizethree");
        let btnOK = document.querySelector("#btnok");
        Zauberbild.cxt = canvas.getContext("2d");
        Zauberbild.cxtstar = canvasstar.getContext("2d");
        Zauberbild.cxtheart = canvasheart.getContext("2d");
        Zauberbild.cxtmoon = canvasmoon.getContext("2d");
        Zauberbild.cxtflash = canvasflash.getContext("2d");
        btnOK.addEventListener("click", resizeCanvas);
        createSymbols();
    }
    // Leinwandgröße Ändern
    function resizeCanvas(_event) {
        console.log("Button OK wurde geklickt!");
        if (size1.checked == true) {
            canvas.width = 400;
            canvas.height = 400;
        }
        if (size2.checked == true) {
            canvas.width = 500;
            canvas.height = 300;
        }
        if (size3.checked == true) {
            canvas.width = 600;
            canvas.height = 400;
        }
    }
    function createSymbols() {
        for (let i = 0; i < 1; i++) {
            let positionX = 20;
            let positionY = 15;
            let position = new Zauberbild.Vector(positionX, positionY);
            let star = new Zauberbild.Star(position);
            star.draw(Zauberbild.cxtstar);
            symbols.push(star);
            console.log("Sternchen ist hier!");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 0;
            let positionY = -10;
            let position = new Zauberbild.Vector(positionX, positionY);
            let heart = new Zauberbild.Heart(position);
            heart.draw(Zauberbild.cxtheart);
            symbols.push(heart);
            console.log("Herzchen auch :)");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 20;
            let positionY = 5;
            let position = new Zauberbild.Vector(positionX, positionY);
            let moon = new Zauberbild.Moon(position);
            moon.draw(Zauberbild.cxtmoon);
            console.log("Mond ebenfalls!");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 120;
            let positionY = 15;
            let position = new Zauberbild.Vector(positionX, positionY);
            let flash = new Zauberbild.Flash(position);
            flash.draw(Zauberbild.cxtflash);
            console.log("Blitz anwesend :D");
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
        switch (id) {
            case "canvasstar":
                let StarX = _event.offsetX;
                let StarY = _event.offsetY;
                let StarPosition = new Zauberbild.Vector(StarX, StarY);
                let star = new Zauberbild.Star(StarPosition);
                star.draw(Zauberbild.cxt);
                symbols.push(star);
                break;
            case "canvasheart":
                let HeartX = _event.offsetX;
                let HeartY = _event.offsetY;
                let HeartPosition = new Zauberbild.Vector(HeartX, HeartY);
                let heart = new Zauberbild.Heart(HeartPosition);
                heart.draw(Zauberbild.cxt);
                symbols.push(heart);
                break;
            case "canvasmoon":
                let MoonX = _event.offsetX;
                let MoonY = _event.offsetY;
                let MoonPosition = new Zauberbild.Vector(MoonX, MoonY);
                let moon = new Zauberbild.Moon(MoonPosition);
                moon.draw(Zauberbild.cxt);
                symbols.push(moon);
                break;
            case "canvasflash":
                let FlashX = _event.offsetX;
                let FlashY = _event.offsetY;
                let FlashPosition = new Zauberbild.Vector(FlashX, FlashY);
                let flash = new Zauberbild.Flash(FlashPosition);
                flash.draw(Zauberbild.cxt);
                symbols.push(flash);
                break;
        }
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=script.js.map