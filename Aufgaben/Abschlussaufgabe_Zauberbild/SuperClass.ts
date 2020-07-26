namespace Zauberbild {

    export abstract class SuperClass {
        color: string;
        rotation: number;
        size: Vector;
        position: Vector;
        active: boolean;

        constructor(_position?: Vector) {
            if (_position)
            this.position = _position.copy();

            this.active = false;
            this.color = "green";
            
        }

        abstract draw(context: CanvasRenderingContext2D): void;

        changeColor(_color: string): void {
            this.color = _color;
        }

        rotate(_factor: number): void {
            this.rotation = _factor;
        }
    }
    
}