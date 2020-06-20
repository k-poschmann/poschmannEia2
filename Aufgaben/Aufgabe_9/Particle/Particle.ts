namespace Virus_Classes {
    export class Particle {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100);
        }

        draw(): void {
            // console.log("Particle draw");
            crc2.save();
            // Mit Math.random werden zufällige Größen erzeugt
            let x: number = 1 * Math.random() + 2;
            let y: number = 1 * Math.random() + 3;

            // Zelle wird erstellt
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.ellipse(100, 50, x, y, 5, 90, 10, true);
            crc2.strokeStyle = "#dc143c";
            crc2.stroke();
            crc2.closePath();
            
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