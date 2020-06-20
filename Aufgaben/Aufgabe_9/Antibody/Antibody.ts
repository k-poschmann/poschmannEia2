namespace Virus_Classes {
    export class Antibody {
        position: Vector;
        velocity: Vector;

        constructor(_position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(50, 100);
        }

        draw(): void {

            let r1: number = 5;
            let r2: number = 10;
            let virus: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            virus.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "red");
            gradient.addColorStop(1, "orange");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            crc2.stroke();
            crc2.fill();
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