"use strict";
var Virus;
(function (Virus) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    function handleLoad(_event) {
        drawBackground();
        drawCells({ x: 50, y: 50 }, { x: 150, y: 275 });
        drawCoronaVirus({ x: 60, y: 120 }, { x: 70, y: 70 });
        drawAntibody({ x: 240, y: 120 }, { x: 70, y: 70 });
        drawParticle({ x: 130, y: 490 }, { x: 70, y: 70 });
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
    function drawCells(_position, _size) {
        let nCells = 20;
        for (let drawn = 0; drawn < nCells; drawn++) {
            crc2.save();
            let radiusCell = ((Math.random() + 0.5) * 20);
            let cell = new Path2D();
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = "#ccccff";
            crc2.strokeStyle = "#6666ff";
            cell.ellipse(100, 100, radiusCell, 35, Math.PI / 4, 0, 2 * Math.PI);
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(cell);
            // Zellkern zeichnen
            crc2.beginPath();
            crc2.arc(100, 100, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#9999ff";
            crc2.strokeStyle = "#fff";
            crc2.fill();
            crc2.stroke();
            crc2.restore();
        }
        crc2.restore();
    }
    function drawCoronaVirus(_position, _size) {
        let r1 = 5;
        let r2 = 10;
        let nVirus = 10;
        let virus = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        virus.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "red");
        gradient.addColorStop(1, "orange");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
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
        let r1 = 5;
        let r2 = 10;
        let nAntibody = 5;
        let antibody = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        antibody.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "green");
        gradient.addColorStop(1, "white");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
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
    function drawParticle(_position, _size) {
        let r1 = 1;
        let r2 = 8;
        let nParticles = 50;
        let particle = new Path2D();
        particle.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = "yellow";
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
})(Virus || (Virus = {}));
//# sourceMappingURL=script.js.map