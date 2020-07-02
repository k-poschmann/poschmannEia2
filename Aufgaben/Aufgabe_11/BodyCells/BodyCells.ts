namespace Virus_Advanced {
    export class BodyCell {
        public position: Vector;
        private sizeX: number;
        private sizeY: number;

        public constructor(_position: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.sizeX = 10 * Math.random() + 70;
            this.sizeY = 20 * Math.random() + 30;
        }

        public draw(): void {
        // Mit Math.random werden zufällige Positionen erzeugt
        // let x: number = 60 * Math.random() + 10;
        // let y: number = 50 * Math.random() + 10;
        
        // Zelle wird erstellt
        crc2.beginPath();
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.ellipse(0, 0, this.sizeX, this.sizeY , 5, 90, 10, true);
        crc2.strokeStyle = "#6666ff";
        crc2.fillStyle = "#9999ff";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        //Zellkern wird erstellt
        crc2.beginPath();
        crc2.arc(0, 0, 7, 0, 2 * Math.PI);
        crc2.fillStyle = "#9999ff";
        crc2.strokeStyle = "#fff";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        crc2.restore();
        }
}
}