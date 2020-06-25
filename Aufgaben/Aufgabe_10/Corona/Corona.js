"use strict";
var Virus_Inheritance;
(function (Virus_Inheritance) {
    class Corona extends Virus_Inheritance.Moveable {
        constructor(_position) {
            super(_position);
            this.velocity.random(30, 80);
        }
        draw() {
            let r1 = 5;
            let r2 = 10;
            let gradient = Virus_Inheritance.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "red");
            gradient.addColorStop(1, "orange");
            Virus_Inheritance.crc2.beginPath();
            Virus_Inheritance.crc2.save();
            Virus_Inheritance.crc2.translate(this.position.x, this.position.y);
            Virus_Inheritance.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Virus_Inheritance.crc2.fillStyle = gradient;
            Virus_Inheritance.crc2.strokeStyle = "orange";
            Virus_Inheritance.crc2.stroke();
            Virus_Inheritance.crc2.fill();
            Virus_Inheritance.crc2.closePath();
            Virus_Inheritance.crc2.restore();
            // console.log(this.position.x, this.position.y);
        }
        //babla
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Virus_Inheritance.Corona = Corona;
})(Virus_Inheritance || (Virus_Inheritance = {}));
//# sourceMappingURL=Corona.js.map