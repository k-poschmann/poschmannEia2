"use strict";
var Virus_Advanced;
(function (Virus_Advanced) {
    class Corona extends Virus_Advanced.Moveable {
        constructor(_position, _target) {
            super(_position);
            this.velocity.random(30, 80);
            this.target = _target;
        }
        draw() {
            let r1 = 5;
            let r2 = 10;
            let gradient = Virus_Advanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "red");
            gradient.addColorStop(1, "orange");
            Virus_Advanced.crc2.beginPath();
            Virus_Advanced.crc2.save();
            Virus_Advanced.crc2.translate(this.position.x, this.position.y);
            Virus_Advanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Virus_Advanced.crc2.fillStyle = gradient;
            Virus_Advanced.crc2.strokeStyle = "orange";
            Virus_Advanced.crc2.stroke();
            Virus_Advanced.crc2.fill();
            Virus_Advanced.crc2.closePath();
            Virus_Advanced.crc2.restore();
            // console.log(this.position.x, this.position.y);
        }
        //babla
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Virus_Advanced.Corona = Corona;
})(Virus_Advanced || (Virus_Advanced = {}));
//# sourceMappingURL=Corona.js.map