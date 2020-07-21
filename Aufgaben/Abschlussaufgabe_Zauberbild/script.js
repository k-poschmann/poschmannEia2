"use strict";
var Zauberbild;
(function (Zauberbild) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let canvasstar;
    let size1;
    let size2;
    let size3;
    //let cxtheart: CanvasRenderingContext2D;
    //let cxtmoon: CanvasRenderingContext2D;
    //let cxtsun: CanvasRenderingContext2D;
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
        // cxtheart = <CanvasRenderingContext2D>canvas.getContext("2d");
        // cxtmoon = <CanvasRenderingContext2D>canvas.getContext("2d");
        // cxtsun = <CanvasRenderingContext2D>canvas.getContext("2d");
        btnOK.addEventListener("click", resizeCanvas);
        createStar();
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
    function createStar() {
        // let number: number = 1;
        // for (let i: number = 0; i < number; i++) {
        //     let positionX: number = 110;
        //     let positionY: number = 200;
        //     let position: Vector = new Vector(0, 0);
        //     let star: Star = new Star(position);
        //     star.draw();
        //     symbols.push(star);
        // }
        let positionX = 0;
        let positionY = 0;
        let position = new Zauberbild.Vector(positionX, positionY);
        let star = new Zauberbild.Star(position);
        star.draw(Zauberbild.cxtstar);
        console.log("I'm here!");
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=script.js.map