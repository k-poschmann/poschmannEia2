"use strict";
var Virus_Inheritance;
(function (Virus_Inheritance) {
    class BodyCell {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Virus_Inheritance.Vector(0, 0);
            this.size = Math.random() + 50;
            this.size = Math.random() + 10;
        }
        draw() {
            // Mit Math.random werden zufällige Positionen erzeugt
            // let x: number = 60 * Math.random() + 10;
            // let y: number = 50 * Math.random() + 10;
            // Zelle wird erstellt
            Virus_Inheritance.crc2.beginPath();
            Virus_Inheritance.crc2.save();
            Virus_Inheritance.crc2.translate(this.position.x, this.position.y);
            Virus_Inheritance.crc2.ellipse(100, 50, this.size, this.size, 5, 90, 10, true);
            Virus_Inheritance.crc2.strokeStyle = "#6666ff";
            Virus_Inheritance.crc2.fillStyle = "#9999ff";
            Virus_Inheritance.crc2.fill();
            Virus_Inheritance.crc2.stroke();
            Virus_Inheritance.crc2.closePath();
            //Zellkern wird erstellt
            Virus_Inheritance.crc2.beginPath();
            Virus_Inheritance.crc2.arc(100, 60, 7, 0, 2 * Math.PI);
            Virus_Inheritance.crc2.fillStyle = "#9999ff";
            Virus_Inheritance.crc2.strokeStyle = "#fff";
            Virus_Inheritance.crc2.fill();
            Virus_Inheritance.crc2.stroke();
            Virus_Inheritance.crc2.closePath();
            Virus_Inheritance.crc2.restore();
        }
    }
    Virus_Inheritance.BodyCell = BodyCell;
})(Virus_Inheritance || (Virus_Inheritance = {}));
//# sourceMappingURL=BodyCells.js.map