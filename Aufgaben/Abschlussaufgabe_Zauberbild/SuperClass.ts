namespace Zauberbild {

    export abstract class SuperClass {
        color: string[] = ["blue", "red", "green"];
        rotation: number;
        size: Vector;
        position: Vector;
        active: boolean;
        //type: string;

        constructor(_position?: Vector) {
            if (_position)
            this.position = _position.copy();

            
        }

        abstract draw(context: CanvasRenderingContext2D): void;


        
    }
    
}