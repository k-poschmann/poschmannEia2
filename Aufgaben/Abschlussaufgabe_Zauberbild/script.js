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
    let btnOK;
    let btndelete;
    let btncolor;
    //Array
    let symbols = [];
    let colors = ["#FFC0CB", "#FF1493", "#E6E6FA", "#9370DB", "#4B0082", "#FA8072", "#DC143C", "#FF0000", "#FFA500", "#FFD700", "#FFFF00",
        "#FFE4B5", "#32CD32", "#90EE90", "#008000", "#66CDAA", "#48D1CC", "#B0C4DE", "#87CEFA", "#0000FF", "#DCDCDC", "#FFFAFA", "#F5F5DC"];
    let id;
    let coloring;
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
        btnOK = document.querySelector("#btnok");
        btndelete = document.querySelector("#btndelete");
        btncolor = document.querySelector("#btncolor");
        Zauberbild.cxt = canvas.getContext("2d");
        Zauberbild.cxtstar = canvasstar.getContext("2d");
        Zauberbild.cxtheart = canvasheart.getContext("2d");
        Zauberbild.cxtmoon = canvasmoon.getContext("2d");
        Zauberbild.cxtflash = canvasflash.getContext("2d");
        btnOK.addEventListener("click", resizeCanvas);
        btndelete.addEventListener("click", animation);
        btncolor.addEventListener("click", changeColor);
        //window.setInterval(animation, 20);
        createSymbols();
    }
    // Leinwandgröße Ändern
    function resizeCanvas(_event) {
        // console.log("Button OK wurde geklickt!");
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
            //symbols.push(star);
            // console.log("Sternchen ist hier!");
        }
        for (let i = 0; i < 1; i++) {
            let positionX = 0;
            let positionY = -10;
            let position = new Zauberbild.Vector(positionX, positionY);
            let heart = new Zauberbild.Heart(position);
            heart.draw(Zauberbild.cxtheart);
            //symbols.push(heart);
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
        for (let symbol of symbols) {
            symbol.active = false;
        }
        switch (id) {
            case "canvasstar":
                let starx = _event.offsetX;
                let stary = _event.offsetY;
                let starposition = new Zauberbild.Vector(starx, stary);
                let star = new Zauberbild.Star(starposition);
                star.draw(Zauberbild.cxt);
                symbols.push(star);
                id = "";
                break;
            case "canvasheart":
                let heartx = _event.offsetX;
                let hearty = _event.offsetY;
                let heartposition = new Zauberbild.Vector(heartx, hearty);
                let heart = new Zauberbild.Heart(heartposition);
                heart.draw(Zauberbild.cxt);
                symbols.push(heart);
                id = "";
                break;
            case "canvasmoon":
                let moonx = _event.offsetX;
                let moony = _event.offsetY;
                let moonposition = new Zauberbild.Vector(moonx, moony);
                let moon = new Zauberbild.Moon(moonposition);
                moon.draw(Zauberbild.cxt);
                symbols.push(moon);
                id = "";
                break;
            case "canvasflash":
                let flashx = _event.offsetX;
                let flashy = _event.offsetY;
                let flashposition = new Zauberbild.Vector(flashx, flashy);
                let flash = new Zauberbild.Flash(flashposition);
                flash.draw(Zauberbild.cxt);
                symbols.push(flash);
                id = "";
                break;
        }
    }
    //Das funktioniert teilweise :
    // function animate(): void {
    //     for (let figure of symbols) {
    //         if (figure.active == false) {
    //         figure.move(1 / 200);
    //         figure.draw(cxt);
    //         }
    //     }
    // }
    // Das funktioniert nicht...
    function animation(_event) {
        let target = _event.target;
        let id = target.id;
        for (let symbol of symbols) {
            switch (id) {
                case "btndelete":
                    deleteForm(symbol);
                    break;
                case "btnmove":
                    if (symbol.active == false) {
                        symbol.move(1 / 200);
                        symbol.draw(Zauberbild.cxt);
                        console.log(symbol);
                    }
            }
        }
    }
    function deleteForm(_figure) {
        for (let symbol of symbols) {
            if (symbol.active == false) {
                let index = symbols.indexOf(_figure, 0);
                symbols.splice(index, 1);
            }
            console.log(symbols);
        }
    }
    function randomColor() {
        coloring = colors[Math.floor(Math.random() * colors.length)];
    }
    function changeColor(_event) {
        randomColor();
        for (let symbol of symbols) {
            if (symbol.active == false) {
                symbol.color = coloring;
                symbol.draw(Zauberbild.cxt);
            }
            else {
                symbol.active = true;
            }
            //console.log(symbol);
        }
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=script.js.map