"use strict";
var Zauberbild;
(function (Zauberbild) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let size1;
    let size2;
    let size3;
    let ctx1;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        size1 = document.querySelector("#sizeone");
        size2 = document.querySelector("#sizetwo");
        size3 = document.querySelector("#sizethree");
        let btnOK = document.querySelector("#btnok");
        ctx1 = canvas.getContext("2d");
        btnOK.addEventListener("click", resizeCanvas);
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
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=script.js.map