namespace Virus_Advanced {
    export class Particle extends Moveable {
        private sizeX: number;
        private sizeY: number;

        public constructor(_position: Vector) {
            super(_position);
            this.velocity.random(50, 100);

            this.sizeX = (Math.random()) * 3;
            this.sizeY = ((Math.random()) * 3);
        }

        public draw(): void {
            // console.log("Particle draw");
            crc2.save();

            // Zelle wird erstellt
            crc2.beginPath();
            crc2.translate(this.position.x, this.position.y);
            crc2.ellipse(0, 0, this.sizeX, this.sizeY, 5, 90, 10, true);
            crc2.strokeStyle = "#dc143c";
            crc2.stroke();
            crc2.closePath();
            
            crc2.restore();

        }

        public move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}