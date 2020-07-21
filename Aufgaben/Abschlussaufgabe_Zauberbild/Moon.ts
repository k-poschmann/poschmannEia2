namespace Zauberbild {
    export class Moon {
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
                cxtmoon.save(); 
                cxtmoon.scale(1, 1.2); 
                cxtmoon.translate(this.position.x, this.position.y);
                cxtmoon.fillStyle = "#d629b1";
                cxtmoon.lineWidth = 5;
                cxtmoon.beginPath();
                cxtmoon.bezierCurveTo(170, 0, -100, 60, 170, 110);
                cxtmoon.bezierCurveTo(170, 100, 90, 70, 170, 0);
                cxtmoon.fill();          
            }
        }
    }