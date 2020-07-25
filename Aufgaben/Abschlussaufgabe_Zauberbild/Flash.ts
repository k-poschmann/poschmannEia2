namespace Zauberbild {
    export class Flash extends SuperClass {
        position: Vector;
        size: Vector;
        rotation: number;

        constructor(_position: Vector) {
            super(_position);
        }

        draw(context: CanvasRenderingContext2D): void {
            context.save();
            context.translate(this.position.x, this.position.y);
            cxtflash.scale(1.8, 0.7);
            // cxt.scale(0.4, 0.4);
            context.fillStyle = "black";
            context.beginPath();
            context.lineTo(0, -10);
            context.lineTo(60, 30);
            context.lineTo(30, 60);
            context.lineTo(50, 85);
            context.lineTo(20, 120);
            context.lineTo(35, 140);
            context.lineTo(-10, 180);
            context.lineTo(0, 140);
            context.lineTo(-15, 120);
            context.lineTo(5, 90);
            context.lineTo(-20, 60);
            context.lineTo(0, -10);
            context.fill();
            context.restore;
        }
    }
}