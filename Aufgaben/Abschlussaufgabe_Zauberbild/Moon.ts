namespace Zauberbild {
    export class Moon extends SuperClass {
        position: Vector;
        size: Vector;
        rotation: number;

        constructor(_position: Vector) {
            super(_position);
            this.color = "#d629b1";
        }

            draw(context: CanvasRenderingContext2D): void {
                context.save(); 
                context.scale(1, 1.2); 
                cxt.scale(0.4, 0.8);
                context.translate(this.position.x, this.position.y);
                context.fillStyle = this.color;
                //context.lineWidth = 5;
                context.beginPath();
                context.bezierCurveTo(170, 0, -100, 60, 170, 110);
                context.bezierCurveTo(170, 100, 90, 70, 170, 0);
                if (this.active == true) {
                    context.strokeStyle = "pink";
                    context.lineWidth = 5;
                    context.stroke();
                } 
                context.fill();
                context.restore();          
            }

            changeColor(_color: string): void {
                super.changeColor(_color);
            }
    
            move(_timeslice: number): void {
                super.move(_timeslice);
                // this.rotation = 3;
            }
        }
    }