"use strict";
var Virus_Inheritance;
(function (Virus_Inheritance) {
    window.addEventListener("load", handleLoad);
    Virus_Inheritance.canvas = document.querySelector("canvas");
    let moveableAr = [];
    Virus_Inheritance.bodycellsAR = [];
    Virus_Inheritance.antibodyCells = [];
    // let particleCells: Particle[] = [];
    let backgroudnImage;
    // Variable ImageData deklarieren <-- UNBEDINGT MACHEN!!!!
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Virus_Inheritance.crc2 = canvas.getContext("2d");
        drawBackground();
        drawCells(5);
        drawCoronaVirus(10);
        drawAntibody(10);
        drawParticle(80);
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
        Virus_Inheritance.crc2.fillStyle = Virus_Inheritance.crc2.createPattern(pattern.canvas, "repeat");
        Virus_Inheritance.crc2.fillRect(0, 0, Virus_Inheritance.canvas.width, Virus_Inheritance.canvas.height);
        backgroudnImage = Virus_Inheritance.crc2.getImageData(0, 0, Virus_Inheritance.canvas.width, Virus_Inheritance.canvas.height);
    }
    // ----- MENSCHLICHE ZELLEN WERDEN ERSTELLT ---- \\
    function drawCells(_nBodyCells) {
        for (let drawn = 0; drawn < _nBodyCells; drawn++) {
            let positionX = Math.random() * Virus_Inheritance.canvas.width;
            let positionY = Math.random() * Virus_Inheritance.canvas.height;
            let position = new Virus_Inheritance.Vector(positionX, positionY);
            let bodycells = new Virus_Inheritance.BodyCell(position);
            bodycells.draw();
            Virus_Inheritance.bodycellsAR.push(bodycells);
        }
    }
    // ---- CORONA VIREN WERDEN ERSTELLT ---- \\
    function drawCoronaVirus(_nCorona) {
        for (let i = 0; i < _nCorona; i++) {
            let positionX = Math.random() * Virus_Inheritance.canvas.width;
            let positionY = Math.random() * Virus_Inheritance.canvas.height;
            let postion = new Virus_Inheritance.Vector(positionX, positionY);
            let corona = new Virus_Inheritance.Corona(postion);
            corona.draw();
            moveableAr.push(corona);
            console.log(corona);
        }
    }
    // ---- ANTIKÖRPER WERDEN ERSTELLT ---- \\
    function drawAntibody(_nAntibody) {
        for (let i = 0; i < _nAntibody; i++) {
            let positionX = Math.random() * Virus_Inheritance.canvas.width;
            let positionY = Math.random() * Virus_Inheritance.canvas.height;
            let postion = new Virus_Inheritance.Vector(positionX, positionY);
            let antibody = new Virus_Inheritance.Antibody(postion);
            antibody.draw();
            Virus_Inheritance.antibodyCells.push(antibody);
        }
    }
    // ---- Partikel WERDEN ERSTELLT ---- \\
    function drawParticle(_nParticle) {
        for (let drawn = 0; drawn < _nParticle; drawn++) {
            Virus_Inheritance.crc2.save();
            let positionX = Math.random() * Virus_Inheritance.canvas.width;
            let positionY = Math.random() * Virus_Inheritance.canvas.height;
            let postion = new Virus_Inheritance.Vector(positionX, positionY);
            let particle = new Virus_Inheritance.Particle(postion);
            particle.draw();
            moveableAr.push(particle);
            console.log(particle);
        }
    }
    // ------ ANIMATION ------ \\
    function animation() {
        Virus_Inheritance.crc2.putImageData(backgroudnImage, 0, 0);
        for (let bodycell of Virus_Inheritance.bodycellsAR) {
            bodycell.draw();
        }
        for (let corona of moveableAr) {
            corona.move(1 / 200);
            corona.draw();
        }
        for (let antibody of Virus_Inheritance.antibodyCells) {
            // antibody.move(1 / 500);
            antibody.draw();
        }
        for (let particle of moveableAr) {
            particle.move(1 / 100);
            particle.draw();
        }
    }
})(Virus_Inheritance || (Virus_Inheritance = {}));
//# sourceMappingURL=script.js.map