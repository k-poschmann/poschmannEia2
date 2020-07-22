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
    //Array
    let symbols = [];
    function handleLoad() {
        canvas = document.querySelector("#maincanvas");
        canvasstar = document.querySelector("#canvasstar");
        canvasheart = document.querySelector("#canvasheart");
        canvasmoon = document.querySelector("#canvasmoon");
        canvasflash = document.querySelector("#canvasflash");
        size1 = document.querySelector("#sizeone");
        size2 = document.querySelector("#sizetwo");
        size3 = document.querySelector("#sizethree");
        let btnOK = document.querySelector("#btnok");
        Zauberbild.cxtstar = canvasstar.getContext("2d");
        Zauberbild.cxtheart = canvasheart.getContext("2d");
        Zauberbild.cxtmoon = canvasmoon.getContext("2d");
        Zauberbild.cxtflash = canvasflash.getContext("2d");
        btnOK.addEventListener("click", resizeCanvas);
        canvas.addEventListener("click", placeSymbols);
        createStar();
        createHeart();
        createMoon();
        createFlash();
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
    //Stern erzeugen
    function createStar() {
        let positionX = 20;
        let positionY = 15;
        let position = new Zauberbild.Vector(positionX, positionY);
        let star = new Zauberbild.Star(position);
        star.draw();
        symbols.push(star);
        console.log("Sternchen ist hier!");
    }
    //Herz erzeugen
    function createHeart() {
        let positionX = 0;
        let positionY = -10;
        let position = new Zauberbild.Vector(positionX, positionY);
        let heart = new Zauberbild.Heart(position);
        heart.draw();
        console.log("Herzchen auch :)");
    }
    //Mond erzeugen
    function createMoon() {
        let positionX = 20;
        let positionY = 5;
        let position = new Zauberbild.Vector(positionX, positionY);
        let moon = new Zauberbild.Moon(position);
        moon.draw();
        console.log("Mond ebenfalls!");
    }
    //Blitz erzeugen
    function createFlash() {
        let positionX = 120;
        let positionY = 15;
        let position = new Zauberbild.Vector(positionX, positionY);
        let flash = new Zauberbild.Flash(position);
        flash.draw();
        console.log("Blitz anwesend :D");
    }
    // Platzieren des Symbols
    function placeSymbols(_event) {
        console.log("es wurde auf die Canvas geklick");
        let x = _event.offsetX;
        let y = _event.offsetY;
        let target = _event.target;
        let id = target.id;
        switch (id) {
            case "canvasstar":
                for (let symbol of symbols) {
                    symbol.position.x = x;
                    symbol.position.y = y;
                }
        }
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=script.js.map