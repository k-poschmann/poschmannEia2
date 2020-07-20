"use strict";
var Zauberbild;
(function (Zauberbild) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let canvasstar;
    let size1;
    let size2;
    let size3;
    let cxtheart;
    let cxtmoon;
    let cxtsun;
    //Array
    let symbols = [];
    function handleLoad() {
        canvas = document.querySelector("#maincanvas");
        canvasstar = document.querySelector("#canvasstar");
        size1 = document.querySelector("#sizeone");
        size2 = document.querySelector("#sizetwo");
        size3 = document.querySelector("#sizethree");
        let btnOK = document.querySelector("#btnok");
        Zauberbild.cxtstar = canvas.getContext("2d");
        cxtheart = canvas.getContext("2d");
        cxtmoon = canvas.getContext("2d");
        cxtsun = canvas.getContext("2d");
        btnOK.addEventListener("click", resizeCanvas);
        createStar();
    }
    // Leinwandgröße Ändern
    function resizeCanvas() {
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
    function createStar() {
        let positionX = canvasstar.width;
        let positionY = canvasstar.height;
        let position = new Zauberbild.Vector(positionX, positionY);
        let star = new Zauberbild.Star(position);
        star.draw();
        console.log("I'm here!");
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=script.js.map