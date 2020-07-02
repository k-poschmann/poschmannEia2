namespace Virus_Advanced {
    export class Particle extends Moveable {

        constructor(_position: Vector) {
            super(_position);
            this.velocity.random(50, 100);
        }

        draw(): void {
            // console.log("Particle draw");
            crc2.save();
            // Mit Math.random werden zufällige Größen erzeugt
            let x: number = (Math.random()) * 2;
            let y: number = ((Math.random()) * 3);

            // Zelle wird erstellt
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.ellipse(100, 50, x, y, 5, 90, 10, true);
            crc2.strokeStyle = "#dc143c";
            crc2.stroke();
            crc2.closePath();
            
            crc2.restore();

        }

        move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}