namespace Zauberbild {

    export abstract class SuperClass {
        color: string;
        rotation: number;
        velocity: Vector;
        position: Vector;
        active: boolean;

        constructor(_position?: Vector) {
            if (_position)
                this.position = _position.copy();

            this.active = false;
            this.color = "green";
            this.velocity = new Vector(0, 0);
            this.velocity.random(0, 0);
        }

        abstract draw(context: CanvasRenderingContext2D): void;

        changeColor(_color: string): void {
            this.color = _color;
        }

        rotate(_factor: number): void {
            this.rotation = _factor;

        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += cxt.canvas.width;
            if (this.position.y < 0)
                this.position.y += cxt.canvas.height;
            if (this.position.x > cxt.canvas.width)
                this.position.x -= cxt.canvas.width;
            if (this.position.y > cxt.canvas.height)
                this.position.y -= cxt.canvas.height;
        }
    }


}