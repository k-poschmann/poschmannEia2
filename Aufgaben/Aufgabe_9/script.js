"use strict";
var Virus_Classes;
(function (Virus_Classes) {
    window.addEventListener("load", handleLoad);
    Virus_Classes.canvas = document.querySelector("canvas");
    Virus_Classes.crc2 = Virus_Classes.canvas.getContext("2d");
    // { x: 150, y: 275 }
    function handleLoad(_event) {
        drawBackground();
        drawCells({ x: 150, y: 375 });
        // drawCoronaVirus({ x: 60, y: 120 }, { x: 70, y: 70 });
        drawAntibody({ x: 280, y: 520 }, { x: 70, y: 70 });
        //drawParticle({ x: 130, y: 490 });
        animation();
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
            //crc2.translate(x, y);
            // FKT. zeichnet erstellte Zellen auf die Canvas
            createCells({ x, y });
            Virus_Classes.crc2.restore();
        }
    }
    // ---- CORONA VIREN WERDEN ERSTELLT ---- \\
    // function drawCoronaVirus(_position: Vector, _size: Vector): void {
    //     let r1: number = 5;
    //     let r2: number = 10;
    //     let nVirus: number = 10;
    //     let virus: Path2D = new Path2D();
    //     let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
    //     virus.arc(0, 0, r2, 0, 2 * Math.PI);
    //     gradient.addColorStop(0, "red");
    //     gradient.addColorStop(1, "orange");
    //     crc2.save();
    //     crc2.translate(_position.x, _position.y);
    //     crc2.fillStyle = gradient;
    //     crc2.stroke();
    //     crc2.fill();
    //     for (let drawn: number = 0; drawn < nVirus; drawn++) {
    //         crc2.save();
    //         let x: number = (Math.random() - 0.5) * _size.x;
    //         let y: number = - (Math.random() * _size.y);
    //         crc2.translate(x, y);
    //         crc2.fill(virus);
    //         crc2.restore();
    //     }
    //     crc2.restore();
    // }
    // ---- ANTIKÖRPER WERDEN ERSTELLT ---- \\
    function drawAntibody(_position, _size) {
        let r1 = 5;
        let r2 = 10;
        let nAntibody = 10;
        let antibody = new Path2D();
        let gradient = Virus_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        antibody.arc(0, 0, r2, 0, 2 * Math.PI);
        gradient.addColorStop(0, "green");
        gradient.addColorStop(1, "white");
        Virus_Classes.crc2.save();
        Virus_Classes.crc2.translate(_position.x, _position.y);
        Virus_Classes.crc2.fillStyle = gradient;
        Virus_Classes.crc2.stroke();
        Virus_Classes.crc2.fill();
        for (let drawn = 0; drawn < nAntibody; drawn++) {
            Virus_Classes.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            Virus_Classes.crc2.translate(x, y);
            Virus_Classes.crc2.fill(antibody);
            Virus_Classes.crc2.restore();
        }
        Virus_Classes.crc2.restore();
    }
    // ----- PARTIKEL WERDEN ERSTELLT ---- \\
    // function createParticle(_position: Vector): void {
    //     crc2.restore();
    //     crc2.save();
    //     // Mit Math.random werden zufällige Positionen erzeugt
    //     let x: number = 1 * Math.random() + 5;
    //     let y: number = 1 * Math.random() + 5;
    //     // Koordinatensystem wird verschoben
    //     crc2.translate(_position.x, _position.y);
    //     // Zelle wird erstellt
    //     crc2.beginPath();
    //     crc2.ellipse(100, 50, x, y, 5, 90, 10, true);
    //     crc2.strokeStyle = "orange";
    //     crc2.closePath();
    //     crc2.stroke();
    // }
    // function drawParticle(_size: Vector): void {
    //     // For Schleife generiert die zu platzierende Zellen
    //     // Mit Math.random werden zufällige größen erstellt
    //     let nParticle: number = 80;
    //     for (let drawn: number = 0; drawn < nParticle; drawn++) {
    //         crc2.save();
    //         let x: number = (Math.random()) * _size.x;
    //         let y: number = ((Math.random()) * _size.y);
    //         crc2.translate(x, y);
    //         // FKT. zeichnet erstellte Zellen auf die Canvas
    //         createParticle({ x, y });
    //         crc2.restore();
    //     }
    //     crc2.restore();
})(Virus_Classes || (Virus_Classes = {}));
// ------ ANIMATION ------ \\
let coronaCells = [];
function animation() {
    for (let corona of coronaCells) {
        corona.draw(corona.position);
        corona.move(1 / 30);
    }
}
//# sourceMappingURL=script.js.map