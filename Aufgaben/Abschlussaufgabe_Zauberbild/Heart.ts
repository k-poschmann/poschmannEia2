namespace Zauberbild {
    export class Heart {
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
                cxtheart.save(); 
                cxtheart.scale(2, 1.2); 
                cxtheart.translate(this.position.x, this.position.y);
                cxtheart.fillStyle = "red";
                cxtheart.beginPath();
                cxtheart.moveTo(75, 40);
                cxtheart.bezierCurveTo(75, 37, 70, 25, 50, 25);
                cxtheart.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
                cxtheart.bezierCurveTo(20, 80, 40, 102, 75, 120);
                cxtheart.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
                cxtheart.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
                cxtheart.bezierCurveTo(85, 25, 75, 37, 75, 40);
                cxtheart.fill();
            }
        }
    }