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
            let virus = new Path2D();
            let gradient = Virus_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            virus.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "red");
            gradient.addColorStop(1, "orange");
            Virus_Classes.crc2.save();
            Virus_Classes.crc2.translate(this.position.x, this.position.y);
            Virus_Classes.crc2.fillStyle = gradient;
            Virus_Classes.crc2.stroke();
            Virus_Classes.crc2.fill();
            Virus_Classes.crc2.restore();
        }
        move(_timeslice) {
            let offset = new Virus_Classes.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Virus_Classes.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Virus_Classes.crc2.canvas.height;
            if (this.position.x > Virus_Classes.crc2.canvas.width)
                this.position.x -= Virus_Classes.crc2.canvas.width;
            if (this.position.y > Virus_Classes.crc2.canvas.height)
                this.position.y -= Virus_Classes.crc2.canvas.height;
        }
    }
    Virus_Classes.Antibody = Antibody;
})(Virus_Classes || (Virus_Classes = {}));
//# sourceMappingURL=Antibody.js.map