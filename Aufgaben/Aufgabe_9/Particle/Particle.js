"use strict";
var Virus_Classes;
(function (Virus_Classes) {
    class Particle {
        constructor(_position) {
            this.velocity = new Virus_Classes.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        draw(_position, _size) {
            console.log("Particle draw");
            Virus_Classes.crc2.save();
            Virus_Classes.crc2.translate(this.position.x, this.position.y);
            // Mit Math.random werden zufällige Positionen erzeugt
            let x = 1 * Math.random() + 5;
            let y = 1 * Math.random() + 5;
            // Koordinatensystem wird verschoben
            Virus_Classes.crc2.translate(_position.x, _position.y);
            // Zelle wird erstellt
            Virus_Classes.crc2.beginPath();
            Virus_Classes.crc2.ellipse(100, 50, x, y, 5, 90, 10, true);
            Virus_Classes.crc2.strokeStyle = "orange";
            Virus_Classes.crc2.closePath();
            Virus_Classes.crc2.stroke();
            // For Schleife generiert die zu platzierende Zellen
            // Mit Math.random werden zufällige größen erstellt
            let nParticle = 80;
            for (let drawn = 0; drawn < nParticle; drawn++) {
                Virus_Classes.crc2.save();
                let x = (Math.random()) * _size.x;
                let y = ((Math.random()) * _size.y);
                Virus_Classes.crc2.translate(x, y);
                // FKT. zeichnet erstellte Zellen auf die Canvas
                //createParticle({ x, y });
                Virus_Classes.crc2.restore();
            }
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