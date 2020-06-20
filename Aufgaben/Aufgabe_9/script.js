"use strict";
var Virus_Classes;
(function (Virus_Classes) {
    window.addEventListener("load", handleLoad);
    Virus_Classes.canvas = document.querySelector("canvas");
    let coronaCells = [];
    let antibodyCells = [];
    let particleCells = [];
    let backgroudnImage;
    // Variable ImageData deklarieren <-- UNBEDINGT MACHEN!!!!
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Virus_Classes.crc2 = canvas.getContext("2d");
        drawBackground();
        let p = new Virus_Classes.Vector(150, 375);
        drawCells(p);
        drawCoronaVirus(10);
        drawAntibody(10);
        //drawParticle({ x: 130, y: 490 });
        window.setInterval(animation, 20);
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
        Virus_Classes.crc2.fillStyle = Virus_Classes.crc2.createPattern(pattern.canvas, "repeat");
        Virus_Classes.crc2.fillRect(0, 0, Virus_Classes.canvas.width, Virus_Classes.canvas.height);
    }
    // ----- MENSCHLICHE ZELLEN WERDEN ERSTELLT ---- \\
    function createCells(_position) {
        // Mit Math.random werden zufällige Positionen erzeugt
        let x = 60 * Math.random() + 10;
        let y = 50 * Math.random() + 10;
        // Koordinatensystem wird verschoben
        Virus_Classes.crc2.translate(_position.x, _position.y);
        // Zelle wird erstellt
        Virus_Classes.crc2.beginPath();
        Virus_Classes.crc2.ellipse(100, 50, x, y, 5, 90, 10, true);
        Virus_Classes.crc2.strokeStyle = "#6666ff";
        Virus_Classes.crc2.fillStyle = "#9999ff";
        Virus_Classes.crc2.fill();
        Virus_Classes.crc2.closePath();
        Virus_Classes.crc2.stroke();
        //Zellkern wird erstellt
        Virus_Classes.crc2.beginPath();
        Virus_Classes.crc2.arc(100, 60, 7, 0, 2 * Math.PI);
        Virus_Classes.crc2.fillStyle = "#9999ff";
        Virus_Classes.crc2.strokeStyle = "#fff";
        Virus_Classes.crc2.fill();
        Virus_Classes.crc2.stroke();
    }
    function drawCells(_size) {
        // For Schleife generiert die zu platzierende Zellen
        // Mit Math.random werden zufällige größen erstellt
        let nCells = 5;
        for (let drawn = 0; drawn < nCells; drawn++) {
            Virus_Classes.crc2.save();
            let x = (Math.random()) * _size.x;
            let y = ((Math.random()) * _size.y);
            let z = new Virus_Classes.Vector(x, y);
            // FKT. zeichnet erstellte Zellen auf die Canvas
            createCells(z);
            Virus_Classes.crc2.restore();
        }
        backgroudnImage = Virus_Classes.crc2.getImageData(0, 0, Virus_Classes.canvas.width, Virus_Classes.canvas.height);
    }
    // ---- CORONA VIREN WERDEN ERSTELLT ---- \\
    function drawCoronaVirus(_nCorona) {
        for (let i = 0; i < _nCorona; i++) {
            let positionX = Math.random() * Virus_Classes.canvas.width;
            let positionY = Math.random() * Virus_Classes.canvas.height;
            let postion = new Virus_Classes.Vector(positionX, positionY);
            let corona = new Virus_Classes.Corona(postion);
            corona.draw();
            coronaCells.push(corona);
        }
        // console.log(coronaCells);
    }
    // ---- ANTIKÖRPER WERDEN ERSTELLT ---- \\
    function drawAntibody(_nAntibody) {
        for (let i = 0; i < _nAntibody; i++) {
            let antibody = new Virus_Classes.Antibody();
            antibodyCells.push(antibody);
        }
    }
    // ------ ANIMATION ------ \\
    function animation() {
        Virus_Classes.crc2.putImageData(backgroudnImage, 0, 0);
        Virus_Classes.crc2.fillRect(0, 0, Virus_Classes.crc2.canvas.width, Virus_Classes.crc2.canvas.height);
        for (let corona of coronaCells) {
            corona.move(1 / 200);
            corona.draw();
        }
        for (let antibody of antibodyCells) {
            antibody.move(1 / 50);
            antibody.draw();
        }
    }
})(Virus_Classes || (Virus_Classes = {}));
//# sourceMappingURL=script.js.map