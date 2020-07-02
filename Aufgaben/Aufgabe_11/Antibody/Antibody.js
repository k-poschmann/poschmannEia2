"use strict";
var Virus_Advanced;
(function (Virus_Advanced) {
    class Antibody {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Virus_Advanced.Vector(0, 0);
            this.velocity = new Virus_Advanced.Vector(0, 0);
            this.velocity.random(50, 100);
        }
        draw() {
            let r1 = 5;
            let r2 = 10;
            let gradient = Virus_Advanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "green");
            gradient.addColorStop(1, "white");
            Virus_Advanced.crc2.beginPath();
            Virus_Advanced.crc2.save();
            Virus_Advanced.crc2.translate(this.position.x, this.position.y);
            Virus_Advanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Virus_Advanced.crc2.fillStyle = gradient;
            Virus_Advanced.crc2.strokeStyle = "white";
            Virus_Advanced.crc2.stroke();
            Virus_Advanced.crc2.fill();
            Virus_Advanced.crc2.closePath();
            Virus_Advanced.crc2.restore();
        }
    }
    Virus_Advanced.Antibody = Antibody;
})(Virus_Advanced || (Virus_Advanced = {}));
//# sourceMappingURL=Antibody.js.map