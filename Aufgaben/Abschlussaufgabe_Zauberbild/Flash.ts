namespace Zauberbild {
    export class Flash {
        position: Vector;
        size: Vector;
        rotation: number;

        constructor(_position: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);
        }

        draw(): void {
            cxtflash.save();
            cxtflash.translate(this.position.x, this.position.y);
            cxtflash.scale(1.8, 0.7);
            cxtflash.fillStyle = "black";
            cxtflash.beginPath();
            cxtflash.lineTo(0, -10);
            cxtflash.lineTo(60, 30);
            cxtflash.lineTo(30, 60);
            cxtflash.lineTo(50, 85);
            cxtflash.lineTo(20, 120);
            cxtflash.lineTo(35, 140);
            cxtflash.lineTo(-10, 180);
            cxtflash.lineTo(0, 140);
            cxtflash.lineTo(-15, 120);
            cxtflash.lineTo(5, 90);
            cxtflash.lineTo(-20, 60);
            cxtflash.lineTo(0, -10);
            cxtflash.fill();
        }
    }
}