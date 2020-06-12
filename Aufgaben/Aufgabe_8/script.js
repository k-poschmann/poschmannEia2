"use strict";
var Virus;
(function (Virus) {
    window.addEventListener("resize", resizeWindow, false);
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    let width;
    let height;
    function resizeWindow() {
        let myWidth = window.innerWidth - 5;
        let myHeight = window.innerHeight - 5;
        crc2.canvas.width = myWidth;
        crc2.canvas.height = myHeight;
        drawBackground();
        crc2.fillRect(0, 0, myWidth, myHeight);
    }
    function handleLoad(_event) {
        resizeWindow();
        drawBackground();
        drawCells();
        drawCoronaVirus({ x: 200, y: 400 }, { x: 70, y: 70 });
        drawAntibody({ x: 400, y: 300 }, { x: 100, y: 120 });
    }
    function drawBackground() {
        let pattern = document.createElement("canvas").getContext("2d");
        //Muster erstellen
        pattern.canvas.width = 60;
        pattern.canvas.height = 60;
        pattern.fillStyle = "#b3daff";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 20);
        pattern.lineTo(20, 0);
        pattern.lineTo(40, 0);
        pattern.lineTo(60, 20);
        pattern.lineTo(60, 40);
        pattern.lineTo(40, 60);
        pattern.lineTo(20, 60);
        pattern.lineTo(0, 40);
        pattern.lineTo(0, 20);
        //Zellmembranen einfärben und zeichnen
        pattern.strokeStyle = "#80bfff";
        pattern.stroke();
        pattern.closePath();
        //Zellkern zeichnen und einfärben 
        pattern.beginPath();
        pattern.arc(30, 30, 5, 0, 2 * Math.PI);
        pattern.fillStyle = "#80bfff";
        pattern.fill();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    function drawCells() {
        console.log("Zellen");
        let minR;
        let maxR;
        let posX;
        let posY;
        let radius;
        let nCells = (width + height) / 5;
        crc2.beginPath();
        crc2.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
        crc2.fillStyle = "#ccccff";
        crc2.strokeStyle = "#6666ff";
        crc2.fill();
        crc2.stroke();
        // Zellkern zeichnen
        crc2.beginPath();
        crc2.arc(100, 100, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#9999ff";
        crc2.strokeStyle = "#fff";
        crc2.fill();
        crc2.stroke();
        for (let i = 0; i < nCells; i++) {
            posX = Math.random() * canvas.width;
            posY = Math.random() * canvas.height;
            radius = minR + (Math.random() * (maxR - minR));
        }
    }
    function drawCoronaVirus(_position, _size) {
        // let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 30, 0, 0, 0);
        // gradient.addColorStop(0, "#0000ff");
        // gradient.addColorStop(0.7, "#00cc00");
        // gradient.addColorStop(1, "#00cc00");
        // crc2.beginPath();
        // crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        // crc2.fillStyle = gradient;
        // crc2.fill();
        // crc2.strokeStyle = "black";
        // crc2.stroke();
        let r1 = 20;
        let r2 = 30;
        let nVirus = 5;
        let virus = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        virus.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "red");
        gradient.addColorStop(1, "orange");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fill();
        for (let drawn = 0; drawn < nVirus; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(virus);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawAntibody(_position, _size) {
        // let radiusAntibody: number = 50;
        // let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusAntibody);
        // gradient.addColorStop(0, "red");
        // gradient.addColorStop(1, "white");
        // crc2.beginPath();
        // crc2.arc(300, 400, 60, 0, 2 * Math.PI);
        // crc2.fillStyle = gradient;
        // crc2.fill();
        // crc2.closePath()
        let r1 = 20;
        let r2 = 30;
        let nAntibody = 5;
        let antibody = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        antibody.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "green");
        gradient.addColorStop(1, "white");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fill();
        for (let drawn = 0; drawn < nAntibody; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(antibody);
            crc2.restore();
        }
        crc2.restore();
    }
})(Virus || (Virus = {}));
//# sourceMappingURL=script.js.map