"use strict";
var Virus_Advanced;
(function (Virus_Advanced) {
    class BodyCell extends Virus_Advanced.Moveable {
        //ublic size: number;
        constructor(_position, _size) {
            super(_position);
            this.sizeX = 10 * Math.random() + 70;
            this.sizeY = 20 * Math.random() + 30;
            this.hitRadius = 50 * _size;
        }
        draw() {
            // Mit Math.random werden zufällige Positionen erzeugt
            // let x: number = 60 * Math.random() + 10;
            // let y: number = 50 * Math.random() + 10;
            // Zelle wird erstellt
            Virus_Advanced.crc2.beginPath();
            Virus_Advanced.crc2.save();
            Virus_Advanced.crc2.translate(this.position.x, this.position.y);
            Virus_Advanced.crc2.ellipse(0, 0, this.sizeX, this.sizeY, 5, 90, 10, true);
            Virus_Advanced.crc2.strokeStyle = "#6666ff";
            Virus_Advanced.crc2.fillStyle = "#9999ff";
            Virus_Advanced.crc2.fill();
            Virus_Advanced.crc2.stroke();
            Virus_Advanced.crc2.closePath();
            //Zellkern wird erstellt
            Virus_Advanced.crc2.beginPath();
            Virus_Advanced.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            Virus_Advanced.crc2.fillStyle = "#9999ff";
            Virus_Advanced.crc2.strokeStyle = "#fff";
            Virus_Advanced.crc2.fill();
            Virus_Advanced.crc2.stroke();
            Virus_Advanced.crc2.closePath();
            Virus_Advanced.crc2.restore();
        }
    }
    Virus_Advanced.BodyCell = BodyCell;
})(Virus_Advanced || (Virus_Advanced = {}));
//# sourceMappingURL=BodyCells.js.map