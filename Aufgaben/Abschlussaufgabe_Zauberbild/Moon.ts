namespace Zauberbild {
    export class Moon extends SuperClass {
        position: Vector;
        size: Vector;
        rotation: number;

        constructor(_position: Vector) {
            super(_position);
        }

            draw(context: CanvasRenderingContext2D): void {
                context.save(); 
                context.scale(1, 1.2); 
                // cxt.scale(0.4, 0.4);
                context.translate(this.position.x, this.position.y);
                context.fillStyle = "#d629b1";
                //context.lineWidth = 5;
                context.beginPath();
                context.bezierCurveTo(170, 0, -100, 60, 170, 110);
                context.bezierCurveTo(170, 100, 90, 70, 170, 0);
                context.fill();
                context.restore();          
            }
        }
    }