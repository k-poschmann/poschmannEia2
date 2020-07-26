namespace Zauberbild {

    export abstract class SuperClass {
        color: string;
        rotation: number;
        size: Vector;
        position: Vector;
        active: boolean = true;
        //type: string;

        constructor(_position?: Vector) {
            if (_position)
            this.position = _position.copy();

            // if (this.active == true) {
            //     console.log("This is true");
            // }
            
        }

        abstract draw(context: CanvasRenderingContext2D): void;

        changeColor(_color: string): void {
            this.color = _color;
        }
    }
    
}