"use strict";
var Virus_Inheritance;
(function (Virus_Inheritance) {
    class Particle extends Virus_Inheritance.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity.random(50, 100);
        }
        draw() {
            // console.log("Particle draw");
            Virus_Inheritance.crc2.save();
            // Mit Math.random werden zufällige Größen erzeugt
            let x = 1 * Math.random() + 2;
            let y = 1 * Math.random() + 3;
            // Zelle wird erstellt
            Virus_Inheritance.crc2.beginPath();
            Virus_Inheritance.crc2.translate(this.position.x, this.position.y);
            Virus_Inheritance.crc2.ellipse(100, 50, x, y, 5, 90, 10, true);
            Virus_Inheritance.crc2.strokeStyle = "#dc143c";
            Virus_Inheritance.crc2.stroke();
            Virus_Inheritance.crc2.closePath();
            Virus_Inheritance.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Virus_Inheritance.Particle = Particle;
})(Virus_Inheritance || (Virus_Inheritance = {}));
//# sourceMappingURL=Particle.js.map