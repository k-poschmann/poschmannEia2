namespace Virus_Classes {
    export class Corona {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            this.position = _position;
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
        }

        draw(_position: Vector, _size: Vector): void {
            console.log("Corona draw");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            let r1: number = 5;
            let r2: number = 10;
            let virus: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            virus.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "red");

            
            gradient.addColorStop(1, "orange");
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.stroke();
            crc2.fill();
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