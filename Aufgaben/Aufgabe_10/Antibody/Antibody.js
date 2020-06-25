"use strict";
var Virus_Inheritance;
(function (Virus_Inheritance) {
    class Antibody {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Virus_Inheritance.Vector(0, 0);
            this.velocity = new Virus_Inheritance.Vector(0, 0);
            this.velocity.random(50, 100);
        }
        draw() {
            let r1 = 5;
            let r2 = 10;
            let gradient = Virus_Inheritance.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "green");
            gradient.addColorStop(1, "white");
            Virus_Inheritance.crc2.beginPath();
            Virus_Inheritance.crc2.save();
            Virus_Inheritance.crc2.translate(this.position.x, this.position.y);
            Virus_Inheritance.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Virus_Inheritance.crc2.fillStyle = gradient;
            Virus_Inheritance.crc2.strokeStyle = "white";
            Virus_Inheritance.crc2.stroke();
            Virus_Inheritance.crc2.fill();
            Virus_Inheritance.crc2.closePath();
            Virus_Inheritance.crc2.restore();
        }
    }
    Virus_Inheritance.Antibody = Antibody;
})(Virus_Inheritance || (Virus_Inheritance = {}));
//# sourceMappingURL=Antibody.js.map