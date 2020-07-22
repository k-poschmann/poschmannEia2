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
        canvas.addEventListener("click", placeSymbols);
        canvasstar.addEventListener("click", placeSymbols);
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
        canvas.addEventListener("click", placeSymbols);
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
            heart.draw();
            console.log("Herzchen auch :)");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 20;
            let positionY = 5;
            let position = new Zauberbild.Vector(positionX, positionY);
            let moon = new Zauberbild.Moon(position);
            moon.draw();
            console.log("Mond ebenfalls!");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 120;
            let positionY = 15;
            let position = new Zauberbild.Vector(positionX, positionY);
            let flash = new Zauberbild.Flash(position);
            flash.draw();
            console.log("Blitz anwesend :D");
        }
    }
    // Platzieren des Symbols
    function placeSymbols(_event) {
        //console.log();
        // let x: number = _event.offsetX;
        // let y: number = _event.offsetY;
        let target = _event.target;
        let id = target.id;
        console.log(id);
        switch (id) {
            case "canvasstar":
                let x = _event.clientX;
                let y = _event.clientY;
                let position = new Zauberbild.Vector(x, y);
                let star = new Zauberbild.Star(position);
                star.draw(Zauberbild.cxt);
                symbols.push(star);
                break;
        }
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=script.js.map