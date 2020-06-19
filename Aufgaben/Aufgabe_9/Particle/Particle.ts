namespace Virus_Classes {
    export class Particle {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }

        draw(_position: Vector, _size: Vector): void {
            console.log("Particle draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            // Mit Math.random werden zufällige Positionen erzeugt
            let x: number = 1 * Math.random() + 5;
            let y: number = 1 * Math.random() + 5;
            // Koordinatensystem wird verschoben
            crc2.translate(_position.x, _position.y);

            // Zelle wird erstellt
            crc2.beginPath();
            crc2.ellipse(100, 50, x, y, 5, 90, 10, true);
            crc2.strokeStyle = "orange";
            crc2.closePath();
            crc2.stroke();


            // For Schleife generiert die zu platzierende Zellen
            // Mit Math.random werden zufällige größen erstellt
            let nParticle: number = 80;
            for (let drawn: number = 0; drawn < nParticle; drawn++) {
                crc2.save();
                let x: number = (Math.random()) * _size.x;
                let y: number = ((Math.random()) * _size.y);
                crc2.translate(x, y);
                // FKT. zeichnet erstellte Zellen auf die Canvas
                //createParticle({ x, y });
                crc2.restore();
            }
            crc2.restore();

        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    }
}