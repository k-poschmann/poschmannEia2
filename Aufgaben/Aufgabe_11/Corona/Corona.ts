namespace Virus_Advanced {
    export class Corona extends Moveable {
        target: BodyCell;

        public constructor(_position: Vector, _target: BodyCell) {
            super(_position);
            this.velocity.random(30, 80);

            this.target = _target;
        }

        public draw(): void {
            let r1: number = 5;
            let r2: number = 10;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "red");
            gradient.addColorStop(1, "orange");


            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.strokeStyle = "orange";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            // console.log(this.position.x, this.position.y);
        }

        //babla
        public move(_timeslice: number): void {
            super.move(_timeslice);
        }
    }
}