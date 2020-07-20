namespace Zauberbild {
    export class Star {
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
                cxtstar.beginPath();
                cxtstar.save();
                cxtstar.translate(this.position.x, this.position.y);
                cxtstar.moveTo(108, 0.0);
                cxtstar.lineTo(141, 70);
                cxtstar.lineTo(218, 78.3);
                cxtstar.lineTo(162, 131);
                cxtstar.lineTo(175, 205);
                cxtstar.lineTo(108, 170);
                cxtstar.lineTo(41.2, 205);
                cxtstar.lineTo(55, 131);
                cxtstar.lineTo(1, 78);
                cxtstar.lineTo(75, 68);
                cxtstar.lineTo(108, 0);
                cxtstar.closePath();
                cxtstar.strokeStyle = "orange";
                cxtstar.stroke();

            }
        }
    }