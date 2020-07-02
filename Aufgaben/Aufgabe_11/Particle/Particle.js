"use strict";
var Virus_Advanced;
(function (Virus_Advanced) {
    class Particle extends Virus_Advanced.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity.random(50, 100);
            this.sizeX = (Math.random()) * 3;
            this.sizeY = ((Math.random()) * 3);
        }
        draw() {
            // console.log("Particle draw");
            Virus_Advanced.crc2.save();
            // Zelle wird erstellt
            Virus_Advanced.crc2.beginPath();
            Virus_Advanced.crc2.translate(this.position.x, this.position.y);
            Virus_Advanced.crc2.ellipse(0, 0, this.sizeX, this.sizeY, 5, 90, 10, true);
            Virus_Advanced.crc2.strokeStyle = "#dc143c";
            Virus_Advanced.crc2.stroke();
            Virus_Advanced.crc2.closePath();
            Virus_Advanced.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Virus_Advanced.Particle = Particle;
})(Virus_Advanced || (Virus_Advanced = {}));
//# sourceMappingURL=Particle.js.map