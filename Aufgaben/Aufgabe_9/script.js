"use strict";
var Virus;
(function (Virus) {
    window.addEventListener("load", handleLoad);
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    function handleLoad(_event) {
        drawBackground();
        drawCells({ x: 120, y: 690 });
        drawCoronaVirus({ x: 60, y: 120 }, { x: 70, y: 70 });
        drawAntibody({ x: 280, y: 520 }, { x: 70, y: 70 });
        drawParticle({ x: 130, y: 490 });
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
    // ----- MENSCHLICHE ZELLEN WERDEN ERSTELLT ---- \\
    function createCells(_position) {
        crc2.restore();
        crc2.save();
        // Mit Math.random werden zufällige Positionen erzeugt
        let x = 50 * Math.random() + 5;
        let y = 50 * Math.random() + 5;
        console.log(x, y);
        // Koordinatensystem wird verschoben
        crc2.translate(_position.x, _position.y);
        // Zelle wird erstellt
        crc2.beginPath();
        crc2.ellipse(100, 50, x, y, 5, 90, 10, true);
        crc2.strokeStyle = "#6666ff";
        crc2.fillStyle = "#9999ff";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        //Zellkern wird erstellt
        crc2.beginPath();
        crc2.arc(100, 100, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "#9999ff";
        crc2.strokeStyle = "#fff";
        crc2.fill();
        crc2.stroke();
    }
    function drawCells(_size) {
        // For Schleife generiert die zu platzierende Zellen
        // Mit Math.random werden zufällige größen erstellt 
        let nCells = 10;
        for (let drawn = 0; drawn < nCells; drawn++) {
            crc2.save();
            let x = (Math.random()) * _size.x;
            let y = ((Math.random()) * _size.y);
            crc2.translate(x, y);
            // FKT. zeichnet erstellte Zellen auf die Canvas
            createCells({ x, y });
            crc2.restore();
        }
        crc2.restore();
    }
    // ---- CORONA VIREN WERDEN ERSTELLT ---- \\
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
    // ---- ANTIKÖRPER WERDEN ERSTELLT ---- \\
    function drawAntibody(_position, _size) {
        let r1 = 5;
        let r2 = 10;
        let nAntibody = 10;
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
    // ----- PARTIKEL WERDEN ERSTELLT ---- \\
    function createParticle(_position) {
        crc2.restore();
        crc2.save();
        // Mit Math.random werden zufällige Positionen erzeugt
        let x = 1 * Math.random() + 5;
        let y = 1 * Math.random() + 5;
        console.log(x, y);
        // Koordinatensystem wird verschoben
        crc2.translate(_position.x, _position.y);
        // Zelle wird erstellt
        crc2.beginPath();
        crc2.ellipse(100, 50, x, y, 5, 90, 10, true);
        crc2.strokeStyle = "orange";
        crc2.closePath();
        crc2.stroke();
    }
    function drawParticle(_size) {
        // For Schleife generiert die zu platzierende Zellen
        // Mit Math.random werden zufällige größen erstellt 
        let nParticle = 80;
        for (let drawn = 0; drawn < nParticle; drawn++) {
            crc2.save();
            let x = (Math.random()) * _size.x;
            let y = ((Math.random()) * _size.y);
            crc2.translate(x, y);
            // FKT. zeichnet erstellte Zellen auf die Canvas
            createParticle({ x, y });
            crc2.restore();
        }
        crc2.restore();
    }
})(Virus || (Virus = {}));
//# sourceMappingURL=script.js.map