namespace Zauberbild {
    export class Star extends SuperClass {

        constructor(_position: Vector) {
            super(_position);

            if (_position)
            this.position = _position.copy();
        }

            draw(): void {
                cxtstar.beginPath();
                cxtstar.save();
                cxtstar.translate(this.position.x, this.position.y);
                cxtstar.scale(1.2, 0.6);
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
                cxtstar.fillStyle = "yellow";
                cxtstar.fill();
            }
        }
}