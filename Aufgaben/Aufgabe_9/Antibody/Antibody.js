"use strict";
var Virus_Classes;
(function (Virus_Classes) {
    class Antibody {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Virus_Classes.Vector(0, 0);
            this.velocity = new Virus_Classes.Vector(0, 0);
            this.velocity.random(50, 100);
        }
        draw() {
            let r1 = 5;
            let r2 = 10;
            let gradient = Virus_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "green");
            gradient.addColorStop(1, "white");
            Virus_Classes.crc2.beginPath();
            Virus_Classes.crc2.save();
            Virus_Classes.crc2.translate(this.position.x, this.position.y);
            Virus_Classes.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Virus_Classes.crc2.fillStyle = gradient;
            Virus_Classes.crc2.strokeStyle = "white";
            Virus_Classes.crc2.stroke();
            Virus_Classes.crc2.fill();
            Virus_Classes.crc2.closePath();
            Virus_Classes.crc2.restore();
        }
    }
    Virus_Classes.Antibody = Antibody;
})(Virus_Classes || (Virus_Classes = {}));
//# sourceMappingURL=Antibody.js.map