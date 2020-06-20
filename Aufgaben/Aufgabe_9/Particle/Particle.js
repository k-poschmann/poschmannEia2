"use strict";
var Virus_Classes;
(function (Virus_Classes) {
    class Particle {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Virus_Classes.Vector(0, 0);
            this.velocity = new Virus_Classes.Vector(0, 0);
            this.velocity.random(50, 100);
        }
        draw() {
            // console.log("Particle draw");
            Virus_Classes.crc2.save();
            // Mit Math.random werden zufällige Größen erzeugt
            let x = 1 * Math.random() + 2;
            let y = 1 * Math.random() + 3;
            // Zelle wird erstellt
            Virus_Classes.crc2.beginPath();
            Virus_Classes.crc2.translate(this.position.x, this.position.y);
            Virus_Classes.crc2.ellipse(100, 50, x, y, 5, 90, 10, true);
            Virus_Classes.crc2.strokeStyle = "#dc143c";
            Virus_Classes.crc2.stroke();
            Virus_Classes.crc2.closePath();
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
    Virus_Classes.Particle = Particle;
})(Virus_Classes || (Virus_Classes = {}));
//# sourceMappingURL=Particle.js.map